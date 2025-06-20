import { Float } from "@react-three/drei";
import { Earth } from "../../ModelsComponents/Earth";
export const ProjectSection = ({
  SECTIONS_DISTANCE,
}: {
  SECTIONS_DISTANCE: number;
}) => {
  return (
    <>
      {/* PROJECTS */}
      <group position-z={SECTIONS_DISTANCE - 2.5}>
        <group position-x={1.5}>
          <group
            position-x={0.5}
            position-z={0}
            rotation-y={-Math.PI / 6}
            scale={0.8}
          >
              <Float floatIntensity={1} speed={0.3}>
                <Earth
                  position={[-150, 20, -40]}
                  scale={50}
                  rotation={[0, -1, 0]}
                />
              </Float>
          </group>
        </group>
      </group>
    </>
  );
};
