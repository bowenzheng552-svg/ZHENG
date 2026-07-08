import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Github, Linkedin, Music, BookOpen, Award as AwardIcon } from "lucide-react";

const socialLinks = [
  { icon: AwardIcon, label: "配音作品", href: "#" },
  { icon: BookOpen, label: "自媒体平台", href: "#" },
  { icon: Music, label: "播客频道", href: "#" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="relative bg-black py-24 md:py-32 px-4 md:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary text-[10px] sm:text-xs mb-6 uppercase tracking-widest"
        >
          Contact
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6"
          style={{ color: "#DEDBC8" }}
        >
          期待与你的合作
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-10"
        >
          播音主持 · 产品经理 · 内容创作者
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:zhengbowen@email.com"
            className="group inline-flex items-center gap-2 bg-primary rounded-full px-6 py-3 text-black font-medium text-sm sm:text-base transition-all duration-300 hover:gap-3"
          >
            发送邮件
            <span className="inline-flex items-center justify-center bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
              <ArrowRight className="text-primary" size={18} />
            </span>
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 border border-primary/30 rounded-full px-6 py-3 text-primary/80 font-medium text-sm sm:text-base transition-all duration-300 hover:border-primary/60 hover:text-primary"
          >
            下载简历
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" style={{ transform: "rotate(-45deg)" }} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors duration-300 text-sm"
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-gray-600 text-xs mt-16"
        >
          © 2026 郑博文
        </motion.p>
      </div>
    </motion.section>
  );
}
