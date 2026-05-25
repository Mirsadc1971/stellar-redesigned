import {
  Scale, Users, DollarSign, Wrench, MessageCircle, FileText, Shield,
} from 'lucide-react';
import ServiceLayout from '../../components/ui/ServiceLayout';

export default function CondominiumManagement() {
  return (
    <ServiceLayout
      seoTitle="Condominium Management Services in Chicago | Stellar Property Group"
      seoDescription="Full-service condominium management in Chicago and the North Shore. Illinois Condo Property Act compliance, board governance, financial oversight, and 24/7 emergency support. Serving 42 associations since 2007."
      canonical="https://stellarpropertygroup.com/services/condominium-management"
      eyebrow="Property Management"
      heroTitle="Condominium Management Services in Chicago"
      heroDescription="Expert management for Chicago-area condominium associations. From high-rise towers on Lake Shore Drive to boutique buildings in Lincoln Park, we deliver the financial discipline, legal compliance, and responsive service your community deserves."
      introHeading="Full-service condo management built on Chicago expertise"
      introParagraphs={[
        'Managing a condominium association in Illinois requires deep knowledge of state-specific regulations, strong financial stewardship, and the ability to balance the needs of diverse unit owners. Since 2007, Stellar Property Group has provided Chicago-area condominiums with the professional management they need to protect property values, maintain common elements, and foster thriving residential communities.',
        'Our team holds certifications from the Community Associations Institute (CAI) and the Institute of Real Estate Management (IREM), ensuring your association benefits from industry best practices and cutting-edge management strategies. We currently serve 42 associations across Chicago and the North Shore, maintaining a 96% client retention rate that reflects our commitment to excellence.',
        'Whether your building has 10 units or 500, our approach is the same: proactive management that prevents problems before they arise, transparent communication that keeps owners informed, and financial planning that positions your association for long-term stability. We assign a dedicated property manager to each community so you always have a knowledgeable point of contact.',
      ]}
      whyHeading="Why Chicago condos choose Stellar"
      whyItems={[
        'Dedicated property manager for every community',
        'Illinois Condominium Property Act expertise',
        'CAI and IREM certified management team',
        '24/7 emergency response line',
        'Online owner portal with financial transparency',
        'Competitive vendor pricing through bulk contracts',
        '96% client retention rate since 2007',
        'Board member training and orientation programs',
      ]}
      featuresHeading="Comprehensive condominium management services"
      featuresSubtext="Every aspect of your association operations, handled by experienced professionals who understand the unique challenges of Chicago condo living."
      features={[
        { icon: Scale, title: 'Illinois Condo Act Compliance', description: 'Full compliance with the Illinois Condominium Property Act (765 ILCS 605), ensuring your association meets every statutory requirement.' },
        { icon: Users, title: 'Board Governance Support', description: 'Meeting coordination, agenda preparation, quorum tracking, and parliamentary procedure guidance for effective board operations.' },
        { icon: DollarSign, title: 'Financial Oversight', description: 'Comprehensive budgeting, reserve fund management, assessment collection, and transparent monthly financial reporting.' },
        { icon: Wrench, title: 'Vendor Management', description: 'Vetted contractor relationships, competitive bidding, contract negotiation, and quality oversight for all building services.' },
        { icon: MessageCircle, title: 'Owner Communications', description: 'Dedicated online portal, regular newsletters, emergency notifications, and responsive customer service for all unit owners.' },
        { icon: FileText, title: 'Document Management', description: 'Digital record-keeping, governing document maintenance, disclosure packet preparation, and secure document archiving.' },
      ]}
      deepDiveIcon={Shield}
      deepDiveHeading="Illinois Condo Act compliance"
      deepDiveParagraphs={[
        'Illinois condominium associations operate under a complex regulatory framework that includes the Condominium Property Act, the Common Interest Community Association Act, and the Not-for-Profit Corporation Act. Non-compliance can expose board members to personal liability and create costly legal disputes that drain your reserve funds.',
        'Our management team stays current with every legislative change and court ruling that affects Illinois condominiums. We ensure your association governing documents, meeting procedures, financial practices, and enforcement policies align with current law. From proper notice requirements to assessment lien procedures, we handle the legal complexities so your board can focus on community-building.',
        'We also work closely with experienced condominium attorneys to address complex legal questions, review proposed bylaw amendments, and navigate disputes. Our proactive approach to compliance has helped our client communities avoid costly litigation and regulatory penalties year after year.',
      ]}
      related={[
        { title: 'Financial Management', href: '/services/financial-management', description: 'Budgeting, reserves, and transparent financial reporting for your association.' },
        { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Preventive maintenance programs and 24/7 emergency response for your building.' },
        { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting coordination, governance guidance, and strategic planning for your board.' },
      ]}
    />
  );
}
