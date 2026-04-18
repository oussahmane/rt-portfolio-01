// AI_DISABLED - To re-enable the AI Assistant button, comment back in the following code:
/*
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { motion } from "framer-motion";

const Orb = ({ isHovered }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(time / 4) * 0.2;
    meshRef.current.rotation.y = Math.sin(time / 2) * 0.2;
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <Icosahedron args={[1, 15]} scale={isHovered ? 1.2 : 1}>
          <MeshDistortMaterial
            color={isHovered ? "#915eff" : "#f272c8"}
            attach='material'
            distort={0.3}
            speed={5}
            roughness={0}
          />
        </Icosahedron>
        <mesh scale={isHovered ? 1.4 : 1.2}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial 
            color='#915eff' 
            wireframe 
            transparent 
            opacity={0.3} 
          />
        </mesh>
      </mesh>
    </Float>
  );
};

const Icosahedron = ({ args, ...props }) => {
  return (
    <mesh {...props}>
      <icosahedronGeometry args={args} />
      {props.children}
    </mesh>
  );
};

const AIChatButton = ({ onClick, isOpen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='fixed bottom-8 right-8 w-20 h-20 cursor-pointer z-[100] drop-shadow-[0_0_15px_rgba(145,94,255,0.5)]'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className='w-full h-full relative'>
        <Canvas 
          camera={{ position: [0, 0, 3] }}
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[10, 10, 10]} />
          <Orb isHovered={hovered} />
        </Canvas>
        
        {hovered && !isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className='absolute top-1/2 right-[120%] -translate-y-1/2 bg-black-100/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 whitespace-nowrap text-sm text-white'
          >
            Ask AI Assistant
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AIChatButton;
*/

// Minimal dummy export
const AIChatButton = () => null;
export default AIChatButton;
