import { useState, useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const ShootingStar = () => {
  const ref = useRef();
  
  const [length] = useState(() => Math.random() * 0.5 + 0.15);
  const [thickness] = useState(() => Math.random() * 0.002 + 0.001);
  
  const getRandomPos = () => [
    (Math.random() - 0.5) * 6, // x
    Math.random() * 5 + 3,     // y 
    (Math.random() - 0.5) * 3 - 1 // z
  ];

  const speed = useRef(Math.random() * 4 + 2);
  const active = useRef(false);
  const delay = useRef(Math.random() * 10000); // Up to 10 seconds initially
  const spawnTime = useRef(Date.now() + delay.current);
  
  useFrame((state, delta) => {
    if (!ref.current) return;
    
    if (!active.current) {
      if (Date.now() > spawnTime.current) {
        active.current = true;
        const [x, y, z] = getRandomPos();
        ref.current.position.set(x, y, z);
        speed.current = Math.random() * 5 + 3.0;
        ref.current.visible = true;
      } else {
        ref.current.visible = false;
      }
    } else {
      const move = speed.current * delta;
      ref.current.position.x -= move;
      ref.current.position.y -= move;
      
      if (ref.current.position.y < -3) {
        active.current = false;
        spawnTime.current = Date.now() + Math.random() * 5000 + 2000;
        ref.current.visible = false;
      }
    }
  });

  return (
    <mesh ref={ref} visible={false} rotation={[0, 0, 3 * Math.PI / 4]}>
      <cylinderGeometry args={[0, thickness, length, 4]} />
      <meshBasicMaterial color="#9fb8ff" transparent opacity={0.7} depthWrite={false} />
    </mesh>
  );
};

const ShootingStarsGroup = ({ count = 6 }) => {
  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <ShootingStar key={i} />
      ))}
    </group>
  );
};

const Galaxy = ({ 
  position = [1.8, 1.2, -4], 
  rotation = [0.4, 0.1, -0.2], 
  color = '#f272c8',
  scale = 1
}) => {
  const ref = useRef();

  const [positions] = useState(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const arms = 3;
    const radius = 2.5 * scale;
    const spin = 3.5;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 1.5) * radius;
      const armAngle = (i % arms) * ((Math.PI * 2) / arms);
      const spinAngle = r * spin;
      const scatter = 0.25;
      const randomX = (Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1)) * scatter * r;
      const randomY = (Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1)) * scatter * r;
      const randomZ = (Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1)) * scatter * r * 0.4;

      positions[i3] = Math.cos(armAngle + spinAngle) * r + randomX;
      positions[i3 + 1] = randomY; 
      positions[i3 + 2] = Math.sin(armAngle + spinAngle) * r + randomZ;
    }
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 30;
  });

  return (
    <group position={position} rotation={rotation}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={0.0025 * scale}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
};

const Constellation = () => {
  const { points, pairs } = useMemo(() => {
    const pts = [];
    const prs = [];
    let offset = 0;

    const constellations = [
      {
        name: "Ursa Major",
        scale: 1.2,
        center: [-6, 3, -4],
        stars: [
          [-1.5, 0.3, 0], [-0.8, 0.0, 0.1], [-0.2, -0.1, 0.0],
          [0.2, -0.3, -0.1], [0.4, -0.8, 0.0], [1.2, -0.7, 0.2], [1.0, 0.2, -0.1]
        ],
        lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,3]]
      },
      {
        name: "Orion",
        scale: 1.5,
        center: [5, 2, -6],
        stars: [
          [-0.5, 1.0, 0], [0.5, 0.8, 0.1], [-0.2, 0.0, 0], 
          [0.0, -0.1, -0.1], [0.2, -0.05, 0], [-0.4, -1.0, 0.2], [0.6, -0.9, -0.1]
        ],
        lines: [[0,2], [1,4], [2,3], [3,4], [2,5], [4,6], [0,1], [5,6]]
      },
      {
        name: "Ursa Minor",
        scale: 1.0,
        center: [-2, 5, -5],
        stars: [
          [1.5, 1.0, 0], [0.8, 0.6, 0.1], [0.3, 0.2, 0], 
          [0.0, -0.2, -0.1], [-0.5, 0.0, 0], [-0.8, -0.5, 0.2], [-0.2, -0.7, -0.1]
        ],
        lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,3]]
      },
      {
        name: "Cassiopeia",
        scale: 1.2,
        center: [3, 6, -5],
        stars: [
          [-1.0, 0.5, 0], [-0.5, -0.2, 0.2], [0.0, 0.3, -0.1], 
          [0.5, -0.5, 0.0], [1.0, 0.2, 0.1]
        ],
        lines: [[0,1], [1,2], [2,3], [3,4]]
      },
      {
        name: "Scorpius",
        scale: 1.2,
        center: [7, -3, -6],
        stars: [
          [0.5, 1.0, 0], [0.2, 0.8, 0.1], [-0.1, 0.7, 0], 
          [0.1, 0.2, -0.1], [0.0, -0.3, 0], [-0.1, -0.8, 0.1], 
          [-0.4, -1.2, 0], [-0.8, -1.3, -0.1], [-1.2, -1.0, 0], [-1.0, -0.6, 0.1]
        ],
        lines: [[0,1], [1,2], [1,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9]]
      },
      {
        name: "Cygnus",
        scale: 1.3,
        center: [-6, -2, -5],
        stars: [
          [0.0, 1.0, 0], [0.0, 0.0, 0.1], [0.0, -1.5, -0.1], 
          [-0.8, 0.2, 0], [-1.5, 0.4, 0.1], [0.8, 0.2, 0], [1.5, 0.4, -0.1]
        ],
        lines: [[0,1], [1,2], [1,3], [3,4], [1,5], [5,6]]
      },
      {
        name: "Andromeda",
        scale: 1.2,
        center: [-1, -5, -5],
        stars: [
          [1.0, -0.5, 0], [0.0, 0.0, 0.1], [-1.0, 0.5, -0.1], 
          [0.2, 0.6, 0], [0.3, 1.0, 0.1]
        ],
        lines: [[0,1], [1,2], [1,3], [3,4]]
      },
      {
        name: "Crux",
        scale: 0.8,
        center: [3, -6, -4],
        stars: [
          [0.0, 1.0, 0], [0.0, -1.0, 0.1], [-0.8, 0.2, 0], 
          [0.6, 0.4, -0.1], [0.4, -0.2, 0]
        ],
        lines: [[0,1], [2,3]]
      }
    ];

    constellations.forEach(c => {
       c.stars.forEach(s => {
          const anchor = new THREE.Vector3(
             c.center[0] + s[0] * c.scale,
             c.center[1] + s[1] * c.scale,
             c.center[2] + s[2] * c.scale
          );
          pts.push({ anchor: anchor.clone(), pos: anchor.clone() });
       });
       c.lines.forEach(l => {
          prs.push([offset + l[0], offset + l[1]]);
       });
       offset += c.stars.length;
    });

    return { points: pts, pairs: prs };
  }, []);

  const pointCount = points.length;
  const lineCount = pairs.length;
  const maxLines = lineCount + pointCount;

  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const pointPositions = useMemo(() => new Float32Array(pointCount * 3), [pointCount]);

  const groupRef = useRef();
  const linesGeoRef = useRef();
  const pointsGeoRef = useRef();
  const mouse = useRef(new THREE.Vector2(9999, 9999));
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleMouseLeave = () => {
      mouse.current.x = 9999;
      mouse.current.y = 9999;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  useFrame((state, delta) => {
    const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5);
    vector.unproject(state.camera);
    const dir = vector.sub(state.camera.position).normalize();
    
    // Project ray to average constellation depth (Z = -5)
    const distanceToTargetZ = (-5 - state.camera.position.z) / (dir.z === 0 ? -0.0001 : dir.z); 
    const mouse3D = state.camera.position.clone().add(dir.multiplyScalar(distanceToTargetZ));

    // Crucial: Convert mouse3D from world coordinates to the group's local coordinate space
    if (groupRef.current) {
        groupRef.current.worldToLocal(mouse3D);
    }

    let lineIndex = 0;

    // 1. Draw static constellation lines
    for (let i = 0; i < lineCount; i++) {
       const p1 = points[pairs[i][0]];
       const p2 = points[pairs[i][1]];
       
       linePositions[lineIndex++] = p1.pos.x;
       linePositions[lineIndex++] = p1.pos.y;
       linePositions[lineIndex++] = p1.pos.z;
       
       linePositions[lineIndex++] = p2.pos.x;
       linePositions[lineIndex++] = p2.pos.y;
       linePositions[lineIndex++] = p2.pos.z;
    }

    const mouseHoverRadius = 3.5;

    // 2. Draw hover lines and distortions
    for (let i = 0; i < pointCount; i++) {
       const p = points[i];
       let targetPos = p.anchor.clone();

       if (mouse.current.x !== 9999) {
          const distToMouse = p.anchor.distanceTo(mouse3D);
          if (distToMouse < mouseHoverRadius && distToMouse > 0.01) {
             const pullStrength = 1 - (distToMouse / mouseHoverRadius); 
             // Normalize to safely cap maximum displacement to 2.0 units
             const pullVec = mouse3D.clone().sub(p.anchor).normalize().multiplyScalar(pullStrength * 2.0); 
             targetPos.add(pullVec);

             // Draw dynamic line to cursor like typical JS node effect
             linePositions[lineIndex++] = p.pos.x;
             linePositions[lineIndex++] = p.pos.y;
             linePositions[lineIndex++] = p.pos.z;
             
             linePositions[lineIndex++] = mouse3D.x;
             linePositions[lineIndex++] = mouse3D.y;
             linePositions[lineIndex++] = mouse3D.z;
          }
       }

       p.pos.lerp(targetPos, 0.08);

       pointPositions[i*3] = p.pos.x;
       pointPositions[i*3+1] = p.pos.y;
       pointPositions[i*3+2] = p.pos.z;
    }

    if (linesGeoRef.current && linesGeoRef.current.attributes.position) {
        linesGeoRef.current.setDrawRange(0, lineIndex / 3);
        linesGeoRef.current.attributes.position.needsUpdate = true;
    }
    if (pointsGeoRef.current && pointsGeoRef.current.attributes.position) {
        pointsGeoRef.current.attributes.position.needsUpdate = true;
    }

    if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.01;
        groupRef.current.rotation.x += delta * 0.005;
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry ref={pointsGeoRef}>
            <bufferAttribute
                attach="attributes-position"
                count={pointCount}
                array={pointPositions}
                itemSize={3}
            />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.025} transparent opacity={0.6} depthWrite={false} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry ref={linesGeoRef}>
            <bufferAttribute
                attach="attributes-position"
                count={maxLines * 2}
                array={linePositions}
                itemSize={3}
            />
        </bufferGeometry>
        <lineBasicMaterial color="#9fb8ff" transparent opacity={0.3} depthWrite={false} />
      </lineSegments>
    </group>
  );
};

const Stars = (props) => {
  const ref = useRef();
  
  const [sphere] = useState(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      const r = 1.2 * Math.pow(Math.random(), 1/3);
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      points[i3] = r * Math.sin(phi) * Math.cos(theta);
      points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i3 + 2] = r * Math.cos(phi);
    }
    return points;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-full fixed inset-0 z-[-1] pointer-events-none bg-primary'>
      <Canvas 
        camera={{ position: [0, 0, 1], fov: window.innerWidth < 640 ? 100 : 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Stars />
          <Galaxy />
          {/* Top view galaxy (facing camera exactly) */}
          <Galaxy 
            position={[-4.5, 2.5, -8]} 
            rotation={[Math.PI / 2, 0, 0]} 
            color="#5b6cf9" 
            scale={0.8} 
          />
          {/* Distant background galaxy (same tilt as original) */}
          <Galaxy 
            position={[5.5, -2.5, -10]} 
            rotation={[0.4, 0.1, -0.2]} 
            color="#ff9f5a" 
            scale={1.2} 
          />
          <Constellation />
          <ShootingStarsGroup />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
