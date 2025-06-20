import SectionTitle from "../SectionTitle";
import {  Float } from "@react-three/drei";
import { useMobile } from "../../../hooks/useMobile";
import { SpaceSatelite } from "../../ModelsComponents/SpaceSatelite";
export const HomeSection = () => {
  const { isMobile } = useMobile();
  return (
    <>
      {/* HOME  */}
      <Float floatIntensity={1} speed={0.6}>
        <SpaceSatelite position={[5,25, -100]} scale={10} rotation={[0, -1, 0]} />
      </Float>
          <SectionTitle
            size={isMobile ? 0.1 : 2}
            position-x={isMobile ? -0.6 : -13}
            position-y={isMobile ? 1.5 : 20}
            position-z={isMobile ? 1 : -40}
          >
            Welcome to My Page
          </SectionTitle>
    </>
  );
};
