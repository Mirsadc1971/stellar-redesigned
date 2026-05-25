import {
  PaintBucket, Fence, Users, Hammer, Shield, Heart, Star,
} from 'lucide-react';
import ServiceLayout from '../../components/ui/ServiceLayout';

export default function TownhomeManagement() {
  return (
    <ServiceLayout
      seoTitle="Townhome Association Management in Chicago | Stellar Property Group"
      seoDescription="Specialized townhome association management in Chicago and suburbs. Exterior maintenance coordination, shared space management, and personalized service for smaller communities. Serving Chicagoland since 2007."
      canonical="https://stellarpropertygroup.com/services/townhome-management"
      heroTitle="Townhome Association Management in Chicago"
      heroDescription="Specialized management for townhome communities that deserve more than a one-size-fits-all approach. We understand the unique dynamics of townhome living and deliver the personalized attention your association needs."
      introHeading="Townhome management that feels personal, not corporate"
      introParagraphs={[
        'Townhome communities occupy a unique space in the world of community associations. Smaller than high-rise condominiums but more interconnected than single-family HOAs, townhome associations face distinct challenges: shared walls and rooflines, exterior maintenance responsibilities that span multiple units, and intimate community dynamics where every owner voice matters.',
        'At Stellar Property Group, we have managed townhome communities across Chicago and the North Shore since 2007. We know that townhome associations need a management partner who provides the same caliber of professional service as a large management firm but with the personal touch and accessibility of a boutique operation. That is exactly what we deliver.',
        'Your dedicated property manager will know every unit number, understand every maintenance schedule, and be personally invested in your community success. We handle the complex coordination of exterior maintenance projects that affect multiple units simultaneously, manage shared infrastructure like parking areas and common landscaping, and ensure your community finances are on solid footing for the long term.',
      ]}
      whyHeading="Tailored for townhome living"
      whyItems={[
        'Dedicated manager who knows your community personally',
        'Coordinated exterior maintenance across shared structures',
        'Reserve studies tailored to townhome components',
        'Shared space and amenity management',
        'Responsive service for smaller communities',
        'Competitive vendor pricing through our network',
        'Insurance coverage review and optimization',
        'Transparent budgets and financial reporting',
      ]}
      featuresHeading="Services designed for townhome communities"
      featuresSubtext="From coordinating multi-unit roof replacements to managing intimate community budgets, our services address the specific needs of townhome associations."
      features={[
        { icon: PaintBucket, title: 'Exterior Maintenance Coordination', description: 'Siding, roofing, gutters, and exterior paint programs managed on a scheduled cycle to protect your investment and maintain curb appeal.' },
        { icon: Fence, title: 'Shared Space Management', description: 'Common courtyards, walkways, parking areas, and shared amenities maintained to the highest standards for all residents.' },
        { icon: Users, title: 'Personalized Service', description: 'Smaller communities deserve big attention. Your dedicated manager knows every unit, every owner, and every detail of your association.' },
        { icon: Hammer, title: 'Capital Project Oversight', description: 'From roof replacements to parking lot resurfacing, we manage capital projects with competitive bidding, quality control, and budget discipline.' },
        { icon: Shield, title: 'Insurance & Risk Management', description: 'Proper insurance coverage analysis, claims management, and loss prevention strategies tailored to townhome community needs.' },
        { icon: Heart, title: 'Community Relations', description: 'Neighbor-to-neighbor communication support, community guidelines, and a responsive management team that resolves issues quickly.' },
      ]}
      deepDiveIcon={Star}
      deepDiveHeading="Understanding townhome-specific needs"
      deepDiveParagraphs={[
        'Townhome associations face maintenance challenges that require careful coordination. When a roofing project spans six connected units, or when exterior painting must happen in phases across an entire block, you need a management team that can plan the logistics, communicate with affected owners, manage contractor schedules, and ensure quality work that protects every unit equally.',
        'Our team brings deep experience in coordinating these multi-unit projects. We develop long-range maintenance schedules that spread costs predictably, negotiate volume discounts with contractors, and provide detailed project updates to all owners. We also conduct regular property inspections to catch maintenance issues early, before a small problem at one unit becomes an expensive emergency for the entire association.',
        'Financial planning for townhome communities requires specific expertise as well. Reserve studies must account for shared roofs, common driveways, and exterior building components that have different lifecycles. Our financial management team creates reserve plans that reflect the true needs of your townhome community, ensuring you are prepared for major expenses without overburdening owners with excessive assessments.',
      ]}
      related={[
        { title: 'Financial Management', href: '/services/financial-management', description: 'Reserve studies, budgets, and financial planning tailored to townhome communities.' },
        { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Preventive programs and capital project management for shared structures.' },
        { title: 'Violation Management', href: '/services/violation-management', description: 'Fair enforcement of community standards that keeps your neighborhood beautiful.' },
      ]}
    />
  );
}
