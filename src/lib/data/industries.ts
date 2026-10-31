import { Landmark, HeartPulse } from 'lucide-react'
import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    slug: 'financial-services',
    name: 'Financial Services',
    icon: 'Landmark',
    tagline: 'Data-driven decisions for banks, NBFCs, fintechs and insurers',
    summary:
      'Turn transaction, customer and market data into dependable reporting, early risk signals and forecasts your teams can act on, with security and auditability designed in from day one.',
    heroPoints: ['Risk & fraud analytics', 'Regulatory-ready reporting', 'Forecasting & prediction engines'],
    useCases: [
      {
        title: 'Credit & Risk Scoring',
        description: 'Explainable scoring models that combine bureau, behavioural and transactional data to support faster, more consistent lending decisions.',
      },
      {
        title: 'Fraud & Anomaly Detection',
        description: 'Real-time and batch detection of unusual transactions, with ranked alerts so investigators focus on what matters.',
      },
      {
        title: 'Cash-flow & Revenue Forecasting',
        description: 'Time-series forecasts for collections, disbursements, premiums and liquidity, with scenario views for planning.',
      },
      {
        title: 'Customer & Portfolio Analytics',
        description: 'Segmentation, churn and cross-sell propensity, plus portfolio performance dashboards by product, branch or cohort.',
      },
      {
        title: 'MIS & Regulatory Reporting',
        description: 'Automated, reconciled and scheduled reports that replace manual spreadsheet consolidation and shorten month-end cycles.',
      },
      {
        title: 'Collections & Recovery Insights',
        description: 'Delinquency prediction and prioritised work-queues to improve recovery while keeping customer contact respectful.',
      },
    ],
    approach: [
      { title: 'Understand the decision', description: 'We start from the business decision or KPI, not the dataset, and define what a good outcome looks like.' },
      { title: 'Build the data foundation', description: 'Reliable pipelines and a governed warehouse so every report and model uses one trusted source of truth.' },
      { title: 'Model and validate', description: 'Interpretable models, back-tested against your history, with documented assumptions and monitoring for drift.' },
      { title: 'Deliver and embed', description: 'Dashboards, reports and prediction APIs integrated into the systems your teams already use.' },
    ],
    trust: [
      { title: 'Security by design', description: 'Encryption in transit and at rest, role-based access and full audit trails.' },
      { title: 'Data residency awareness', description: 'Architectures that respect Indian data-localisation expectations for financial data.' },
      { title: 'Explainable outputs', description: 'Model decisions that can be reviewed by risk, compliance and audit teams.' },
    ],
    keywords: ['financial analytics software India', 'fintech predictive analytics', 'credit risk scoring solutions', 'fraud detection analytics', 'banking data analytics Pune'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'HeartPulse',
    tagline: 'Operational and clinical insight for hospitals, clinics and health-tech',
    summary:
      'Bring scattered clinical, operational and billing data together so administrators and clinicians can plan capacity, reduce avoidable delays and understand outcomes, with patient privacy treated as a design requirement.',
    heroPoints: ['Operational dashboards', 'Demand & outcome prediction', 'Privacy-first data handling'],
    useCases: [
      {
        title: 'Patient Flow & Capacity Forecasting',
        description: 'Forecast admissions, OPD load and bed occupancy to plan staffing and reduce waiting times.',
      },
      {
        title: 'No-show & Readmission Prediction',
        description: 'Risk models that flag appointments and discharges needing follow-up, so care teams can intervene early.',
      },
      {
        title: 'Clinical & Operational Dashboards',
        description: 'Role-based views for doctors, department heads and management covering throughput, turnaround times and quality indicators.',
      },
      {
        title: 'Claims & Billing Analytics',
        description: 'Spot rejection patterns, delayed settlements and revenue leakage across insurers, TPAs and departments.',
      },
      {
        title: 'Inventory & Pharmacy Demand Planning',
        description: 'Consumption-based forecasting that cuts stock-outs and expiry wastage for medicines and consumables.',
      },
      {
        title: 'Report & Record Digitisation',
        description: 'Extract structured data from lab reports, discharge summaries and forms so it can finally be analysed.',
      },
    ],
    approach: [
      { title: 'Understand the care context', description: 'We work with your clinical and administrative leads to define questions that are useful at the point of decision.' },
      { title: 'Integrate and de-identify', description: 'Connect HIS, LIS and billing sources; de-identify or pseudonymise data wherever analysis does not need identity.' },
      { title: 'Model and validate', description: 'Transparent models validated against historical data, with clear limits on what they should and should not be used for.' },
      { title: 'Deliver and embed', description: 'Dashboards, alerts and APIs that fit existing workflows rather than adding another screen to check.' },
    ],
    trust: [
      { title: 'Privacy-first handling', description: 'Data minimisation, de-identification and access controls aligned with the DPDP Act and HIPAA-aware practices.' },
      { title: 'Interoperability ready', description: 'Designs that accommodate standards such as HL7 FHIR and India\'s ABDM ecosystem.' },
      { title: 'Decision support, not decisions', description: 'Predictions assist clinicians and administrators; they never replace professional judgement.' },
    ],
    keywords: ['healthcare analytics software India', 'hospital data analytics', 'patient flow forecasting', 'healthcare predictive analytics Pune', 'health-tech data engineering'],
  },
]

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  industries.find((industry) => industry.slug === slug)

export const getIndustryIcon = (name: Industry['icon']) => ({ Landmark, HeartPulse })[name]
