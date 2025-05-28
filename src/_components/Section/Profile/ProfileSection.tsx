import SectionTitle from "../SectionTitle";
import { useMobile } from "../../../hooks/useMobile";
import { Cloud, PresentationControls } from "@react-three/drei";
import { Balloon } from "../../ModelsComponents/Balloon";
import * as THREE from "three";

export const ProfileSection = ({
  SECTIONS_DISTANCE,
}: {
  SECTIONS_DISTANCE: number;
}) => {
  const { isMobile } = useMobile();
  return (
    <>
      {/* Profile */}
      {/* <Cloud
        position={[8, 0, 0]}
        segments={10}
        speed={1}
        opacity={0.7} // opacityを上げる
        seed={10}
      /> */}
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
          <group position={[0, 1, -6]} scale={2.5}>
            {/* <PresentationControls>
              <Balloon
                color={new THREE.Color("red")}
                position-x={-0.2}
                position-z={0.3}
              />
              <Balloon
                color={new THREE.Color("blue")}
                position-x={0}
                position-y={0.3}
              />
              <Balloon
                color={new THREE.Color("green")}
                position-x={0.1}
                position-y={-0.1}
              />
              <Balloon
                color={new THREE.Color("yellow")}
                position-x={-0.4}
                position-y={0.3}
                position-z={-0.3}
              />
            </PresentationControls> */}
          </group>
        </group>
      </group>
    </>
  );
};
