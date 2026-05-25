import {
  ClipboardCheck, Users, AlertTriangle, HardHat, Search, ShieldCheck, Wrench,
} from 'lucide-react';
import ServiceLayout from '../../components/ui/ServiceLayout';

export default function MaintenanceCoordination() {
  return (
    <ServiceLayout
      seoTitle="Property Maintenance Coordination | Stellar Property Group"
      seoDescription="Professional property maintenance coordination for Chicago community associations. Preventive maintenance programs, 24/7 emergency response, vendor management, and capital project oversight since 2007."
      canonical="https://stellarpropertygroup.com/services/maintenance-coordination"
      eyebrow="Maintenance Services"
      heroTitle="Property Maintenance Coordination"
      heroDescription="Protecting your community investment through proactive maintenance planning, trusted vendor partnerships, and rapid emergency response. We keep your property in peak condition so residents enjoy a safe, well-maintained environment year-round."
      introHeading="Proactive maintenance that protects property values"
      introParagraphs={[
        'Deferred maintenance is the silent killer of community association property values. A small roof leak becomes water damage becomes structural repair becomes a six-figure special assessment. At Stellar Property Group, we break that cycle with preventive maintenance programs that catch problems early, systematic property inspections that identify issues before they escalate, and trusted vendor relationships that deliver quality work at competitive prices.',
        'Our maintenance coordination team manages every aspect of your property upkeep, from routine landscaping and janitorial services to complex capital improvement projects. We maintain a vetted network of licensed, insured contractors who understand the unique requirements of community association work and deliver consistent quality across every project.',
        'When emergencies happen, our 24/7 emergency response line ensures your community is never left waiting. Whether it is a burst pipe at 2 AM, storm damage on a holiday weekend, or a power outage affecting common areas, our team coordinates the immediate response and follows through until the situation is fully resolved.',
      ]}
      whyHeading="Our maintenance standards"
      whyItems={[
        '24/7 emergency response line for all communities',
        'Preventive maintenance schedules for every property',
        'Vetted, licensed, and insured contractor network',
        'Competitive bidding on all major projects',
        'Regular property inspections and condition reports',
        'Capital project management from planning to completion',
        'Seasonal maintenance programs for Chicago weather',
        'Online maintenance request portal for residents',
      ]}
      featuresHeading="Comprehensive maintenance services"
      featuresSubtext="From daily upkeep to major capital projects, our maintenance coordination keeps your property in excellent condition and your residents satisfied."
      features={[
        { icon: ClipboardCheck, title: 'Preventive Maintenance Programs', description: 'Scheduled inspections, seasonal maintenance calendars, and component lifecycle tracking that extends the life of your property assets.' },
        { icon: Users, title: 'Vendor Management', description: 'A curated network of trusted contractors with competitive pricing, quality guarantees, and the reliability your community deserves.' },
        { icon: AlertTriangle, title: '24/7 Emergency Response', description: 'Round-the-clock emergency line staffed by experienced professionals who coordinate immediate response to protect your property and residents.' },
        { icon: HardHat, title: 'Capital Project Oversight', description: 'End-to-end management of major projects including scope development, competitive bidding, construction oversight, and warranty tracking.' },
        { icon: Search, title: 'Property Inspections', description: 'Regular walk-through inspections that identify maintenance needs, safety concerns, and code compliance issues before they become costly problems.' },
        { icon: ShieldCheck, title: 'Contractor Vetting', description: 'Thorough verification of licenses, insurance, references, and work history for every contractor who works on your property.' },
      ]}
      deepDiveIcon={Wrench}
      deepDiveHeading="Capital project management done right"
      deepDiveParagraphs={[
        'Major capital projects represent the largest expenditures your association will face, and how they are managed directly impacts both your finances and your property values. Whether it is a full roof replacement, elevator modernization, facade restoration, or parking structure repair, Stellar Property Group brings the project management expertise to ensure every capital project is completed on time, within budget, and to the highest quality standards.',
        'Our capital project process begins with thorough scope development and engineering assessments. We then solicit competitive bids from qualified contractors, present detailed comparisons to your board, and manage the entire construction process with regular progress reports, quality inspections, and budget tracking. We also coordinate resident communications to minimize disruption during construction.',
        'After project completion, we manage warranty documentation, schedule follow-up inspections, and update your reserve study to reflect completed improvements. This comprehensive approach ensures your capital dollars are invested wisely and your property improvements deliver lasting value for the community.',
      ]}
      related={[
        { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with integrated maintenance coordination.' },
        { title: 'Financial Management', href: '/services/financial-management', description: 'Reserve planning and budgeting that funds your maintenance needs.' },
        { title: 'Townhome Management', href: '/services/townhome-management', description: 'Specialized maintenance coordination for townhome shared structures.' },
      ]}
    />
  );
}
