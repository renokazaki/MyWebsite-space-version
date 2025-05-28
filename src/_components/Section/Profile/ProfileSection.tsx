import SectionTitle from "../SectionTitle";
import { useMobile } from "../../../hooks/useMobile";
import { Float, PresentationControls } from "@react-three/drei";
import { SpaceSatelite } from "../../ModelsComponents/SpaceSatelite";

export const ProfileSection = ({
  SECTIONS_DISTANCE,
}: {
  SECTIONS_DISTANCE: number;
}) => {
  const { isMobile } = useMobile();
  return (
    <>
      {/* Profile */}

      <group position-z={2 * SECTIONS_DISTANCE - 2.5}>
        <group position-x={-2}>
          <PresentationControls>
            <SectionTitle
              position-x={isMobile ? 1.3 : 0}
              position-y={isMobile ? 0 : 0.5}
              rotation-y={isMobile ? 0 : Math.PI / 6}
            >
              PROFILE
            </SectionTitle>
          </PresentationControls>
          <PresentationControls>
          <Float floatIntensity={1} speed={0.6}>
            <SpaceSatelite scale={1.5} position={[-1,1,1]} rotation={[0,Math.PI/1.5,0]}/>
          </Float>
          </PresentationControls>
          </group>
      </group>
    </>
  );
};
