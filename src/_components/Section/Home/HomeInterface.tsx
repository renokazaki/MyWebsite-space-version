import { motion } from "framer-motion";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react"

export default function HomeInterface() {
  const scrollData = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  
  useFrame(() => {
    setHasScrolled(scrollData.offset > 0);
  });

  return (
    <>
      <section className="h-screen flex flex-col justify-end items-center">
        {/* スクロール促進テキスト */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
                    <motion.p
            className="text-white text-lg md:text-xl mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: hasScrolled ? 0 : 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Ren’ｓ Portfolioへようこそ
          </motion.p>
          <motion.p
            className="text-white text-lg md:text-xl mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: hasScrolled ? 0 : 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            画面をスクロールしてください
          </motion.p>
          <motion.p
            className="text-white/70 text-sm md:text-base"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: hasScrolled ? 0 : 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>

        {/* マウススクロールアイコン */}
        <motion.div
          className="w-7 h-[42px] border-2 border-white rounded-xl flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white w-[3px] h-[10px] rounded-[2px] mt-1"
            initial={{ y: 0 }}
            animate={{ y: 4 }}
            transition={{
              duration: 0.4,
              repeatDelay: 0.5,
              repeatType: "reverse",
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* 下向き矢印（オプション） */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.svg
            className="w-6 h-6 text-white/50"
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ y: 0 }}
            animate={{ y: 5 }}
            transition={{
              duration: 1,
              repeatType: "reverse",
              repeat: Infinity,
            }}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </motion.svg>
        </motion.div>
      </section>
    </>
  )
}