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
      <section className="h-screen flex justify-center items-end">
          <motion.div
            className="w-7 h-[42px] border-2 border-text rounded-xl flex justify-center mb-16"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: hasScrolled ? 0 : 1,
            }}
          >
            <motion.div
              className="bg-black w-[3px] h-[10px] rounded-[2px] mt-1-down__wheel"
              initial={{
                translateY: 0,
              }}
              animate={{
                translateY: 4,
              }}
              transition={{
                duration: 0.4,
                repeatDelay: 0.5,
                repeatType: "reverse",
                repeat: Infinity,
              }}
            ></motion.div>
          </motion.div>
        </section>
      </>
    )
  }
  