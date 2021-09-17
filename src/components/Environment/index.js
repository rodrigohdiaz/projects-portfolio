import React from "react";
import { BackSide } from "three";

const Environment = () => {
  return (
    <mesh>
    
      <boxGeometry args={[3, 3, 15]} />
      <meshToonMaterial
        color={0xFF69B4}
      /> 
    </mesh>
  );
};

export default Environment
