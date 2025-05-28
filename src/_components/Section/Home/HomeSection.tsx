import SectionTitle from "../SectionTitle";
import { Cloud, Float, PresentationControls } from "@react-three/drei";
import { useMobile } from "../../../hooks/useMobile";
import Seagulls from "../../ModelsComponents/Seagulls";

export const HomeSection = () => {
  const { isMobile } = useMobile();
  return (
    <>
      {/* HOME */}
      {/* <Cloud
        position={[-7, 2, -10]}
        segments={30}
        speed={0.5}
        opacity={0.8} // opacityを上げる
        seed={2} // 形状の種（変更すると形が変わる）
      />
      <Cloud
        position={[-14, -5, 0]}
        segments={30}
        speed={0.5}
        opacity={0.7} // opacityを上げる
        seed={5} // 形状の種（変更すると形が変わる）
      /> */}
      <Float floatIntensity={1.5} speed={3}>
        <PresentationControls>
          <SectionTitle
            size={isMobile ? 0.1 : 0.3}
            position-x={isMobile ? -0.6 : -1.5}
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
        {/* <Seagulls position={[-20, -5, -15]} /> */}
      </group>
    </>
  );
};
