import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Award, BookOpen, Volume2 } from "lucide-react";

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

const gradientClass = "bg-gradient-to-r from-amber-200 via-yellow-100 to-white bg-clip-text text-transparent";

const headingSegments = [
  { text: "我是郑博文，", className: "font-semibold" },
  { text: "正在努力成为优质", className: "font-normal" },
  { text: "跨领域的", className: "font-normal" },
  { text: "内容创造者", className: gradientClass },
  { text: "与产品实践者。", className: gradientClass },
];

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
      <div className="glass-panel rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20 md:py-28 text-center relative overflow-hidden">
        {/* Subtle noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none" />

        <motion.div
          className="relative z-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <p className="text-white/60 text-[10px] sm:text-xs mb-8 md:mb-12 uppercase tracking-[0.15em]">
            ABOUT ME
          </p>

          {/* Heading */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10 md:mb-14 text-white">
            <WordsPullUpMultiStyle segments={headingSegments} />
          </div>

          {/* Stats — Glassmorphism cards */}
          <div ref={headerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 max-w-2xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0, scale: 0.9 }}
                  animate={isHeaderInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-card rounded-xl p-4 text-center interactive-cursor"
                >
                  <motion.div
                    initial={{ rotate: -10, scale: 0 }}
                    animate={isHeaderInView ? { rotate: 0, scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.12 + 0.1 }}
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
                  transition={{ type: "spring", stiffness: 350, damping: 18, delay: i * 0.1 }}
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
        </motion.div>
      </div>
    </motion.section>
  );
}
