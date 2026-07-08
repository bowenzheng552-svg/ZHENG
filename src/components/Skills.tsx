import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Monitor, Layers, Mic, Award } from "lucide-react";
import { ChevronDown } from "lucide-react";

const skillCategories = [
  {
    title: "办公软件",
    icon: Monitor,
    color: "from-sky-400 to-violet-400",
    hexColor: "#38bdf8",
    items: ["剪映", "PowerPoint", "创可贴", "Canvas", "WPS", "AU", "幕客", "Draw.io", "ID", "Midjourney", "Codex", "Coding"],
  },
  {
    title: "产品能力",
    icon: Layers,
    color: "from-violet-500 to-fuchsia-400",
    hexColor: "#8b5cf6",
    items: ["PRD撰写", "产品原型", "流程图", "数据埋点", "用户调研", "需求文档", "数据分析"],
  },
  {
    title: "媒体与表达",
    icon: Mic,
    color: "from-amber-400 to-rose-400",
    hexColor: "#f59e0b",
    items: ["播音主持", "配音演播", "有声书录制", "同期声转化", "公众号运营", "视频采编"],
  },
  {
    title: "语言与证书",
    icon: Award,
    color: "from-emerald-400 to-cyan-400",
    hexColor: "#10b981",
    items: ["普通话一级乙等", "CET-4", "全媒体运营师", "心理咨询师", "钢琴十级"],
  },
];

function BallGlow({ color }: { color: string }) {
  return (
    <div
      className="absolute inset-0 rounded-full opacity-30 blur-xl animate-pulse-slow"
      style={{
        background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
        transform: "scale(1.3)",
      }}
    />
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ballRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);
  const mousePos = useRef<{ x: number; y: number; el: HTMLDivElement | null }>({ x: 0, y: 0, el: null });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const el = ballRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(400px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (index: number) => {
    const el = ballRefs.current[index];
    if (!el) return;
    el.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className="relative bg-black py-24 md:py-32 px-4 md:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary text-[10px] sm:text-xs mb-4 uppercase tracking-widest text-center"
        >Skills</motion.p>

        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium" style={{ color: "#DEDBC8" }}>专业技能</h2>
          <p className="text-white/40 text-xs sm:text-sm mt-3">点击下方箭头查看细分技能</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;
            const floatDelay = index * 0.15;

            return (
              <motion.div
                key={cat.title}
                className="flex flex-col items-center"
                initial={{ y: 50, opacity: 0, scale: 0.85 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {/* Ball container with floating animation */}
                <motion.div
                  className="relative"
                  animate={isInView ? {
                    y: [0, -6, 0],
                  } : {}}
                  transition={{
                    duration: 3,
                    delay: floatDelay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Glow behind the ball */}
                  <BallGlow color={cat.hexColor} />

                  {/* Animated ring (subtle rotation) */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={isInView ? { rotate: 360 } : {}}
                    transition={{ duration: 12, delay: floatDelay, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, ${cat.hexColor}44 25%, transparent 50%, ${cat.hexColor}44 75%, transparent 100%)`,
                      maskImage: "radial-gradient(circle, transparent 60%, black 61%, black 100%)",
                      WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 61%, black 100%)",
                    }}
                  />

                  {/* The ball */}
                  <motion.div
                    ref={(el) => { ballRefs.current[index] = el; }}
                    className={`relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] rounded-full flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br ${cat.color} shadow-lg`}
                    style={{
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                      boxShadow: isHovered
                        ? `0 0 30px ${cat.hexColor}44, 0 0 60px ${cat.hexColor}22`
                        : `0 4px 20px ${cat.hexColor}22`,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      handleMouseLeave(index);
                    }}
                    onClick={() => toggleExpand(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Shimmer overlay on hover */}
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{
                          background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                        }}
                      />
                    )}

                    <div className="relative z-10 flex flex-col items-center">
                      <Icon size={22} className="text-black/70 mb-1" />
                      <span className="text-black/80 text-xs sm:text-sm md:text-base font-bold text-center leading-tight px-3">
                        {cat.title}
                      </span>
                    </div>

                    {isExpanded && (
                      <motion.div
                        className="absolute -inset-[3px] rounded-full border-2"
                        style={{ borderColor: `${cat.hexColor}66` }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                </motion.div>

                {/* Arrow button */}
                <motion.button
                  onClick={() => toggleExpand(index)}
                  className="mt-3 sm:mt-4 w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] transition-colors duration-200"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isInView ? {
                    y: [0, -3, 0],
                  } : {}}
                  transition={{
                    duration: 3,
                    delay: floatDelay + 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronDown
                    size={16}
                    className="text-white/60 transition-transform duration-300"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </motion.button>

                {/* Expandable sub-skills */}
                <motion.div
                  className="w-full overflow-hidden mt-2"
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="bg-[#101010] rounded-xl p-3 sm:p-4 border border-white/[0.05]">
                    <div className="space-y-1.5">
                      {cat.items.map((item, i) => (
                        <motion.div
                          key={item}
                          className="flex items-center gap-2 text-white/65 hover:text-white/90 transition-colors duration-200"
                          initial={{ x: -8, opacity: 0 }}
                          animate={isExpanded ? { x: 0, opacity: 1 } : {}}
                          transition={{
                            duration: 0.25,
                            delay: isExpanded ? i * 0.04 : 0,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br ${cat.color} opacity-60`} />
                          <span className="text-[11px] sm:text-xs">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
