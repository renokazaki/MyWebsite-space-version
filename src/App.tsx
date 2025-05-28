import { Canvas } from "@react-three/fiber";
import Experience from "./_components/Experience";
import { ScrollControls, Scroll, Float } from "@react-three/drei";
import { config } from "./config";
import Interface from "./_components/Section/InterFace";
import { MotionConfig } from "framer-motion";
import Menu from "./_components/Section/Menu";
import { Suspense } from "react";
import { Loading } from "./_components/Loading";
import {SpaceSky} from "./_components/ModelsComponents/SpaceSky";
import { Earth } from "./_components/ModelsComponents/Earth";

function App() {
  return (
    <>
      <Loading />
      <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
        <Float floatIntensity={1} speed={1}>
          <SpaceSky />
        </Float>
        <Earth position={[7, -1, -40]} scale={6} rotation={[0, -1, 0]}/>
        <ScrollControls
          pages={config.sections.length}
          damping={0.1}
          maxSpeed={0.2}
        >
          <group position-y={-1}>
            <Suspense>
              <Experience />
            </Suspense>
          </group>
          <Scroll html>
            <MotionConfig transition={{ duration: 1 }}>
              <Interface />
            </MotionConfig>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu />
    </>
  );
}

export default App;
