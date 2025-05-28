import { Text3D } from "@react-three/drei";


interface SectionTitleProps {
  children: string;
  size?: number;
  "position-x"?: number;
  "position-z"?: number;
  "rotation-y"?: number;
  bevelEnabled?: boolean;
  bevelThickness?: number;
  
}

export default function SectionTitle({ children, ...props }: SectionTitleProps) {
  return (
    <Text3D font={"fonts/Inter_Bold.json"} size={props.size || 0.3} {...props}>
      {children}
      <meshStandardMaterial color="gray" />
    </Text3D>
  );
};
