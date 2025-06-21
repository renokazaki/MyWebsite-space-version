import {
  Environment,
  useScroll,
  Preload,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  HomeSection,
  ProfileSection,
  ProjectSection,
  ContactSection,
} from "./Section/index";
import { config } from "../config";
import { SpaceSky } from "./ModelsComponents/SpaceSky";
import { Saturn } from "./ModelsComponents/Saturn";

const SECTIONS_DISTANCE = 20;

//カメラ設定
const CAMERA_POSITIONS = [
  { position: [0, 20, 5], lookAt: [0, 20, 0] },
  { position: [-40, 20, 4], lookAt: [-65, 35, -SECTIONS_DISTANCE] },
  { position: [20, -10, 6], lookAt: [45, -10, -SECTIONS_DISTANCE * 2] },
  { position: [0, -30, 50], lookAt: [0, 0, -SECTIONS_DISTANCE * 3] },
];



export default function Experience() {
  const sceneContainer = useRef<THREE.Group | null>(null);
  const scrollData = useScroll();
  const { camera } = useThree();

  useEffect(() => {
    const handleHashChange = () => {
      const sectionIndex = config.sections.indexOf(
        window.location.hash.replace("#", "")
      );
      if (sectionIndex !== -1) {
        scrollData.el.scrollTo(
          0,
          (sectionIndex / (config.sections.length - 1)) *
            (scrollData.el.scrollHeight - scrollData.el.clientHeight)
        );
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useFrame(() => {
    // シーンの位置を更新
    if (sceneContainer.current) {
      sceneContainer.current.position.z = -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
    }

    //スムーズなカメラ移動のため
    
    // 現在のセクション計算
    const currentSection = scrollData.offset * (config.sections.length - 1);
    const sectionIndex = Math.floor(currentSection);
    const progress = currentSection - sectionIndex;

    const current = CAMERA_POSITIONS[sectionIndex] || CAMERA_POSITIONS[0];
    const next = CAMERA_POSITIONS[sectionIndex + 1] || current;

    // シンプルな補間
    camera.position.x = current.position[0] + (next.position[0] - current.position[0]) * progress;
    camera.position.y = current.position[1] + (next.position[1] - current.position[1]) * progress;
    camera.position.z = current.position[2] + (next.position[2] - current.position[2]) * progress;

    const lookAtX = current.lookAt[0] + (next.lookAt[0] - current.lookAt[0]) * progress;
    const lookAtY = current.lookAt[1] + (next.lookAt[1] - current.lookAt[1]) * progress;
    const lookAtZ = current.lookAt[2] + (next.lookAt[2] - current.lookAt[2]) * progress;

    camera.lookAt(lookAtX, lookAtY, lookAtZ);
    
  });

  return (
    <>
      <SpaceSky />
      <Environment preset="night" />
      <directionalLight position={[1, 1, 1]} intensity={4} />
      <ambientLight intensity={2} />
      <Saturn position={[60, 40, -200]} scale={40} rotation={[0, Math.PI / 2, 0]}/>
  3  {/* Section */}
      <group ref={sceneContainer}>
        <HomeSection />
        <ProjectSection SECTIONS_DISTANCE={SECTIONS_DISTANCE} />
        <ProfileSection SECTIONS_DISTANCE={SECTIONS_DISTANCE} />
        <ContactSection SECTIONS_DISTANCE={SECTIONS_DISTANCE} />
      </group>
      <Preload all />
    </>
  );
}