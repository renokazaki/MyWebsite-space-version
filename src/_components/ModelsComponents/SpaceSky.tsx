import { Float, Stars } from "@react-three/drei";

export function SpaceSky() {
  return (
    <>
    <Float floatIntensity={1} >
        <Stars 
        radius={300} 
        depth={100} 
        count={800} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.05} 
      />
    </Float>
    </>
  );
}