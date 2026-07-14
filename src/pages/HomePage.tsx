import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import { Target, TrendingUp, Users } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="Integrated Marketing Agency"
      title="Creative Marketing Solutions"
      description="We build websites, run campaigns, and create content that drives real business growth. From strategy to execution, we handle it all."
      primaryButton={{
        text: "Get Your Free Strategy Call",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Services",
        href: "#services",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/analytics-comparison-information-networking-concept_53876-15846.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-various-stationeries-laptop-white-surface_23-2147880519.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/angry-manager-office-berating-worker-hitting-performance-targets_482257-126645.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-with-keyboard_23-2148194515.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/financial-broker-analyzing-stock-trade-market-computer-using-exchange-hedge-fund-statistics-create-investment-profit-entrepreneur-working-with-forex-real-time-sales-trend-handheld-shot_482257-40951.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-recording-video-blog_23-2151932833.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-content-creator-recording-video-living-room-studio-while-tweaking-knobs-mixer-internet-live-broadcast-talk-show-host-talking-microphone-with-audience-while-using-audio-equipment_482257-45844.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-control-panel_23-2151957130.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/concentrated-young-redhead-curly-lady-sitting-cafe_171337-16577.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/network-analyst-studying-digital-commerce-progression-reports-computer_482257-126389.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-specialized-photographers-working-studio_23-2150247231.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-laptop-with-rate-charts-display-while-man-woman-working-business-project-design-computer-screen-with-data-chart-information-finance-analysis-desk_482257-40065.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Your Growth Partner"
      primaryButton={{
        text: "See Our Work",
        href: "#proof",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCards
      tag="Our Expertise"
      title="Integrated Services"
      description="Everything your SMB needs to thrive online in one seamless package."
      items={[
        {
          title: "Web Design",
          description: "High-converting websites optimized for speed and user experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/homepage-seen-computer-screen_23-2149416735.jpg",
        },
        {
          title: "Digital Campaigns",
          description: "Targeted ad strategies across social, search, and display platforms.",
          imageSrc: "http://img.b2bpic.net/free-photo/growth-status-technology-online-website-concept_53876-21396.jpg",
        },
        {
          title: "Content Creation",
          description: "Engaging copy and visuals that define your brand voice.",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169840.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Proven ROI"
      title="Results You Can Measure"
      description="Data-backed performance for your business growth."
      metrics={[
        {
          icon: TrendingUp,
          title: "Avg Revenue Growth",
          value: "+45%",
        },
        {
          icon: Users,
          title: "New Leads Generated",
          value: "12k+",
        },
        {
          icon: Target,
          title: "Campaign Accuracy",
          value: "98%",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="proof" data-section="proof">
    <SectionErrorBoundary name="proof">
          <SocialProofMarquee
      tag="Trusted By"
      title="Brands We Help Scale"
      names={[
        "TechCorp",
        "InnovateLab",
        "GrowthCo",
        "StartupXYZ",
        "LocalBiz",
        "EcoFriendly",
        "RetailHub",
      ]}
      textAnimation="fade"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Client Success"
      title="What Partners Say"
      testimonials={[
        {
          name: "Sarah Johnson",
          role: "CEO",
          quote: "Rocky Road transformed our digital presence entirely.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-businessman-formal-outfit-using-tablet_181624-33464.jpg",
        },
        {
          name: "Michael Chen",
          role: "CTO",
          quote: "Finally, a team that understands ROI-driven marketing.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2623.jpg",
        },
        {
          name: "Emily Rodriguez",
          role: "Marketing Dir",
          quote: "Their content creation skills are truly world-class.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-businesswoman-posing-with-coffee_23-2148452691.jpg",
        },
        {
          name: "David Kim",
          role: "Founder",
          quote: "The best investment we made this fiscal year.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",
        },
        {
          name: "Linda Wu",
          role: "Manager",
          quote: "Seamless integration, excellent results, highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-wearing-coat_1098-3778.jpg",
        },
      ]}
      textAnimation="slide-up"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Common Questions"
      title="Agency Insights"
      categories={[
        {
          name: "Services",
          items: [
            {
              question: "What is included in the package?",
              answer: "We provide a fully integrated suite of web design, ad management, and content services.",
            },
            {
              question: "How do we measure ROI?",
              answer: "We provide monthly reports tracking key metrics like leads, traffic, and conversion rates.",
            },
            {
              question: "Can I upgrade my plan?",
              answer: "Absolutely. Our retainer packages are flexible and scale with your business needs.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Let's Start"
      text="Ready to scale your business? Let's chat about your goals."
      primaryButton={{
        text: "Schedule Strategy Call",
        href: "#",
      }}
      secondaryButton={{
        text: "View Our Portfolio",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
