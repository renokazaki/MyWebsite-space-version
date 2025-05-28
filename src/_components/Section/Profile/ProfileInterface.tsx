import { motion } from "framer-motion";
import { config } from "../../../config";
import { useMobile } from "../../../hooks/useMobile";
import { User, GraduationCap, Award, Heart, Coffee } from "lucide-react";
// アイコン名の型を定義
type IconName = "User" | "GraduationCap" | "Award" | "Heart" | "Coffee";

// セクションの型定義
interface AboutSection {
  title: string;
  icon: IconName;
  content: string;
}
export default function ProfileInterface() {
  const {isMobile} = useMobile();

// configからaboutオブジェクトの各セクションを取得し、適切な型にキャスト
const aboutSections = [
  config.about.profile,
  config.about.education,
  config.about.skills,
  config.about.hobbies,
  config.about.personality
] as AboutSection[];

// アイコンを描画するコンポーネント
const RenderIcon = ({ iconName }: { iconName: IconName }) => {
  switch (iconName) {
    case "User":
      return <User className="w-6 h-6 md:w-7 md:h-7 text-primary" />;
    case "GraduationCap":
      return <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-primary" />;
    case "Award":
      return <Award className="w-6 h-6 md:w-7 md:h-7 text-primary" />;
    case "Heart":
      return <Heart className="w-6 h-6 md:w-7 md:h-7 text-primary" />;
    case "Coffee":
      return <Coffee className="w-6 h-6 md:w-7 md:h-7 text-primary" />;
    default:
      return <User className="w-6 h-6 md:w-7 md:h-7 text-primary" />;
  }
}

return (
  <>
    <section className="h-screen flex justify-end items-center">
      <motion.div
        className="p-4 md:p-6 w-full md:w-[550px] max-w-full"
        whileInView={"visible"}
        initial={{
          opacity: 0,
        }}
        variants={{
          visible: {
            opacity: 1,
          },
        }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">About Me</h1>
        
        <div className="space-y-4 md:space-y-6">
          {aboutSections.map((section, idx) => (
            <motion.div
              key={section.title}
              className="bg-white/50 backdrop-blur-md rounded-lg p-3 md:p-5"
              initial={{ opacity: 0, y: 20 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0
                },
              }}
              transition={{
                duration: 0.4,
                delay: isMobile ? idx * 0.1 : idx * 0.15,
              }}
            >
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <RenderIcon iconName={section.icon} />
                <h2 className="text-text font-bold text-base md:text-xl m-0">{section.title}</h2>
              </div>
              
              {section.content && (
                <div className="text-text-light text-sm md:text-base ml-9 whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  </>
);
}