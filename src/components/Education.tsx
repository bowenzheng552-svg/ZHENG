import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, ScrollText } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

const educationItems = [
  {
    period: "2024.09 - 至今",
    school: "河海大学",
    major: "播音与主持艺术（大二在读）",
    subtitle: "数智服务（辅修）",
    details: ["GPA: 4.27/5.0", "专业排名前40%", "CET-4 通过"],
    icon: GraduationCap,
  },
  {
    period: "2025",
    school: "中国传媒大学",
    major: "播音与主持艺术 · 大圈录取通知书",
    subtitle: "全国前三百 · 广东省统考260分（全省27名）",
    details: ["广东省播音省统考 260分", "全省第27名"],
    icon: Award,
  },
  {
    period: "认证",
    school: "专业证书",
    major: "普通话一级乙等 · 全媒体运营师 · 心理咨询师",
    subtitle: "钢琴十级（中国音乐学院、星海艺术学院）",
    details: ["普通话一级乙等（92.7分）", "钢琴十级", "广东省朗诵协会会员", "汕头市朗诵协会会员"],
    icon: ScrollText,
  },
];

const springCard = { type: "spring" as const, stiffness: 350, damping: 22 };
const springStagger = (i: number) => ({ type: "spring" as const, stiffness: 300, damping: 20, delay: i * 0.12 });

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={sectionRef}
      id="education"
      className="bg-black py-24 md:py-32 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary text-[10px] sm:text-xs mb-4 uppercase tracking-widest">Education</p>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium" style={{ color: "#DEDBC8" }}>
            <WordsPullUp text="教育背景" />
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/5" />

          <div className="space-y-6">
            {educationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.school}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={springStagger(index)}
                  className="relative pl-14 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-[22px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center -translate-x-1/2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary" />
                  </div>

                  {/* Card — Glassmorphism */}
                  <motion.div
                    className="glass-card rounded-2xl p-6 md:p-8"
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={springCard}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="w-10 h-10 rounded-full glass-light flex items-center justify-center shrink-0"
                        initial={{ rotate: -10, scale: 0 }}
                        animate={isInView ? { rotate: 0, scale: 1 } : {}}
                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: index * 0.12 + 0.15 }}
                      >
                        <Icon className="text-primary" size={18} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h3 className="text-base sm:text-lg font-medium" style={{ color: "#E1E0CC" }}>
                            {item.school}
                          </h3>
                          <span className="text-gray-500 text-xs whitespace-nowrap">{item.period}</span>
                        </div>
                        <p className="text-primary/80 text-sm mb-1">{item.major}</p>
                        <p className="text-gray-500 text-xs">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.details.map((detail, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ type: "spring", stiffness: 300, damping: 18, delay: index * 0.12 + 0.2 + i * 0.04 }}
                          whileHover={{ scale: 1.06, y: -1 }}
                          className="text-xs text-gray-400 glass-light px-3 py-1 rounded-full interactive-cursor"
                        >
                          {detail}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
