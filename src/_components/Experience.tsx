import { Environment ,Float,useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { HomeSection, ProfileSection, ProjectSection, ContactSection } from "./Section/index";
import { config } from "../config";
import Star from "./ModelsComponents/Star";
import { Astronaut } from "./ModelsComponents/Astronaut";

const SECTIONS_DISTANCE = 10;


export default function Experience() {
  const sceneContainer = useRef<THREE.Group | null>(null);
  const scrollData = useScroll();

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
    if (sceneContainer.current) {
      sceneContainer.current.position.z =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
    }
  });
    return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <Float floatIntensity={1} speed={1}>
      <Astronaut scale={0.1} position={[0, 0, 0]} rotation={[0.5, 0, 0]}/>
      </Float>
        {/* <Star/> */}
        {/* Section */}
        <group ref={sceneContainer}>
       <HomeSection/>
       <ProjectSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
       <ProfileSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
       <ContactSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
      </group>
    </>
  );
};
