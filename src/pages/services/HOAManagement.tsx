import {
  Users, TreePine, CalendarDays, Ruler, BookOpen, MessageCircle, Handshake,
} from 'lucide-react';
import ServiceLayout from '../../components/ui/ServiceLayout';

export default function HOAManagement() {
  return (
    <ServiceLayout
      seoTitle="HOA Management Services in Chicago | Stellar Property Management"
      seoDescription="Professional HOA management for Chicago-area homeowners associations. CC&R enforcement, community engagement, landscaping coordination, architectural review, and full-service association management since 2007."
      canonical="https://stellarpropertygroup.com/services/hoa-management"
      heroTitle="HOA Management Services in Chicago"
      heroDescription="Building stronger neighborhoods through professional homeowners association management. From established suburbs to new developments across Chicagoland, we create communities where people are proud to live."
      introHeading="Neighborly management that builds real community"
      introParagraphs={[
        'Homeowners associations thrive when residents feel connected, informed, and proud of where they live. At Stellar Property Management, our HOA management goes beyond the administrative basics. We partner with your board to create vibrant, well-maintained neighborhoods where property values grow and neighbors become friends.',
        'Since 2007, we have managed single-family home communities, planned unit developments, and mixed-use neighborhoods throughout Chicago and the surrounding suburbs. Our approach combines proactive common area maintenance, transparent financial management, and thoughtful community programming that transforms a collection of homes into a true community.',
        'Every HOA we manage receives a dedicated community manager who attends board meetings, coordinates vendors, handles homeowner communications, and ensures your CC&Rs are enforced fairly and consistently. We bring institutional knowledge and professional resources while never losing sight of the personal relationships that make neighborhoods special.',
      ]}
      whyHeading="The Stellar HOA difference"
      whyItems={[
        'Dedicated community manager for your HOA',
        'Proven CC&R enforcement that is fair and consistent',
        'Seasonal landscaping and common area programs',
        'Community event planning and coordination',
        'Streamlined architectural review process',
        'Online homeowner portal with real-time updates',
        'Annual community satisfaction surveys',
        'CAI-certified management professionals',
      ]}
      featuresHeading="Complete HOA management solutions"
      featuresSubtext="From day-to-day operations to long-term strategic planning, we handle every aspect of homeowners association management with professionalism and care."
      features={[
        { icon: Users, title: 'Community Engagement', description: 'Town halls, surveys, social events, and communication programs that bring neighbors together and build a strong sense of community.' },
        { icon: BookOpen, title: 'CC&R Enforcement', description: 'Fair, consistent enforcement of covenants, conditions, and restrictions that protects property values while respecting homeowner rights.' },
        { icon: TreePine, title: 'Landscaping Coordination', description: 'Seasonal landscaping programs, snow removal management, and common area beautification that keeps your community looking its best.' },
        { icon: CalendarDays, title: 'Community Events', description: 'Planning and coordination of neighborhood events, holiday celebrations, and community gatherings that foster resident connections.' },
        { icon: Ruler, title: 'Architectural Review', description: 'Streamlined architectural review process for modifications, additions, and exterior changes that maintains community aesthetics.' },
        { icon: MessageCircle, title: 'Homeowner Communications', description: 'Multi-channel communication through newsletters, email, online portal, and community website to keep every homeowner informed.' },
      ]}
      deepDiveIcon={Handshake}
      deepDiveHeading="More than management: building community"
      deepDiveParagraphs={[
        'The best homeowners associations are the ones where residents feel a genuine sense of belonging. Our community engagement programs go beyond maintaining common areas and collecting dues. We help your board create traditions, foster connections, and build the kind of neighborhood where people want to put down roots.',
        'From seasonal block parties and holiday lighting ceremonies to community garden programs and neighborhood watch coordination, we bring the organizational expertise and vendor relationships to make community events happen smoothly. Our online community portal gives homeowners a centralized place to stay informed, submit requests, and connect with their neighbors.',
        'We also conduct annual community satisfaction surveys to identify priorities and measure how well the association is meeting homeowner expectations. This data-driven approach ensures your board makes decisions that reflect community values and helps us continuously improve the services we provide.',
      ]}
      related={[
        { title: 'Violation Management', href: '/services/violation-management', description: 'Fair, transparent enforcement of community rules with proper due process.' },
        { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Common area maintenance, landscaping oversight, and emergency response.' },
        { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting coordination, strategic planning, and governance best practices.' },
      ]}
    />
  );
}
