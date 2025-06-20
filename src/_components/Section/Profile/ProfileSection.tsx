import { Float } from "@react-three/drei";
import { Asteroid } from "../../ModelsComponents/Asteroid";

export const ProfileSection = ({
  SECTIONS_DISTANCE,
}: {
  SECTIONS_DISTANCE: number;
}) => {
  return (
    <>
      {/* Profile */}

      <group position-z={2 * SECTIONS_DISTANCE - 2.5}>
        <group position-x={-2}>
     
          <Float floatIntensity={1} speed={0.6}>
            <Asteroid position={[35,-10,-20]} scale={1.5}/>
          </Float>
          </group>
      </group>
    </>
  );
};
