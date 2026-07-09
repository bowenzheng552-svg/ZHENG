import { motion } from "framer-motion";
import { ArrowRight, Mic2, Users, Award, Headphones } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

const navItems = [
  { label: "ABOUT ME", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

const advantageTags = [
  { label: "8年+ 主持经验", icon: Mic2 },
  { label: "普通话一级乙等", icon: Award },
  { label: "产品实习经历", icon: Users },
  { label: "有声书10w+播放", icon: Headphones },
];

// Spring for nav items stagger
const navItemSpring = { type: "spring" as const, stiffness: 400, damping: 25 };

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.6] mix-blend-overlay pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar — Glassmorphism */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            className="glass-panel rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 glass-shimmer"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.8 }}
          >
            <ul className="flex items-center gap-2 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ...navItemSpring, delay: 0.1 + i * 0.06 }}
                >
                  <a
                    href={item.href}
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    className="text-[9px] sm:text-xs md:text-sm hover:underline whitespace-nowrap transition-colors hover:text-white interactive-cursor"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-12 gap-4">
            {/* Left: Heading */}
            <div className="col-span-12 md:col-span-8">
              <h1
                className="text-[10vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] 2xl:text-[6vw] font-medium leading-[0.85] tracking-[-0.02em]"
                style={{ color: "#FFFFFF" }}
              >
                <WordsPullUp text="ZHENGBOWEN" />
              </h1>
              {/* Subtitle — 微软雅黑 */}
              <motion.p
                className="text-[4vw] sm:text-[4vw] md:text-[3.2vw] lg:text-[2.8vw] xl:text-[2.4vw] mt-1 md:mt-3"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                郑博文
              </motion.p>
            </div>

            {/* Right: Description + Advantage Tags + CTA */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-4 md:gap-5">
              <motion.p
                className="text-white/60 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.4 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                播音与主持艺术 · 产品经理 · 内容创作者
              </motion.p>

              {/* Advantage Tags — Glassmorphism */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {advantageTags.map((tag, i) => {
                  const Icon = tag.icon;
                  return (
                    <motion.span
                      key={tag.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.7 + i * 0.08 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 glass-light rounded-full px-3 py-1.5 text-[10px] sm:text-xs interactive-cursor"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      <Icon size={12} className="opacity-70" />
                      {tag.label}
                    </motion.span>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-white/90 rounded-full px-6 py-2.5 text-black font-medium text-sm sm:text-base transition-all duration-300 hover:gap-3 hover:bg-white interactive-cursor"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                >
                  联系我
                  <motion.span
                    className="inline-flex items-center justify-center bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10"
                    whileHover={{ rotate: 0, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <ArrowRight className="text-white" size={18} />
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
