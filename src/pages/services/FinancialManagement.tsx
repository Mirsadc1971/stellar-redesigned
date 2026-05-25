import {
  PieChart, Landmark, Receipt, FileSpreadsheet, BarChart3, TrendingDown, Calculator,
} from 'lucide-react';
import ServiceLayout from '../../components/ui/ServiceLayout';

export default function FinancialManagement() {
  return (
    <ServiceLayout
      seoTitle="Association Financial Management | Stellar Property Group"
      seoDescription="Expert financial management for Chicago-area community associations. Budgeting, reserve studies, assessment collection, financial reporting, and audit preparation. Trusted by 42 associations since 2007."
      canonical="https://stellarpropertygroup.com/services/financial-management"
      eyebrow="Financial Services"
      heroTitle="Association Financial Management"
      heroDescription="Sound financial stewardship is the foundation of every well-run community association. Our team delivers transparent budgeting, disciplined reserve planning, and reliable reporting that gives your board the confidence to make informed decisions."
      introHeading="Financial clarity your board can count on"
      introParagraphs={[
        'Community association finances are not like any other business. You are managing shared resources on behalf of homeowners who expect every dollar to be spent wisely, reported transparently, and planned strategically. At Stellar Property Group, our financial management services are designed specifically for the unique demands of condo, HOA, and townhome associations in the Chicago area.',
        'Our accounting team processes thousands of transactions monthly across 42 managed associations. We use industry-leading property management software to maintain real-time financial records, generate accurate reports, and provide your board with the financial visibility needed to govern effectively. Every invoice is verified, every payment is documented, and every financial report is delivered on schedule.',
        'From developing realistic annual budgets to conducting comprehensive reserve studies, from collecting assessments to preparing for annual audits, our financial management services cover the full spectrum of association accounting. We do not just track numbers; we provide the analysis and recommendations that help your board make smarter financial decisions.',
      ]}
      whyHeading="Our financial management standards"
      whyItems={[
        'Monthly financial statements delivered by the 15th',
        'Real-time financial data via online board portal',
        'Segregated operating and reserve accounts',
        'Dual-signature controls on major expenditures',
        'Annual budget development with board collaboration',
        'Professional reserve study coordination',
        'Delinquency management and collection support',
        'Audit-ready records maintained year-round',
      ]}
      featuresHeading="Complete financial management services"
      featuresSubtext="Every financial function your association needs, managed by professionals who specialize in community association accounting."
      features={[
        { icon: PieChart, title: 'Budget Development', description: 'Data-driven annual budgets built from historical spending, vendor contracts, and projected needs to keep assessments fair and funding adequate.' },
        { icon: Landmark, title: 'Reserve Studies & Planning', description: 'Professional reserve studies that identify future capital needs, establish funding schedules, and keep your association financially prepared.' },
        { icon: Receipt, title: 'Assessment Collection', description: 'Timely invoicing, online payment options, delinquency tracking, and lien filing when necessary to maintain healthy cash flow.' },
        { icon: FileSpreadsheet, title: 'Accounts Payable & Receivable', description: 'Accurate processing of vendor invoices, expense tracking, and receivable management with full audit trails and board-approved controls.' },
        { icon: BarChart3, title: 'Financial Reporting', description: 'Monthly financial statements, balance sheets, income statements, and budget variance reports delivered on time to your board.' },
        { icon: TrendingDown, title: 'Cost Reduction Strategies', description: 'Vendor renegotiations, energy audits, insurance reviews, and bulk purchasing programs that reduce expenses without cutting quality.' },
      ]}
      deepDiveIcon={Calculator}
      deepDiveHeading="Reserve planning that prevents special assessments"
      deepDiveParagraphs={[
        'Nothing damages community trust like an unexpected special assessment. Proper reserve planning is the single most important financial practice an association can adopt, and it is an area where many communities fall short. Stellar Property Group takes reserve planning seriously because we have seen firsthand the consequences when associations are caught unprepared for major capital expenses.',
        'We coordinate professional reserve studies that inventory every major component of your property, estimate useful life and replacement costs, and establish a funding plan that builds your reserves steadily over time. Our goal is to help your association achieve at least 70% reserve funding, which the Community Associations Institute considers the threshold for a well-funded reserve.',
        'Beyond the reserve study itself, we integrate reserve planning into your annual budget process, recommend investment strategies for reserve funds, and provide regular updates on reserve adequacy as market conditions and project timelines evolve. When capital projects arise, we manage the bidding and construction process to ensure reserve dollars are spent wisely.',
      ]}
      related={[
        { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with integrated financial oversight.' },
        { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting support, strategic planning, and governance guidance for your board.' },
        { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Capital project oversight and preventive maintenance that protects your investment.' },
      ]}
    />
  );
}
