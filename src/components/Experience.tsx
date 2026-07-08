import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building, Radio, Tv, ArrowLeft, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import Stepper, { Step } from "./Stepper";

const tabs = [
  {
    id: 0,
    company: "欢聚集团(Hago)",
    period: "2026.01 - 2026.03",
    role: "产品经理实习",
    image: "/images/experience-2.jpg",
    icon: Building,
    highlights: [
      "EZPZ房间等级体系制定：为PUGC搭建基础条件，激励引导房主搭建高质量语音房",
      "配置房间等级体系规则，推动房间质量提升与用户留存",
    ],
  },
  {
    id: 1,
    company: "百度YY直播",
    period: "2026.01 - 2026.03",
    role: "产品经理实习",
    image: "/images/experience-1.jpg",
    icon: Building,
    highlights: [
      "负责海外市场调研 & 语音房产品美妆栏插件优化，协助生态支撑部开展YY开播产品海外市场调研",
      "调研海外美妆软件市场用户偏好，输出美妆美颜Tab配置需求并上线，埋点数据有效增加用户回流率",
      "日常C端需求PRD撰写，输出6项PRD文档，涵盖场景模板、调试广场等功能",
      "跟进协调项目进程，输出产品UI原型图和流程图，多语言Key文档整理核对，埋点文档",
      "主要负责的三个功能插件已上线正常使用",
    ],
  },
  {
    id: 2,
    company: "央广云听",
    period: "2025.10 - 至今",
    role: "PUGC认证主播",
    image: "/images/experience-3.jpg",
    icon: Radio,
    highlights: [
      "负责各类题材文艺小说有声书干音录制，个人专辑上架主页和开屏",
      "个人作品曾作为优秀作品上线总台周看点、央视频、中国之声等频道",
      "独立演播提交干音净时长超60h，代表作《老戏骨》《大河的歌谣》等",
      "有声作品《创世纪老兵的故事》收获10w+播放，于喜马拉雅等平台上架",
    ],
  },
  {
    id: 3,
    company: "汕头电视台",
    period: "2025.07 - 2025.08",
    role: "实习记者",
    image: "/images/experience-4.jpg",
    icon: Tv,
    highlights: [
      "于融媒体《今日视线》节目组担任见习记者",
      "核心工作：同期声转化、官方公众号运营、实地采访及跟拍、收集新闻信息",
      "输出17篇视频同期转化文档，独立完成8场大小活动现场采编",
      "大量音视频资料被节目组直接采用",
    ],
  },
];

function StepContent({ item }: { item: typeof tabs[0] }) {
  return (
    <div className="relative">
      {/* Company background panorama */}
      <div className="absolute inset-0 pointer-events-none" style={{ height: "100%", minHeight: "200px" }}>
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "right center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #000000 15%, rgba(0,0,0,0.75) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 glass-light rounded-2xl p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/5">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-1">
              {item.company}
            </h3>
            <p className="text-white/50 text-sm">{item.role} · {item.period}</p>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-3 md:space-y-4">
          {item.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
              <span className="text-white/70 text-xs sm:text-sm leading-relaxed">{h}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const headerSegments = [{ text: "工作经历与项目实践", className: "" }];
  const subHeaderSegments = [{ text: "产品 · 媒体 · 内容 跨领域实践者", className: "text-white/50" }];

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen bg-black relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-white/60 text-[10px] sm:text-xs mb-4 uppercase tracking-[0.15em]">EXPERIENCE</p>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white">
            <WordsPullUpMultiStyle segments={headerSegments} />
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-3">
            <WordsPullUpMultiStyle segments={subHeaderSegments} />
          </div>
        </div>

        {/* Tab Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-nowrap gap-2 sm:gap-3 overflow-x-auto pb-2 mb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl whitespace-nowrap flex-shrink-0 transition-all duration-400 ${
                  isActive
                    ? "glass-active text-white"
                    : "glass-light text-white/50 hover:text-white/80"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{tab.company}</span>
                <span className="hidden sm:inline text-[10px] text-white/30">{tab.period}</span>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-xl border border-white/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Stepper: replaces the old AnimatePresence content */}
        <div className="glass-light rounded-2xl overflow-hidden">
          <Stepper
            key={activeTab}
            initialStep={activeTab + 1}
            onStepChange={(step) => setActiveTab(step - 1)}
            backButtonText="上一个"
            nextButtonText="下一个"
            disableStepIndicators={false}
          >
            {tabs.map((tab) => (
              <Step key={tab.id}>
                <StepContent item={tab} />
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </section>
  );
}
