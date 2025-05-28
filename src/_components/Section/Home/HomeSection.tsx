import SectionTitle from "../SectionTitle";
import { Float, PresentationControls } from "@react-three/drei";
import { useMobile } from "../../../hooks/useMobile";
export const HomeSection = () => {
  const { isMobile } = useMobile();
  return (
    <>
      {/* HOME  */}
   
      <Float floatIntensity={1.5} speed={3}>
        <PresentationControls>
          <SectionTitle
            size={isMobile ? 0.1 : 0.3}
            position-x={isMobile ? -0.6 : -1.8}
            position-y={isMobile ? 1.5 : 1.5}
          >
            Welcome to My Page
          </SectionTitle>
        </PresentationControls>
      </Float>
      <group>
        <PresentationControls>
          <SectionTitle
            position-x={isMobile ? -0.6 : -1.5}
            position-y={isMobile ? 1 : 0.5}
          >
            HOME
          </SectionTitle>
        </PresentationControls>
      </group>
    </>
  );
};
