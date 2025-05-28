import { Stars } from "@react-three/drei";

export function SpaceSky() {
  return (
    <>
      {/* 宇宙の星空背景 */}
      <Stars 
        radius={150} 
        depth={50} 
        count={800} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.05} 
      />
    </>
  );
}