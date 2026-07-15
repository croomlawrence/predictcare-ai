# UNOS / OPTN Transplant Database Audit

**Prepared for:** UNOS strategic growth discussion  
**Prepared by:** Croom Lawrence / PredictCare.ai  
**Date:** July 2026  
**Purpose:** Translate the structure, history, data assets, modernization trajectory, and commercial growth potential of the national transplant data ecosystem into executive-ready opportunities for customer-facing products, messaging, and growth strategy.

---

## Executive thesis

UNOS / OPTN sits on one of the most consequential longitudinal healthcare datasets in the United States: a national, mandatory, census-level record of solid-organ transplant candidates, donors, offers, transplants, follow-up, immunology, organ disposition, center activity, OPO activity, and outcomes.

The research-access layer is valuable, but the highest-growth opportunity is in the operational layer: real-time waitlist activity, DonorNet offer workflows, match-run behavior, acceptance and decline patterns, logistics, center benchmarking, OPO yield, data-quality issues, and predictive decision support.

The strategic opportunity is not to “sell data.” It is to package permissioned, de-identified, aggregated, human-governed transplant intelligence into workflow-native products that help transplant hospitals, OPOs, labs, device companies, payers, logistics partners, and policymakers increase safe organ acceptance, reduce nonuse, improve outcomes, and lower administrative burden.

---

## 1. Database age and strategic context

The OPTN database traces its modern operating roots to the National Organ Transplant Act and HRSA’s OPTN contract history. UNOS was awarded the OPTN contract in 1986, and SRTR Standard Analysis Files broadly include OPTN-collected elements on U.S. solid-organ transplant candidates, donors, and recipients from **1987 to present**.

| Year | Milestone | Strategic implication |
|---:|---|---|
| 1984 | National Organ Transplant Act | Federal framework for national organ allocation and oversight |
| 1986 | HRSA awarded OPTN contract to UNOS | National operating system for transplant matching and data collection |
| 1987-present | SRTR/OPTN research files | Nearly four decades of transplant candidate, donor, recipient, and outcome history |
| 2016 | UNOS API/developer program expanded through Apigee | Shift from manual data entry toward real-time data exchange |
| 2024-2025 | HRSA OPTN modernization / multi-vendor transition | Opening for next-generation IT, interoperability, transparency, analytics, and customer-facing growth products |
| 2025+ | Next-generation OPTN IT modernization | Opportunity to build a flexible, longitudinal, AI-ready transplant data ecosystem |

---

## 2. Core UNOS / OPTN data systems

UNOS historically operated the OPTN technology platform, **UNet**, with several major modules.

| System / module | What it captures | Commercial opportunity |
|---|---|---|
| Waitlist | Candidate registration, active/inactive status, organ-specific urgency, listing details, clinical status, demographics | Candidate journey analytics, referral conversion, waitlist risk, access/equity analytics |
| DonorNet | Deceased donor data, OPO donor management, match runs, organ offers, attachments/images, offer review, acceptance/decline workflow | Offer acceptance optimization, nonuse root-cause analytics, center decision support |
| TIEDI | Pre- and post-transplant forms: candidate, recipient, donor, living donor, follow-up, immunosuppression | Data-quality automation, audit readiness, outcome intelligence |
| TransNet | Organ packaging, labeling, transport validation, recipient-organ identity confirmation | Logistics optimization, ischemic-time reduction, transport performance analytics |
| UNet APIs | Data exchange with OPOs, transplant programs, labs, EHR/EMR systems, donor systems | Workflow integration, partner ecosystem, marketplace/API products |
| UNOS Tools / Data Services | Dashboards, benchmarking, reports, quality and process improvement tools | Premium analytics, customer success, strategic advisory, subscription products |

---

## 3. What is in the research-access / public data layer

The SRTR public Standard Analysis Files are organized by candidate, donor, transplant, follow-up, histocompatibility, immunosuppression, institution, and organ-specific tables. They are released quarterly and currently distributed in SAS format.

### Major file groups

| File group | Example tables | What they contain |
|---|---|---|
| Candidate / waitlist | CAND_KIPA, CAND_LIIN, CAND_THOR | Candidate demographics, listing date, organ type, blood type, diagnosis, clinical status, comorbidities, height/weight/BMI, dialysis, urgency fields, donor acceptability criteria |
| Status history | STATHIST_KIPA, STATHIST_LIIN, STATHIST_THOR | Active/inactive periods, priority status, status reasons, MELD/LAS/CAS-related variables, status justification history |
| Deceased donor | DONOR_DECEASED | Donor ID, ABO, age, cause of death, DCD/DBD-related data, labs, serologies, HLA, risk factors, infectious disease, organ-specific donor details |
| Living donor | DONOR_LIVE, DON_LIV_FOL | Living donor demographics, ABO/HLA, pre/post-op labs, complications, donor follow-up at 6 months, 1 year, and 2 years |
| Donor organ disposition | DONOR_DISPOSITION | Organ recovered/transplanted/discarded, discard reason, recovery date, share type, storage/preservation solution, match ID |
| Transplant event | TX_KI, TX_LI, TX_HR, TX_LU, TX_PA, TX_KP | Recipient/candidate + donor + transplant event summary, center/OPO, dates, organ type, ischemic time, diagnosis, prior transplant, risk factors |
| Transplant follow-up | TXF_KI, TXF_LI, TXF_HR, TXF_LU, etc. | Survival, graft failure, rejection, infection, malignancy, dialysis after transplant, functional status, cause of death |
| Histocompatibility | REC_HISTO, REC_HISTO_XMAT, PRA_HIST | Donor/recipient HLA, PRA/CPRA, antibody screening, crossmatch method/result, typing method |
| Immunosuppression | IMMUNO, FOL_IMMUNO | Induction, maintenance, anti-rejection drugs, drug codes |
| Malignancy / treatment | MALIG, TREATMENT | Post-transplant malignancy diagnosis and treatment |
| Institutions | INSTITUTION, HIST_OPO_TXC | Transplant center / OPO identifiers, service relationships, historical mappings |

### Example variable scale from the SRTR public dictionary

| Data file | Approx. variable count |
|---|---:|
| DONOR_DECEASED | 260 |
| DONOR_LIVE | 233 |
| DONOR_DISPOSITION | 17 |
| CAND_KIPA — kidney/pancreas candidates | 194 |
| CAND_LIIN — liver/intestine candidates | 174 |
| CAND_THOR — heart/lung candidates | 213 |
| TX_KI — kidney transplant | 283 |
| TX_LI — liver transplant | 307 |
| TX_HR — heart transplant | 327 |
| TX_LU — lung transplant | 313 |
| TXF_KI — kidney follow-up | 106 |
| REC_HISTO | 111 |
| REC_HISTO_XMAT | 8 |
| PRA_HIST | 10 |

---

## 4. Practical data-field inventory

### Candidate / recipient data

The database includes, or has historically included, fields such as:

- Identity and operational fields in restricted systems: name, DOB, SSN, center patient ID, transplant center, organ listed
- Demographics: sex/birth sex/gender depending on form era, age, race, ethnicity, citizenship, state and ZIP of permanent residence
- Listing and waitlist: listing date, activation date, active/inactive status, wait time, reason for removal, death date when applicable
- Clinical baseline: ABO, height, weight, BMI, primary diagnosis, secondary diagnosis, functional status, education/employment fields in some forms
- Comorbidities: diabetes, dialysis, peripheral vascular disease, cerebrovascular disease, COPD, hypertension, malignancy, previous transplant history
- Organ-specific clinical variables: MELD/PELD, Lung CAS/LAS-era fields, heart status, kidney allocation variables, CPRA/PRA, liver exceptions, thoracic status justifications
- Donor acceptability: HIV-positive organ willingness, HBV core antibody positive, HCV positive, DCD, A2/A2B, ABO-incompatible or other organ-specific criteria

### Donor data

The donor layer includes:

- Donor ID, donor type, OPO, donor hospital context
- ABO, age, sex, race/ethnicity, citizenship
- Cause of death, DCD status, stroke/CVA, cardiac arrest, donor-risk history
- Serologies and infectious disease fields: CMV, EBV, HIV, HBV, HCV, HTLV, Chagas NAT in some eras/contexts
- HLA: A, B, C, DR, DQ, DP, Bw4/Bw6
- Labs and clinical markers: creatinine, BUN, bilirubin, liver enzymes, albumin, organ-specific markers
- Risk factors: hypertension, diabetes, cancer history, tobacco, alcohol, cocaine, IV drug use
- Donor management and recovery: clamp date/time, recovery date/time, consent/authorization fields, organ-specific evaluation, biopsy, anatomy, storage solution

### Matching / compatibility data

The matching layer includes:

- ABO compatibility
- Donor and recipient HLA typing
- CPRA/PRA and unacceptable antigen data
- Crossmatch source, type, technique, result, auto-crossmatch result
- Candidate acceptability filters and organ-specific thresholds
- Medical urgency and priority status
- Wait time
- Pediatric priority
- prior living donor / donation status priority
- geographic/distance allocation inputs
- organ-specific allocation scores

### Transplant event data

The transplant-event layer includes:

- Transplant date and organ type
- Multi-organ transplant flags
- recipient center and OPO
- donor ID and donor type
- ischemic time
- recipient condition at transplant
- diagnosis and previous transplant history
- surgeon/NPI in restricted form data
- induction immunosuppression
- discharge and early post-transplant status

### Follow-up / outcomes data

The outcomes layer includes:

- patient alive/dead status
- date last seen and date of death
- cause of death
- graft status, graft failure date, graft failure cause
- rejection episodes, biopsy-confirmed rejection
- dialysis after transplant
- disease recurrence
- malignancy and treatment
- infections and antivirals
- immunosuppression regimen
- functional status and selected social/education/employment fields
- living donor follow-up at 6 months, 1 year, and 2 years

---

## 5. What is limited, restricted, or not consistently public

The public/research-access SAF layer is powerful, but not the full commercial asset. SRTR notes that SAFs generally do not include geographic data or text fields, and patient-level ZIP codes or supplementary files may require special request, approval, and cost.

| Data type | Likely availability | Why it matters |
|---|---|---|
| Patient name, SSN, center patient ID | Restricted operational PHI/PII | Not appropriate for commercial use except under strict permissions |
| Patient-level ZIP/full geography | Usually excluded or restricted | Market access, equity, logistics, referral geography |
| Free-text exception narratives | Restricted | NLP opportunity, but high governance burden |
| Real-time match-run logs | Operational / not broadly public | Highest-value offer behavior analytics |
| Offer acceptance/decline behavior | Partially captured; richer in DonorNet | Center decision support and nonuse reduction |
| Donor imaging / attachments | Operational only | AI-assisted organ quality assessment |
| Organ transport telemetry | Fragmented | Logistics and ischemia-risk modeling |
| Perfusion-device data | Often held by device companies | DCD and machine-perfusion outcomes |
| EHR longitudinal labs/vitals | Not consistently in OPTN today | Dynamic risk prediction |
| ICU / intra-op detail | Not consistently captured | Post-transplant outcome prediction |
| API/workflow logs | UNOS/internal | Operational bottlenecks and customer experience |

---

## 6. New data likely coming into the ecosystem

### Confirmed direction

UNOS and the broader OPTN modernization process are moving toward more API-based, interoperable, dynamic data collection.

UNOS API capabilities already support:

- Death notification registration
- Deceased donor registration and DCD forms
- Donor record upload and donor attachments
- Donor hospital lists
- Waitlist clinical data exchange from EHR/EMR
- Allocation calculators: CPRA, Lung CAS, MELD, PELD
- TIEDI forms: TRF, IMF, TRR, IMR, TCR, LDR, LDF

Public Google Cloud materials describe UNOS’s API footprint as having hundreds of external endpoints, 300+ connected healthcare organizations, and high-volume real-time transactions across UNet.

### Direction of travel

| Emerging data category | Strategic value |
|---|---|
| EHR-extracted labs, vitals, hemodynamics via FHIR | Dynamic risk prediction, lower manual burden |
| Longitudinal candidate deterioration data | Better urgency and offer-acceptance decisions |
| Granular mechanical circulatory support categories | More accurate heart allocation and risk adjustment |
| DCD procurement workflow timing | DCD outcomes, organ viability, process improvement |
| Normothermic regional perfusion / direct procurement and perfusion variables | Compare DCD strategies and outcomes |
| Organ perfusion-device data | Device benchmarking and viability prediction |
| Organ transport system and temperature data | Logistics optimization and ischemia-risk modeling |
| Donor organ imaging | AI-assisted organ quality assessment |
| Histopathology of explanted organs | Diagnosis validation and outcomes research |
| Genetic testing for disease etiology | Risk stratification and disease-specific insights |
| More specific nonuse / decline reasons | Donor-pool expansion and center behavior analytics |
| Offer behavior / next-offer prediction | Point-of-offer decision support |
| API workflow metadata | Operational analytics and customer experience improvement |

---

## 7. Informed view of the non-public operational data asset

The highest-value data likely exists in the operational UNet layer. Based on UNet workflows, DonorNet, TIEDI, TransNet, and API architecture, UNOS likely has or can derive:

### Match-run and offer-level intelligence

- Every match run generated
- Candidate rank/order for each organ
- Which centers were offered the organ
- Offer timestamps and response timestamps
- Accepted / declined / bypassed / no-response outcomes
- Decline reason codes and possibly richer operational context
- Whether offer details, imaging, or attachments were reviewed
- Subsequent candidate outcome after accepting or declining
- Whether the candidate received another offer later
- Time to next offer
- Whether the organ was transplanted elsewhere or discarded
- Center-specific acceptance tendencies

### Center behavior intelligence

- Organ acceptance rates by center, organ type, donor risk tier, geography, and candidate profile
- Response latency
- Decline-code distribution
- Outlier behaviors versus peer programs
- Waitlist size, transplant conversion, volume trends
- Data quality errors and TIEDI completion performance
- Staffing and workflow bottlenecks
- MPSC/SRTR-related risk signals

### OPO performance intelligence

- Referral-to-authorization conversion
- Donor management timelines
- Organ yield
- Recovery process timing
- DCD progression and agonal-phase timing
- Organ nonuse and discard reasons
- Donor hospital patterns
- OPO-to-center placement dynamics

### Logistics intelligence

- Packaging, labeling, handoff, transport, and arrival timestamps
- Cold ischemic time and delay drivers
- transport mode and route performance
- courier/vendor performance
- validation events and exceptions

---

## 8. Current product evidence and white space

UNOS is already moving from database stewardship toward productized intelligence.

Known product/product-like examples include:

- CARE Tool — broader organ acceptance opportunities
- UNOS Predict — forward-looking metrics relative to future SRTR cohorts
- Benchmark Report — customizable patient population, listing, and transplant activity insights
- UNOS Staffing Survey — staffing benchmark for transplant administration
- Organ Utilization Tool / OPO tools
- DonorNet predictive analytics — time-to-next-offer and three-year mortality likelihood for adult kidney offers
- UNet APIs — workflow integration with OPOs, transplant programs, labs, and EHR systems
- UNOS One / Marketplace — emerging platform/partner ecosystem direction

The white space is to package these capabilities into a more explicit customer-value architecture: business outcomes, workflow outcomes, risk reduction, center growth, OPO performance, logistics performance, and responsible AI/data modernization.

---

## 9. Commercial packaging opportunities

| Product concept | Buyer | Value proposition |
|---|---|---|
| Offer Acceptance Optimizer | Transplant centers | Identify safe acceptance opportunities where the center is more conservative than peers |
| Next-Best-Offer Advisor | Transplant physicians | Support accept-now vs wait decisions using candidate mortality and likely future offer patterns |
| OPO Yield Intelligence | OPOs | Identify where donors/organs are lost across referral, authorization, recovery, placement |
| Organ Nonuse Root-Cause Dashboard | OPOs, centers, HRSA | Break discard/nonuse into donor quality, center behavior, logistics, data quality, or process issues |
| SRTR/MPSC Early Warning | Transplant centers | Predict performance risk before public reports or regulatory scrutiny |
| Data Quality Copilot | Centers and OPOs | Detect missing, late, or contradictory OPTN/TIEDI data before audit |
| Transplant Market Access Atlas | Device, diagnostic, pharma, payer partners | De-identified market map of volume, patient mix, disease burden, organ demand, center archetypes |
| Perfusion Device Outcomes Registry | Device companies, centers | Link machine perfusion/device data to outcomes and adoption patterns |
| DCD Expansion Intelligence | OPOs, centers, device companies | Optimize DCD procurement, NRP/DPP strategy, and machine perfusion usage |
| Histocompatibility Intelligence | HLA labs, kidney programs | Improve sensitized-candidate strategy, CPRA trends, crossmatch outcomes |
| Logistics Optimization Platform | OPOs, logistics partners | Reduce cold ischemia and predict transport delay risk |
| Equity / Access Analytics | HRSA, centers, foundations | Identify disparities in listing, offers, wait time, acceptance, transplant rate, outcomes |

---

## 10. Recommended growth wedge

### Transplant Performance Command Center

**Positioning:** Help transplant programs increase safe organ acceptance, improve SRTR/MPSC readiness, reduce administrative burden, and find hidden growth opportunities using OPTN/SRTR-derived intelligence and workflow automation.

### Core modules

1. **Acceptance Opportunity Map**  
   Identifies donor profiles a center may be declining too conservatively relative to comparable peers.

2. **Waitlist Conversion Analytics**  
   Tracks listed patients → offers → accepts → transplants → outcomes; highlights drop-off by organ, diagnosis, demographics, geography, and referral channel.

3. **SRTR/MPSC Early Warning**  
   Shows expected risk trajectory before public reports, allowing leaders to act earlier.

4. **Data Quality + TIEDI Automation**  
   Detects missing data, contradictions, late forms, and audit risks.

5. **Referral / Growth Map**  
   Finds under-penetrated referral geographies, hospitals, nephrology/cardiology/pulmonology networks, and access gaps.

6. **Executive Benchmark Report**  
   Quarterly board-ready narrative and dashboard for transplant leadership.

### Potential commercial model

- Entry analytics subscription: $5k-$10k/month
- Enterprise command center: $10k-$30k/month
- Strategic advisory + custom analytics: $25k-$75k/project or retainer
- Partner marketplace / API monetization: usage-based or revenue-share
- Device / diagnostics registry analytics: custom enterprise agreements

---

## 11. Messaging implications for UNOS

### Current implicit message

UNOS is seen primarily as the national transplant infrastructure and data steward.

### Growth message opportunity

UNOS can become the trusted intelligence layer that helps every transplant stakeholder make better, faster, more equitable, more evidence-based decisions.

### Suggested narrative

> UNOS is uniquely positioned to transform transplant data into trusted, workflow-native intelligence that helps centers accept more organs safely, helps OPOs increase yield, helps patients receive transplants sooner, and helps the entire ecosystem learn faster from every donor, offer, transplant, and outcome.

### Messaging pillars

| Pillar | Plain-English meaning |
|---|---|
| Trusted national data infrastructure | UNOS has the census-level operating data others cannot replicate |
| Human-governed decision support | Data supports clinical judgment; it does not replace it |
| More transplants, safer decisions | Growth is mission-aligned: reduce nonuse, improve acceptance, protect outcomes |
| Workflow-native products | Insights appear where the decision is being made, not in a disconnected report |
| Customer maturity | Move from data collection to proactive intelligence, benchmarking, and action |
| Modernization with governance | AI/interoperability must be privacy-preserving, validated, auditable, and trusted |

---

## 12. Compliance, trust, and governance guardrails

The market opportunity must be framed carefully.

### Safe framing

- “Permissioned, de-identified, aggregated transplant intelligence”
- “Human-governed decision support”
- “Operational benchmarking and process improvement”
- “Workflow integration that reduces burden and improves data quality”
- “Mission-aligned growth that increases safe organ utilization”

### Avoid

- “Selling patient data”
- “Monetizing PHI”
- “AI replacing physicians”
- “Guaranteed improved survival” without prospective validation
- Re-identification, scraping, or use of restricted data outside data-use agreements
- Overstating what is public versus restricted

### Required controls for future products

- HIPAA and federal data-use compliance
- Strong de-identification / aggregation thresholds
- Data-use agreements and role-based access
- IRB/legal review where research or patient-level analysis is involved
- Model validation and bias monitoring
- Clinical disclaimers and human-in-the-loop workflows
- Audit trails and explainability for decision support

---

## 13. Recommended next steps

1. **Create a product architecture map**  
   Map current UNOS Tools, UNet APIs, DonorNet predictive analytics, OPO tools, and UNOS Marketplace into a single customer-facing product portfolio.

2. **Define three flagship buyer journeys**  
   - Transplant center administrator / quality leader
   - OPO executive / operations leader
   - Technology / device / logistics partner

3. **Build a “value from data” message house**  
   Reframe data from compliance burden to mission-aligned intelligence: more transplants, lower burden, safer decisions, better customer value.

4. **Package a Transplant Performance Command Center pilot**  
   Pick one organ area, one customer segment, and one measurable outcome: safe acceptance, nonuse reduction, or SRTR/MPSC readiness.

5. **Create a governance-first AI roadmap**  
   Position AI around validated workflow support, not hype: offer triage, missing data detection, nonuse root cause, logistics prediction, and center benchmark explanation.

6. **Develop customer-facing collateral**  
   Build a concise deck, one-page product map, case-study template, and executive demo narrative for UNOS leadership and prospective customers.

---

## 14. Cover-letter language

Recommended bullet for Croom’s cover letter:

> I have also begun a structured audit of the UNOS / OPTN data ecosystem — including candidate, donor, match, transplant, follow-up, OPO, center, API, and predictive analytics assets — to identify responsible, mission-aligned growth opportunities in benchmarking, decision support, data quality, organ utilization, and customer-facing intelligence products.

Shorter version:

> I have already started developing a data-informed growth thesis for UNOS: how the OPTN/UNet ecosystem can be responsibly packaged into trusted benchmarking, decision-support, organ-utilization, and customer intelligence products that advance the mission while creating durable new value for transplant stakeholders.

---

## Appendix: Source map

Primary source categories reviewed:

- SRTR Standard Analysis Files public data dictionary
- SRTR Standard Analysis Files overview
- UNOS UNet / Waitlist / DonorNet / TIEDI / TransNet public pages
- UNOS API public pages and developer-portal signals
- UNOS predictive analytics / DonorNet kidney offer analytics materials
- Google Cloud UNOS / Apigee case study
- OPTN/TIEDI data collection form instructions from RegInfo.gov
- 2025 American Journal of Transplantation perspective: “Modernizing the national transplant database”

Important diligence caveat: some OPTN/HRSA pages were blocked by automated access controls during research. The audit therefore distinguishes between confirmed public/research-access data and informed operational inferences based on UNet/TIEDI/DonorNet workflows, public documentation, SRTR dictionaries, and modernization literature.
