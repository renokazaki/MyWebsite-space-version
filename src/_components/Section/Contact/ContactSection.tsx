import SectionTitle from "../SectionTitle";
import { PresentationControls } from "@react-three/drei";
import { useMobile } from "../../../hooks/useMobile";


export const ContactSection = ({
  SECTIONS_DISTANCE,
}: {
  SECTIONS_DISTANCE: number;
}) => {
  const { isMobile } = useMobile();
  return (
    <>
      {/* CONTACT */}
      <group position-z={3 * SECTIONS_DISTANCE}>
        <PresentationControls>
          <SectionTitle
            position-x={isMobile ? -0.7 : -1}
            position-z={isMobile ? 1 : 1}
            position-y={isMobile ? 0 : 0}
            size={isMobile ? 0.2 : 0.3}
          >
            CONTACT
          </SectionTitle>
        </PresentationControls>


      </group>
    </>
  );
};
