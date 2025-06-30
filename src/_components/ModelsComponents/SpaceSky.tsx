import { Float, Stars } from "@react-three/drei";

export function SpaceSky() {
  return (
    <>
    <Float floatIntensity={0.1} >
        <Stars 
        radius={50} 
        depth={100} 
        count={100} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.05} 
      />
    </Float>
    </>
  );
}