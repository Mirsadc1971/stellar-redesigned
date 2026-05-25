import {
  FileSearch, Scale, ClipboardList, TrendingUp, FileText, Gavel,
} from 'lucide-react';
import ServiceLayout from '../../components/ui/ServiceLayout';

export default function ViolationManagement() {
  return (
    <ServiceLayout
      seoTitle="Violation Management & Enforcement | Stellar Property Management"
      seoDescription="Professional violation management and enforcement for Chicago community associations. Fair due process, progressive enforcement, violation tracking, and Illinois compliance. Protecting community standards since 2007."
      canonical="https://stellarpropertygroup.com/services/violation-management"
      eyebrow="Enforcement Services"
      heroTitle="Violation Management & Enforcement"
      heroDescription="Protecting your community standards through fair, consistent, and legally compliant enforcement. Our systematic approach to violation management preserves property values while respecting the rights of every homeowner."
      introHeading="Fair enforcement that protects everyone"
      introParagraphs={[
        'Community rules exist for good reason: they protect property values, maintain quality of life, and ensure every resident can enjoy their home in peace. But enforcement without proper process creates conflict, legal exposure, and community division. Stellar Property Management brings a balanced approach to violation management that upholds your community standards while treating every homeowner with fairness and respect.',
        'Our violation management system is built on three principles: consistency, transparency, and due process. Every violation is documented objectively, every homeowner receives proper notice and the opportunity to be heard, and every enforcement action follows a progressive discipline framework that the board has approved in advance. This systematic approach protects your association from legal challenges while building community trust.',
        'Since 2007, we have helped 42 Chicago-area associations maintain their community standards through professional violation management. Our experience with Illinois community association law ensures your enforcement procedures comply with state requirements, your governing documents are properly applied, and your board is protected from liability throughout the process.',
      ]}
      whyHeading="Our enforcement approach"
      whyItems={[
        'Consistent, documented enforcement procedures',
        'Progressive discipline framework',
        'Proper notice and due process for every case',
        'Digital violation tracking and reporting',
        'Illinois community association law compliance',
        'Hearing coordination and facilitation',
        'Board-approved enforcement policies',
        'Regular community-wide rule reminders',
      ]}
      featuresHeading="Professional violation management services"
      featuresSubtext="A complete enforcement system that protects your community standards while following fair, legally compliant procedures at every step."
      features={[
        { icon: FileSearch, title: 'Rule Enforcement', description: 'Systematic monitoring and enforcement of community rules, architectural standards, and use restrictions based on your governing documents.' },
        { icon: Scale, title: 'Due Process Compliance', description: 'Every enforcement action follows proper notice requirements, hearing procedures, and appeal rights as required by Illinois law and your bylaws.' },
        { icon: ClipboardList, title: 'Violation Tracking', description: 'Digital tracking system that documents every violation, notice, response, and resolution with complete audit trails for your records.' },
        { icon: TrendingUp, title: 'Progressive Enforcement', description: 'Graduated response from friendly reminders to formal warnings to fines to hearings, giving homeowners every opportunity to come into compliance.' },
        { icon: FileText, title: 'Documentation Management', description: 'Proper documentation of every enforcement action including photographs, correspondence, hearing records, and resolution agreements.' },
        { icon: Gavel, title: 'Hearing Facilitation', description: 'Professional coordination of violation hearings including notice preparation, evidence organization, hearing procedures, and decision documentation.' },
      ]}
      deepDiveIcon={Scale}
      deepDiveHeading="Illinois compliance and legal protection"
      deepDiveParagraphs={[
        'Illinois law imposes specific requirements on how community associations enforce their rules and levy fines. The Common Interest Community Association Act requires associations to provide written notice of alleged violations, offer homeowners a reasonable opportunity to be heard before the board, and follow their own internal procedures consistently. Failure to follow these requirements can invalidate enforcement actions and expose the association to legal liability.',
        'Our violation management procedures are designed specifically to comply with Illinois law and protect your association from legal challenges. Every notice includes the specific rule violated, the factual basis for the allegation, the potential consequences, and the homeowner’s right to request a hearing. Our hearing process follows a structured format that ensures fairness while creating a clear record of the proceedings and the board decision.',
        'We also work with your association attorney to review and update enforcement policies as laws change, ensuring your procedures remain current and defensible. Our detailed documentation practices create a complete paper trail that protects your association if enforcement actions are ever challenged in court. This attention to legal compliance is one of the key reasons our client communities maintain a 96% retention rate.',
      ]}
      related={[
        { title: 'HOA Management', href: '/services/hoa-management', description: 'Full-service HOA management with integrated rule enforcement.' },
        { title: 'Board Support & Governance', href: '/services/board-support', description: 'Governance guidance and hearing facilitation support for your board.' },
        { title: 'Condominium Management', href: '/services/condominium-management', description: 'Condo management with Illinois compliance expertise built in.' },
      ]}
    />
  );
}
