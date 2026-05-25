import {
  CalendarDays, FileText, Scale, Target, GraduationCap, FolderOpen,
} from 'lucide-react';
import ServiceLayout from '../../components/ui/ServiceLayout';

export default function BoardSupport() {
  return (
    <ServiceLayout
      seoTitle="Board Support & Governance Services | Stellar Property Group"
      seoDescription="Professional board support and governance services for Chicago community associations. Meeting coordination, strategic planning, new board member orientation, and document management. CAI-certified since 2007."
      canonical="https://stellarpropertygroup.com/services/board-support"
      eyebrow="Governance Services"
      heroTitle="Board Support & Governance Services"
      heroDescription="Empowering association boards with the tools, knowledge, and professional support they need to govern effectively. We handle the administrative burden so your board can focus on strategic decisions that shape your community's future."
      introHeading="Professional support for effective board governance"
      introParagraphs={[
        'Serving on a community association board is a significant responsibility. Board members are volunteer leaders who must navigate complex legal requirements, manage substantial budgets, and make decisions that affect their neighbors’ daily lives and property values. Without professional support, board service can quickly become overwhelming, leading to burnout, poor decisions, and community conflict.',
        'Stellar Property Group provides comprehensive board support services that make effective governance achievable for every board member, regardless of their experience level. From preparing detailed meeting agendas and maintaining accurate minutes to providing governance guidance and facilitating strategic planning sessions, we give your board the infrastructure it needs to lead with confidence.',
        'Our CAI-certified management professionals bring deep knowledge of community association best practices, Illinois legal requirements, and proven governance frameworks. We serve as a trusted resource for your board, providing objective advice, facilitating difficult conversations, and ensuring every decision is properly documented and implemented.',
      ]}
      whyHeading="Board support highlights"
      whyItems={[
        'Complete meeting preparation and agenda development',
        'Professional minutes and record-keeping',
        'New board member orientation program',
        'Governance best practices guidance',
        'Strategic planning facilitation',
        'Document management and archiving',
        'Board communication tools and portal',
        'Annual board training sessions',
      ]}
      featuresHeading="Complete board support services"
      featuresSubtext="Everything your board needs to govern effectively, from meeting logistics to strategic planning and ongoing education."
      features={[
        { icon: CalendarDays, title: 'Meeting Coordination', description: 'Complete meeting management including scheduling, notice distribution, agenda preparation, presentation materials, and venue coordination.' },
        { icon: FileText, title: 'Agenda & Minutes', description: 'Professional agenda development that keeps meetings focused and productive, plus accurate minutes that document decisions and action items.' },
        { icon: Scale, title: 'Governance Guidance', description: 'Expert advice on parliamentary procedure, voting requirements, fiduciary duties, and compliance with Illinois association law.' },
        { icon: Target, title: 'Strategic Planning', description: 'Facilitated planning sessions that help your board set priorities, develop long-range goals, and create actionable implementation plans.' },
        { icon: GraduationCap, title: 'Board Member Orientation', description: 'Comprehensive onboarding for new board members covering fiduciary duties, governing documents, financials, and association operations.' },
        { icon: FolderOpen, title: 'Document Management', description: 'Organized digital archives of governing documents, meeting records, contracts, correspondence, and all association business records.' },
      ]}
      deepDiveIcon={GraduationCap}
      deepDiveHeading="Investing in board education"
      deepDiveParagraphs={[
        'The most effective association boards are the ones that invest in their own development. Board members who understand their fiduciary duties, know how to read financial statements, and are familiar with Illinois association law make better decisions, avoid costly mistakes, and create healthier communities. That is why board education is a cornerstone of our governance support services.',
        'Our new board member orientation program covers everything an incoming director needs to know: the association governing documents, current financial position, pending projects, vendor contracts, and ongoing legal matters. We also provide training on fiduciary responsibilities, open meeting requirements, and the basics of Robert’s Rules of Order so new members can contribute meaningfully from their very first meeting.',
        'For experienced boards, we offer annual continuing education sessions on topics like reserve fund management, insurance coverage optimization, vendor contract negotiation, and conflict resolution. We also facilitate strategic planning retreats that help boards focus on the long-term vision for their community. These investments in board development pay dividends in better governance, fewer conflicts, and stronger communities.',
      ]}
      related={[
        { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with comprehensive board support.' },
        { title: 'Financial Management', href: '/services/financial-management', description: 'Financial reporting and budget tools that empower informed board decisions.' },
        { title: 'Violation Management', href: '/services/violation-management', description: 'Policy enforcement guidance and due process support for your board.' },
      ]}
    />
  );
}
