import { motion, AnimatePresence } from "framer-motion";
import { config } from "../../../config";
import { useMobile } from "../../../hooks/useMobile";
import { useState, type JSX } from "react";
import { X, ExternalLink } from "lucide-react";

// プロジェクトの型定義
interface TechIcon {
  name: string;
  icon: string;
}

interface Project {
  name: string;
  image: string;
  repository: string;
  link: string;
  techIcons: TechIcon[];
  description: string;
  point: string;
}

export default function ProjectInterface(): JSX.Element {
  const { isMobile } = useMobile();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // モーダルを開く
  const openModal = (project: Project): void => {
    setSelectedProject(project);
  };

  // モーダルを閉じる
  const closeModal = (): void => {
    setSelectedProject(null);
  };

  // プロジェクトを開く
  const openProject = (link: string): void => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  // リポジトリを開く
  const openRepository = (repository: string): void => {
    window.open(repository, '_blank', 'noopener,noreferrer');
  };

  // クリックイベントハンドラー
  const handleProjectClick = (e: React.MouseEvent, project: Project): void => {
    e.preventDefault();
    e.stopPropagation();
    openModal(project);
  };

  return (
    <>
      <section className="h-screen flex justify-start items-center">
        <motion.div
          className="p-2 md:p-4 w-full h-full md:w-[650px] lg:w-[700px] xl:w-[800px] max-w-full justify-center"
          whileInView="visible"
          initial={{
            opacity: 0,
          }}
          variants={{
            visible: {
              opacity: 1,
            },
          }}
        >
          <div className="flex flex-row flex-wrap md:grid md:grid-cols-[repeat(auto-fit,_220px)] gap-6 md:gap-4">
            {config.projects.map((project: Project, idx: number) => (
              <motion.div
                key={project.name}
                className="w-[calc(30%-0.25rem)] md:w-auto bg-white/50 overflow-hidden backdrop-blur-md rounded-lg transition duration-200 ease-in-out hover:bg-white hover:scale-105 hover:cursor-pointer"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 1,
                  delay: isMobile ? idx * 0.1 : idx * 0.4,
                }}
                onClick={(e) => handleProjectClick(e, project)}
              >
                <div className="pointer-events-none">
                  <img
                    className="w-full h-24 md:h-auto object-cover"
                    src={project.image}
                    alt={project.name}
                  />
                  <div className="p-2 md:p-4">
                    <h2 className="text-text font-medium text-sm md:text-xl m-0">
                      {project.name}
                    </h2>
                 
                    <div className="hidden md:flex gap-2 mb-auto items-end justify-end">
                      {project.techIcons?.map((techIcon: TechIcon, techIdx: number) => (
                        <img
                          key={techIdx} 
                          className="w-4 h-4" 
                          src={techIcon.icon}
                          alt={techIcon.name || `Tech ${techIdx + 1}`} 
                          title={techIcon.name} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* モーダル */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center pt-8 md:pt-16 p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{ position: 'fixed', top: -1200, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[100vh] overflow-y-auto shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* ヘッダー */}
              <div className="relative">
                <img
                  className="w-full h-48 md:h-75 object-cover rounded-t-2xl"
                  src={selectedProject.image}
                  alt={selectedProject.name}
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  type="button"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* コンテンツ */}
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-text md:mb-4">
                  {selectedProject.name}
                </h2>

                {/* 使用技術 */}
                <div className="mb-2 md:mb-6">
                  <h3 className="text-lg font-semibold text-text mb-3">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techIcons?.map((tech: TechIcon, techIdx: number) => (
                      <div 
                        key={techIdx}
                        className="flex items-center bg-white/50 rounded-full px-3 py-1.5 text-sm"
                      >
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-5 h-5 mr-2"
                        />
                        <span className="text-text font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* プロジェクト詳細 */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg font-bold text-text md:mb-3">プロジェクト詳細</h3>
                  <p className="text-text-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* こだわりポイント */}
                <div className="mb-4 md:mb-8">
                  <h3 className="text-lg font-semibold text-text md:mb-3">こだわりポイント</h3>
                  <p className="text-text-light leading-relaxed">
                    {selectedProject.point}
                  </p>
                </div>

                {/* アクションボタン */}
                <div className="flex gap-3 md:pt-4 border-t border-gray-200">
                  {selectedProject.repository && (
                    <button
                      onClick={() => openRepository(selectedProject.repository!)}
                      className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2 cursor-pointer"
                      type="button"
                    >
                      <ExternalLink className="w-4 h-4" />
                      リポジトリ
                    </button>
                  )}
                  <button
                    onClick={() => openProject(selectedProject.link)}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2 cursor-pointer"
                    type="button"
                  >
                    <ExternalLink className="w-4 h-4" />
                    プロジェクト
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}