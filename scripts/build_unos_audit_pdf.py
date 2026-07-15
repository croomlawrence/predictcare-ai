from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, ListFlowable, ListItem
from reportlab.pdfbase.pdfmetrics import stringWidth
import re, html, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
MD = ROOT/'public/UNOS/UNOS-Transplant-Database-Audit.md'
PDF = ROOT/'public/UNOS/UNOS-Transplant-Database-Audit.pdf'

raw = MD.read_text()

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='CoverKicker', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=colors.HexColor('#0f6e56'), alignment=TA_CENTER, spaceAfter=14))
styles.add(ParagraphStyle(name='CoverTitle', parent=styles['Title'], fontName='Times-Bold', fontSize=30, leading=34, textColor=colors.HexColor('#111111'), alignment=TA_CENTER, spaceAfter=16))
styles.add(ParagraphStyle(name='CoverSub', parent=styles['Normal'], fontName='Helvetica', fontSize=11, leading=16, textColor=colors.HexColor('#333333'), alignment=TA_CENTER, spaceAfter=6))
styles.add(ParagraphStyle(name='H1x', parent=styles['Heading1'], fontName='Times-Bold', fontSize=20, leading=24, spaceBefore=16, spaceAfter=9, textColor=colors.HexColor('#111111')))
styles.add(ParagraphStyle(name='H2x', parent=styles['Heading2'], fontName='Times-Bold', fontSize=15, leading=18, spaceBefore=14, spaceAfter=7, textColor=colors.HexColor('#111111')))
styles.add(ParagraphStyle(name='H3x', parent=styles['Heading3'], fontName='Helvetica-Bold', fontSize=11, leading=14, spaceBefore=10, spaceAfter=5, textColor=colors.HexColor('#0f6e56')))
styles.add(ParagraphStyle(name='Bodyx', parent=styles['BodyText'], fontName='Helvetica', fontSize=8.8, leading=12.2, spaceAfter=6, textColor=colors.HexColor('#202020')))
styles.add(ParagraphStyle(name='Smallx', parent=styles['BodyText'], fontName='Helvetica', fontSize=7.2, leading=9.3, spaceAfter=3, textColor=colors.HexColor('#202020')))
styles.add(ParagraphStyle(name='TableHead', parent=styles['BodyText'], fontName='Helvetica-Bold', fontSize=7.0, leading=8.5, textColor=colors.HexColor('#111111')))
styles.add(ParagraphStyle(name='TableCell', parent=styles['BodyText'], fontName='Helvetica', fontSize=6.8, leading=8.2, textColor=colors.HexColor('#202020')))
styles.add(ParagraphStyle(name='Quote', parent=styles['BodyText'], fontName='Helvetica-Oblique', fontSize=9.2, leading=13, leftIndent=12, rightIndent=8, borderColor=colors.HexColor('#0f6e56'), borderWidth=0, borderPadding=6, backColor=colors.HexColor('#f3eee7'), spaceAfter=8))

def clean_inline(s):
    s = html.escape(s.strip())
    s = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s)
    s = re.sub(r'`([^`]+)`', r'<font face="Courier">\1</font>', s)
    s = s.replace('—', '&mdash;')
    return s

def para(text, style='Bodyx'):
    return Paragraph(clean_inline(text), styles[style])

def make_table(lines):
    rows = []
    for line in lines:
        if re.match(r'^\|?\s*:?-{3,}', line.replace('|','').strip()):
            continue
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        rows.append(cells)
    if not rows: return []
    maxcols = max(len(r) for r in rows)
    rows = [r + ['']*(maxcols-len(r)) for r in rows]
    data=[]
    for i,r in enumerate(rows):
        st='TableHead' if i==0 else 'TableCell'
        data.append([Paragraph(clean_inline(c), styles[st]) for c in r])
    # dynamic widths
    avail = 7.0*inch
    if maxcols==2: widths=[1.7*inch,5.3*inch]
    elif maxcols==3: widths=[1.35*inch,2.55*inch,3.10*inch]
    else: widths=[avail/maxcols]*maxcols
    t=Table(data, colWidths=widths, hAlign='LEFT', repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),colors.HexColor('#efe7da')),
        ('TEXTCOLOR',(0,0),(-1,0),colors.HexColor('#111111')),
        ('GRID',(0,0),(-1,-1),0.35,colors.HexColor('#d8d0c5')),
        ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(-1,-1),4),('RIGHTPADDING',(0,0),(-1,-1),4),
        ('TOPPADDING',(0,0),(-1,-1),4),('BOTTOMPADDING',(0,0),(-1,-1),4),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white, colors.HexColor('#fbf8f3')]),
    ]))
    return [t, Spacer(1,7)]

def flush_paragraph(buf, story):
    if buf:
        story.append(para(' '.join(buf)))
        buf.clear()

def flush_list(items, story):
    if items:
        story.append(ListFlowable([ListItem(para(x), leftIndent=10) for x in items], bulletType='bullet', leftIndent=14, bulletFontSize=6))
        story.append(Spacer(1,2))
        items.clear()

story=[]
# Cover page
story += [Spacer(1, 1.0*inch), Paragraph('PREDICTCARE.AI STRATEGIC DATABASE AUDIT', styles['CoverKicker']), Paragraph('UNOS / OPTN Transplant Database Audit', styles['CoverTitle']), Paragraph('Data assets, modernization signals, and customer-facing growth opportunities', styles['CoverSub']), Spacer(1,0.25*inch), Paragraph('Prepared for UNOS strategic growth discussion', styles['CoverSub']), Paragraph('Prepared by Croom Lawrence / PredictCare.ai', styles['CoverSub']), Paragraph('July 2026', styles['CoverSub']), Spacer(1,0.45*inch)]
story.append(Table([[Paragraph('<b>Executive thesis</b>', styles['H3x'])],[Paragraph('UNOS / OPTN sits on one of the richest longitudinal healthcare datasets in the United States. The opportunity is not to sell data; it is to package permissioned, de-identified, aggregated, human-governed transplant intelligence into workflow-native products that help transplant hospitals, OPOs, labs, device companies, logistics partners, payers, and policymakers increase safe organ acceptance, reduce nonuse, improve outcomes, and lower administrative burden.', styles['Bodyx'])]], colWidths=[6.4*inch], style=[('BACKGROUND',(0,0),(-1,-1),colors.HexColor('#f3eee7')),('BOX',(0,0),(-1,-1),0.6,colors.HexColor('#0f6e56')),('LEFTPADDING',(0,0),(-1,-1),12),('RIGHTPADDING',(0,0),(-1,-1),12),('TOPPADDING',(0,0),(-1,-1),10),('BOTTOMPADDING',(0,0),(-1,-1),10)]))
story.append(PageBreak())

lines = raw.splitlines()
# skip first title and metadata until first --- after purpose
start=0
# include from Executive thesis onwards to avoid repeated cover metadata
for i,l in enumerate(lines):
    if l.strip() == '## Executive thesis':
        start=i
        break

buf=[]; table=[]; list_items=[]; in_quote=False
for line in lines[start:]:
    s=line.rstrip()
    if not s.strip():
        flush_paragraph(buf, story); flush_list(list_items, story)
        if table:
            story += make_table(table); table=[]
        continue
    if s.startswith('|'):
        flush_paragraph(buf, story); flush_list(list_items, story); table.append(s); continue
    else:
        if table:
            story += make_table(table); table=[]
    if s.startswith('---'):
        flush_paragraph(buf, story); flush_list(list_items, story); story.append(Spacer(1,8)); continue
    if s.startswith('### '):
        flush_paragraph(buf, story); flush_list(list_items, story); story.append(Paragraph(clean_inline(s[4:]), styles['H3x'])); continue
    if s.startswith('## '):
        flush_paragraph(buf, story); flush_list(list_items, story); story.append(Paragraph(clean_inline(s[3:]), styles['H2x'])); continue
    if s.startswith('# '):
        flush_paragraph(buf, story); flush_list(list_items, story); story.append(Paragraph(clean_inline(s[2:]), styles['H1x'])); continue
    if s.startswith('> '):
        flush_paragraph(buf, story); flush_list(list_items, story); story.append(Paragraph(clean_inline(s[2:]), styles['Quote'])); continue
    if re.match(r'^\d+\.\s+', s):
        flush_paragraph(buf, story); flush_list(list_items, story); story.append(para(s, 'Bodyx')); continue
    if s.startswith('- '):
        flush_paragraph(buf, story); list_items.append(s[2:]); continue
    buf.append(s)
flush_paragraph(buf, story); flush_list(list_items, story)
if table: story += make_table(table)


def add_page(canvas, doc):
    canvas.saveState()
    w,h=letter
    canvas.setFont('Helvetica-Bold',7)
    canvas.setFillColor(colors.HexColor('#0f6e56'))
    canvas.drawString(doc.leftMargin, h-0.38*inch, 'PredictCare.ai — UNOS / OPTN Transplant Database Audit')
    canvas.setFillColor(colors.HexColor('#777777'))
    canvas.setFont('Helvetica',7)
    canvas.drawRightString(w-doc.rightMargin, 0.34*inch, f'Page {doc.page}')
    canvas.restoreState()

PDF.parent.mkdir(parents=True, exist_ok=True)
doc=SimpleDocTemplate(str(PDF), pagesize=letter, rightMargin=0.55*inch, leftMargin=0.55*inch, topMargin=0.58*inch, bottomMargin=0.55*inch, title='UNOS / OPTN Transplant Database Audit', author='Croom Lawrence / PredictCare.ai')
doc.build(story, onFirstPage=add_page, onLaterPages=add_page)
print(PDF)
