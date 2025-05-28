import { Stars } from "@react-three/drei";

export function SpaceSky() {
  return (
    <>
      {/* 宇宙の星空背景 */}
      <Stars 
        radius={100} 
        depth={50} 
        count={500} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.1} 
      />
    </>
  );
}