
import { Astronaut } from "../../ModelsComponents/Astronaut";


export const ContactSection = ({
  SECTIONS_DISTANCE,
}: {
  SECTIONS_DISTANCE: number;
}) => {
  return (
    <>
      {/* CONTACT */}
      <group position-z={3 * SECTIONS_DISTANCE}>
<Astronaut position={[0,-30,40]} scale={1}/>

      </group>
    </>
  );
};
