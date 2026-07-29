# Pro Evolve Pharma Strategy Prompt Pack

**Prototype demo:** HealthFounderOS by PredictCare.AI  
**Use case:** Convert a pharma/commercial strategy deck into a governed, best-practice operating plan.  
**Important guardrail:** Do not paste PHI, patient-level data, non-public trial data, confidential legal advice, or unreleased regulated claims into public or unmanaged AI tools.

---

## How to use this pack

1. Start with the deck audit prompt.
2. Complete each module in order.
3. Keep one source of truth for outputs.
4. Require human review for claims, legal, medical, compliance, and commercial strategy decisions.
5. Export the final plan as a PDF for executive review.

---

## Prompt 1 — Deck Audit

```text
You are a healthcare commercial strategy operator auditing a pharma strategy deck.

Review the deck content below and produce a concise executive audit with:
1. Core strategic thesis
2. Target audience / stakeholder map
3. Key commercial assumptions
4. Evidence base and missing proof
5. Message hierarchy
6. Launch-stage readiness
7. Compliance / MLR / legal review flags
8. Recommended next-best actions

Rules:
- Do not invent data.
- Separate facts from assumptions.
- Flag claims that require medical, legal, regulatory, or MLR review.
- Keep the tone respectful and executive-ready.

Deck content:
[PASTE EXTRACTED DECK TEXT HERE]
```

---

## Prompt 2 — Strategy Thesis

```text
Turn the deck audit into a one-page strategy thesis.

Include:
- Market problem
- Customer/stakeholder pain
- Strategic opportunity
- Differentiated point of view
- Why now
- What must be true
- Key risks
- CEO decision required

Write for a pharma or healthcare executive team. Be concise, commercially sharp, and compliance-aware.
```

---

## Prompt 3 — Stakeholder Map

```text
Create a stakeholder map for this strategy.

For each stakeholder group, provide:
- What they care about
- What evidence they need
- What objections they may raise
- What message should lead
- What content/workflow asset should support them
- What human approval is required before use

Stakeholder groups to consider:
- Clinicians / KOLs
- Patients / caregivers, if appropriate
- Payers / access stakeholders
- Sales / field teams
- Medical affairs
- Legal / regulatory / compliance
- Executive leadership
```

---

## Prompt 4 — Claims & Evidence Matrix

```text
Build a claims and evidence matrix from the deck.

Columns:
1. Proposed claim or message
2. Supporting evidence cited in the deck
3. Evidence gaps
4. Risk level: Low / Medium / High
5. Required reviewer: Medical / Legal / Regulatory / Compliance / Commercial
6. Safer alternative wording
7. Decision needed

Do not approve claims. Flag review needs only.
```

---

## Prompt 5 — Launch Readiness

```text
Assess whether the strategy is in pre-launch planning, launch preparation, or commercial launch.

For each phase, identify:
- Appropriate activities
- Activities that should wait
- Required approvals
- Common failure modes
- Next governance step

Be especially careful about the boundary between strategic planning and legally approved commercial launch execution.
```

---

## Prompt 6 — Operating Workflow

```text
Translate the strategy into a governed operating workflow.

Define:
- Source materials
- AI-assisted steps
- Human decision points
- Approval gates
- Outputs produced
- Owners
- Meeting cadence
- Single Brain location / source of truth
- Weekly learning loop

Design this so a small healthcare team can execute without creating tool sprawl or plan drift.
```

---

## Prompt 7 — 90-Day Implementation Plan

```text
Create a 90-day implementation plan using Diagnose → Design → Pilot → Prove → Scale.

For each stage, include:
- Objective
- Key activities
- Owner
- Output
- Review gate
- Risks
- Success metric

Keep the plan practical for a small healthcare/pharma commercial team.
```

---

## Prompt 8 — Executive PDF Plan

```text
Convert the completed strategy work into a CEO-ready best-practice plan that can be printed as a PDF.

Structure:
1. Executive summary
2. Strategic thesis
3. Current-state audit
4. Stakeholder map
5. Claims/evidence review needs
6. Governed workflow design
7. 90-day plan
8. Decision log
9. Risks and open questions
10. Next step recommendation

Tone: clear, respectful, commercially sharp, compliance-aware. Do not overclaim.
```
