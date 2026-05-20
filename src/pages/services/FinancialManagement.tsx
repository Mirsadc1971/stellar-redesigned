import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import {
  DollarSign,
  PieChart,
  TrendingDown,
  FileSpreadsheet,
  Landmark,
  Receipt,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Calculator
} from 'lucide-react';

export default function FinancialManagement() {
  const features = [
    { icon: PieChart, title: 'Budget Development', description: 'Data-driven annual budgets built from historical spending, vendor contracts, and projected needs to keep assessments fair and funding adequate.' },
    { icon: Landmark, title: 'Reserve Studies & Planning', description: 'Professional reserve studies that identify future capital needs, establish funding schedules, and keep your association financially prepared.' },
    { icon: Receipt, title: 'Assessment Collection', description: 'Timely invoicing, online payment options, delinquency tracking, and lien filing when necessary to maintain healthy cash flow.' },
    { icon: FileSpreadsheet, title: 'Accounts Payable & Receivable', description: 'Accurate processing of vendor invoices, expense tracking, and receivable management with full audit trails and board-approved controls.' },
    { icon: BarChart3, title: 'Financial Reporting', description: 'Monthly financial statements, balance sheets, income statements, and budget variance reports delivered on time to your board.' },
    { icon: TrendingDown, title: 'Cost Reduction Strategies', description: 'Vendor renegotiations, energy audits, insurance reviews, and bulk purchasing programs that reduce expenses without cutting quality.' }
  ];

  return (
    <>
      <SEOHead
        title="Association Financial Management | Stellar Property Group"
        description="Expert financial management for Chicago-area community associations. Budgeting, reserve studies, assessment collection, financial reporting, and audit preparation. Trusted by 42 associations since 2007."
      />

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold-500 mb-4">
              <DollarSign className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Financial Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Association Financial Management
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Sound financial stewardship is the foundation of every well-run community association. Our team delivers transparent budgeting, disciplined reserve planning, and reliable reporting that gives your board the confidence to make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Request a Financial Review
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-6">
                Financial Clarity Your Board Can Count On
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Community association finances are not like any other business. You are managing shared resources on behalf of homeowners who expect every dollar to be spent wisely, reported transparently, and planned strategically. At Stellar Property Group, our financial management services are designed specifically for the unique demands of condo, HOA, and townhome associations in the Chicago area.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our accounting team processes thousands of transactions monthly across 42 managed associations. We use industry-leading property management software to maintain real-time financial records, generate accurate reports, and provide your board with the financial visibility needed to govern effectively. Every invoice is verified, every payment is documented, and every financial report is delivered on schedule.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From developing realistic annual budgets to conducting comprehensive reserve studies, from collecting assessments to preparing for annual audits, our financial management services cover the full spectrum of association accounting. We do not just track numbers; we provide the analysis and recommendations that help your board make smarter financial decisions for the community future.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Our Financial Management Standards</h3>
              <ul className="space-y-4">
                {[
                  'Monthly financial statements delivered by the 15th',
                  'Real-time financial data via online board portal',
                  'Segregated operating and reserve accounts',
                  'Dual-signature controls on major expenditures',
                  'Annual budget development with board collaboration',
                  'Professional reserve study coordination',
                  'Delinquency management and collection support',
                  'Audit-ready records maintained year-round'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-4">
              Complete Financial Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every financial function your association needs, managed by professionals who specialize in community association accounting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-navy-700" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800">
                Reserve Planning That Prevents Special Assessments
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nothing damages community trust like an unexpected special assessment. Proper reserve planning is the single most important financial practice an association can adopt, and it is an area where many communities fall short. Stellar Property Group takes reserve planning seriously because we have seen firsthand the consequences when associations are caught unprepared for major capital expenses.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We coordinate professional reserve studies that inventory every major component of your property, estimate useful life and replacement costs, and establish a funding plan that builds your reserves steadily over time. Our goal is to help your association achieve at least 70% reserve funding, which the Community Associations Institute considers the threshold for a well-funded reserve.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond the reserve study itself, we integrate reserve planning into your annual budget process, recommend investment strategies for reserve funds, and provide regular updates on reserve adequacy as market conditions and project timelines evolve. When capital projects arise, we manage the bidding and construction process to ensure reserve dollars are spent wisely and the work meets the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-navy-800 mb-10 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with integrated financial oversight.' },
              { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting support, strategic planning, and governance guidance for your board.' },
              { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Capital project oversight and preventive maintenance that protects your investment.' }
            ].map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-navy-700 font-semibold group-hover:text-gold-600 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
