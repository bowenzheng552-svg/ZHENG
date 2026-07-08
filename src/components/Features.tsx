import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

interface FeatureCardProps {
  index: number;
  children: React.ReactNode;
}

function FeatureCard({ index, children }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-2xl"
    >
      {children}
    </motion.div>
  );
}

const checklistItems1 = [
  "Scene-by-scene storyboarding",
  "Drag-and-drop timeline builder",
  "Instant template library",
  "Real-time team collaboration",
];

const checklistItems2 = [
  "AI-powered analysis of framing and pacing",
  "Actionable creative notes with visual references",
  "Seamless tool integrations",
];

const checklistItems3 = [
  "One-click notification silencing across devices",
  "Custom ambient soundscape generator",
  "Auto-sync with your production schedule",
];

export default function Features() {
  const headerSegments = [
    { text: "Studio-grade workflows for visionary creators.", className: "" },
  ];
  const subHeaderSegments = [
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500" },
  ];

  const CardLayout = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );

  return (
    <section className="min-h-screen bg-black relative py-24 md:py-32 px-4 md:px-8">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal" style={{ color: "#DEDBC8" }}>
            <WordsPullUpMultiStyle segments={headerSegments} />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
            <WordsPullUpMultiStyle segments={subHeaderSegments} />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1">
          {/* Card 1 - Video */}
          <FeatureCard index={0}>
            <div className="relative w-full h-full min-h-[300px] lg:min-h-0 overflow-hidden rounded-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="text-xs sm:text-sm md:text-base" style={{ color: "#E1E0CC" }}>
                  Your creative canvas.
                </p>
              </div>
            </div>
          </FeatureCard>

          {/* Card 2 - Project Storyboard */}
          <FeatureCard index={1}>
            <CardLayout className="bg-[#212121] p-4 md:p-5 lg:p-6 h-full justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  />
                  <span className="text-gray-500 text-xs">01</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-medium mb-3" style={{ color: "#E1E0CC" }}>
                  Project Storyboard.
                </h3>
                <ul className="space-y-2 mb-4">
                  {checklistItems1.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-primary mt-0.5 shrink-0" size={14} />
                      <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="group inline-flex items-center gap-1 text-xs sm:text-sm text-primary/80 hover:text-primary transition-colors">
                Learn more
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" style={{ transform: "rotate(-45deg)" }} />
              </a>
            </CardLayout>
          </FeatureCard>

          {/* Card 3 - Smart Critiques */}
          <FeatureCard index={2}>
            <CardLayout className="bg-[#212121] p-4 md:p-5 lg:p-6 h-full justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  />
                  <span className="text-gray-500 text-xs">02</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-medium mb-3" style={{ color: "#E1E0CC" }}>
                  Smart Critiques.
                </h3>
                <ul className="space-y-2 mb-4">
                  {checklistItems2.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-primary mt-0.5 shrink-0" size={14} />
                      <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="group inline-flex items-center gap-1 text-xs sm:text-sm text-primary/80 hover:text-primary transition-colors">
                Learn more
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" style={{ transform: "rotate(-45deg)" }} />
              </a>
            </CardLayout>
          </FeatureCard>

          {/* Card 4 - Immersion Capsule */}
          <FeatureCard index={3}>
            <CardLayout className="bg-[#212121] p-4 md:p-5 lg:p-6 h-full justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  />
                  <span className="text-gray-500 text-xs">03</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-medium mb-3" style={{ color: "#E1E0CC" }}>
                  Immersion Capsule.
                </h3>
                <ul className="space-y-2 mb-4">
                  {checklistItems3.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-primary mt-0.5 shrink-0" size={14} />
                      <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="group inline-flex items-center gap-1 text-xs sm:text-sm text-primary/80 hover:text-primary transition-colors">
                Learn more
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" style={{ transform: "rotate(-45deg)" }} />
              </a>
            </CardLayout>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
