import AnimatedLetter from "./AnimatedLetter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Award, BookOpen, Volume2 } from "lucide-react";
import GradientBlinds from "./GradientBlinds";

const stats = [
  { icon: Mic, value: "60+", label: "活动主持" },
  { icon: Award, value: "100w+", label: "有声作品播放" },
  { icon: BookOpen, value: "80h+", label: "干音录制时长" },
  { icon: Volume2, value: "92w+", label: "自媒体总播放" },
];

const wordCloud = [
  { text: "跨领域多模态内容创造", size: "text-2xl sm:text-3xl lg:text-4xl", weight: "font-medium", font: "" },
  { text: "C端B端产品经理实习", size: "text-lg sm:text-xl lg:text-2xl", weight: "", font: "" },
  { text: "新媒体agent工作流搭建", size: "text-lg sm:text-xl lg:text-2xl", weight: "font-medium", font: "" },
  { text: "丰富配音/剪辑经验", size: "text-base sm:text-lg lg:text-xl", weight: "", font: "" },
];

const lineSpring = (delay: number) => ({
  type: "spring" as const,
  stiffness: 280,
  damping: 22,
  delay,
});

export default function About() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="bg-black py-24 md:py-32 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-panel rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 md:px-16 lg:px-28 py-20 md:py-28 text-center relative overflow-hidden">
        {/* GradientBlinds animated background */}
        <div className="absolute inset-0 z-0">
          <GradientBlinds
            gradientColors={['#8B7355', '#DEDBC8', '#C4A862', '#B8A070', '#A08050']}
            angle={0}
            noise={0.15}
            blindCount={28}
            blindMinWidth={30}
            spotlightRadius={0.35}
            spotlightSoftness={1.8}
            spotlightOpacity={0.5}
            mouseDampening={0.04}
            shineDirection="left"
            mixBlendMode="overlay"
          />
        </div>

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

        {/* Subtle noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.08] z-[2] pointer-events-none" />

        <div className="relative z-10">
          {/* Label */}
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-[10px] sm:text-xs mb-10 md:mb-14 uppercase tracking-[0.15em]"
          >
            ABOUT ME
          </motion.p>

          {/* Heading — redesigned typography */}
          <div ref={headerRef} className="max-w-4xl mx-auto mb-12 md:mb-16 leading-[1.4]">
            {/* Line 1: Name introduction */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={lineSpring(0.1)}
              className="flex items-baseline justify-center gap-2 sm:gap-3 flex-wrap mb-4 md:mb-5"
            >
              <span className="text-white/40 text-lg sm:text-xl md:text-2xl font-light tracking-wide">
                我是
              </span>
              <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-handwriting tracking-[0.08em] leading-none">
                郑博文
              </span>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-white/30 self-center" />
            </motion.div>

            {/* Line 2: Pursuit description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={lineSpring(0.2)}
              className="text-white/70 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide mb-3 md:mb-4"
            >
              正在努力成为优质跨领域的
            </motion.p>

            {/* Line 3: Key identity — emphasized */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={lineSpring(0.3)}
              className="flex items-baseline justify-center gap-2 sm:gap-3 flex-wrap"
            >
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                内容创造者
              </span>
              <span className="text-white/30 text-base sm:text-lg md:text-xl font-light italic mx-1">
                与
              </span>
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                产品实践者。
              </span>
            </motion.div>
          </div>

          {/* Stats — Glassmorphism cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 max-w-2xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0, scale: 0.9 }}
                  animate={isHeaderInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-card rounded-xl p-4 text-center interactive-cursor"
                >
                  <motion.div
                    initial={{ rotate: -10, scale: 0 }}
                    animate={isHeaderInView ? { rotate: 0, scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.45 + i * 0.12 }}
                  >
                    <Icon className="text-white/40 mx-auto mb-2" size={20} />
                  </motion.div>
                  <div className="text-xl sm:text-2xl font-medium text-white">{stat.value}</div>
                  <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Word Cloud — Glassmorphism chips with spring */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
              {wordCloud.map((word, i) => (
                <motion.div
                  key={word.text}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${word.size} ${word.weight} ${word.font} glass-card rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 interactive-cursor select-none`}
                  style={{ color: "#FFFFFF" }}
                >
                  {word.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Body text */}
          <div className="max-w-2xl mx-auto">
            <AnimatedLetter
              text="八余年主持与语音表达艺术教育经历，从播音主持到产品经理，从传统媒体到互联网产品，我始终在探索内容与技术的交汇点。具备独立工作流，可以完成新媒体类项目从0到1的建设。专业播报和即兴评述能力曾得到中国传媒大学播音系主任丁隆江教授高度认可。热爱摄影、素描、羽毛球、钢琴，乐于探索多元生活方式。"
              className="font-handwriting text-[#F5D68A] text-xs sm:text-sm md:text-base text-left"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
