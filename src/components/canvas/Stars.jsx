import { Component, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery, usePrefersReducedMotion } from "../../utils/useMediaQuery";

class CanvasBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <div className="galaxy-fallback" aria-hidden="true" />;
    return this.props.children;
  }
}

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

const ShootingStar = () => {
  const ref = useRef();
  const speed = useRef(2.2);
  const active = useRef(false);
  const spawnTime = useRef(Date.now() + Math.random() * 12000);
  const length = useMemo(() => Math.random() * 0.35 + 0.12, []);
  const thickness = useMemo(() => Math.random() * 0.0015 + 0.0008, []);

  useFrame((_, delta) => {
    if (!ref.current) return;

    if (!active.current) {
      if (Date.now() <= spawnTime.current) {
        ref.current.visible = false;
        return;
      }
      active.current = true;
      ref.current.position.set((Math.random() - 0.5) * 6, Math.random() * 4 + 2.5, (Math.random() - 0.5) * 2 - 1);
      ref.current.visible = true;
      speed.current = Math.random() * 1.6 + 1.4;
      return;
    }

    const move = speed.current * delta;
    ref.current.position.x -= move;
    ref.current.position.y -= move * 0.85;
    if (ref.current.position.y < -3) {
      active.current = false;
      ref.current.visible = false;
      spawnTime.current = Date.now() + Math.random() * 9000 + 4000;
    }
  });

  return (
    <mesh ref={ref} visible={false} rotation={[0, 0, Math.PI / 4]}>
      <cylinderGeometry args={[0, thickness, length, 4]} />
      <meshBasicMaterial color="#dbe7ff" transparent opacity={0.45} depthWrite={false} />
    </mesh>
  );
};

const Galaxy = ({ position, rotation, color, scale = 1, count = 1800 }) => {
  const ref = useRef();
  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    const arms = 3;
    const radius = 2.4 * scale;
    const spin = 3.2;

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const distance = Math.pow(Math.random(), 1.5) * radius;
      const armAngle = (i % arms) * ((Math.PI * 2) / arms);
      const spinAngle = distance * spin;
      const scatter = 0.18 * distance;
      const random = () => (Math.random() < 0.5 ? -1 : 1) * Math.random() * scatter;

      coords[i3] = Math.cos(armAngle + spinAngle) * distance + random();
      coords[i3 + 1] = random() * 0.35;
      coords[i3 + 2] = Math.sin(armAngle + spinAngle) * distance + random();
    }

    return coords;
  }, [count, scale]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta / 45;
  });

  return (
    <group position={position} rotation={rotation}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={0.0034 * scale}
          sizeAttenuation
          depthWrite={false}
          opacity={0.72}
        />
      </Points>
    </group>
  );
};

const constellationData = [
  {
    scale: 1.1,
    center: [-6, 3, -4],
    stars: [
      [-1.5, 0.3, 0], [-0.8, 0, 0.1], [-0.2, -0.1, 0],
      [0.2, -0.3, -0.1], [0.4, -0.8, 0], [1.2, -0.7, 0.2], [1, 0.2, -0.1],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]],
  },
  {
    scale: 1.3,
    center: [5, 2, -6],
    stars: [
      [-0.5, 1, 0], [0.5, 0.8, 0.1], [-0.2, 0, 0],
      [0, -0.1, -0.1], [0.2, -0.05, 0], [-0.4, -1, 0.2], [0.6, -0.9, -0.1],
    ],
    lines: [[0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6], [0, 1], [5, 6]],
  },
  {
    scale: 0.9,
    center: [-2, 4.5, -5],
    stars: [
      [1.2, 0.8, 0], [0.6, 0.4, 0.1], [0.2, 0.1, 0],
      [0, -0.2, -0.1], [-0.4, 0, 0], [-0.7, -0.4, 0.1],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
  },
];

const Constellation = ({ interactive }) => {
  const groupRef = useRef();
  const linesRef = useRef();
  const pointsRef = useRef();
  const mouse = useRef(new THREE.Vector2(9999, 9999));
  const ndc = useRef(new THREE.Vector3());
  const rayDir = useRef(new THREE.Vector3());
  const mousePoint = useRef(new THREE.Vector3());
  const target = useRef(new THREE.Vector3());
  const pull = useRef(new THREE.Vector3());

  const { points, pairs } = useMemo(() => {
    const nextPoints = [];
    const nextPairs = [];
    let offset = 0;

    constellationData.forEach((item) => {
      item.stars.forEach((star) => {
        const anchor = new THREE.Vector3(
          item.center[0] + star[0] * item.scale,
          item.center[1] + star[1] * item.scale,
          item.center[2] + star[2] * item.scale
        );
        nextPoints.push({ anchor, pos: anchor.clone() });
      });
      item.lines.forEach(([from, to]) => nextPairs.push([offset + from, offset + to]));
      offset += item.stars.length;
    });

    return { points: nextPoints, pairs: nextPairs };
  }, []);

  const linePositions = useMemo(
    () => new Float32Array((pairs.length + points.length) * 6),
    [pairs.length, points.length]
  );
  const pointPositions = useMemo(() => new Float32Array(points.length * 3), [points.length]);

  useEffect(() => {
    if (!interactive) return undefined;

    const onMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    const onLeave = () => {
      mouse.current.set(9999, 9999);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [interactive]);

  useFrame((state, delta) => {
    let lineIndex = 0;

    pairs.forEach(([from, to]) => {
      const start = points[from].pos;
      const end = points[to].pos;
      linePositions[lineIndex] = start.x;
      linePositions[lineIndex + 1] = start.y;
      linePositions[lineIndex + 2] = start.z;
      linePositions[lineIndex + 3] = end.x;
      linePositions[lineIndex + 4] = end.y;
      linePositions[lineIndex + 5] = end.z;
      lineIndex += 6;
    });

    const pointerActive = interactive && mouse.current.x !== 9999;
    if (pointerActive) {
      ndc.current.set(mouse.current.x, mouse.current.y, 0.5).unproject(state.camera);
      rayDir.current.copy(ndc.current).sub(state.camera.position);
      const length = rayDir.current.length() || 1;
      rayDir.current.multiplyScalar(1 / length);
      const dirZ = rayDir.current.z === 0 ? -0.0001 : rayDir.current.z;
      const distance = (-5 - state.camera.position.z) / dirZ;
      mousePoint.current.copy(state.camera.position).addScaledVector(rayDir.current, distance);
      if (groupRef.current) groupRef.current.worldToLocal(mousePoint.current);
    }

    points.forEach((point, index) => {
      target.current.copy(point.anchor);
      if (pointerActive) {
        const dist = point.anchor.distanceTo(mousePoint.current);
        if (dist < 2.2 && dist > 0.01) {
          pull.current
            .copy(mousePoint.current)
            .sub(point.anchor)
            .multiplyScalar((1 - dist / 2.2) * 0.35);
          target.current.add(pull.current);
          linePositions[lineIndex] = point.pos.x;
          linePositions[lineIndex + 1] = point.pos.y;
          linePositions[lineIndex + 2] = point.pos.z;
          linePositions[lineIndex + 3] = mousePoint.current.x;
          linePositions[lineIndex + 4] = mousePoint.current.y;
          linePositions[lineIndex + 5] = mousePoint.current.z;
          lineIndex += 6;
        }
      }

      point.pos.lerp(target.current, 0.08);
      pointPositions[index * 3] = point.pos.x;
      pointPositions[index * 3 + 1] = point.pos.y;
      pointPositions[index * 3 + 2] = point.pos.z;
    });

    if (linesRef.current?.attributes?.position) {
      linesRef.current.setDrawRange(0, lineIndex / 3);
      linesRef.current.attributes.position.needsUpdate = true;
    }
    if (pointsRef.current?.attributes?.position) pointsRef.current.attributes.position.needsUpdate = true;
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.008;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry ref={pointsRef}>
          <bufferAttribute attach="attributes-position" count={points.length} array={pointPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#f4f7ff" size={0.018} transparent opacity={0.45} depthWrite={false} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry ref={linesRef}>
          <bufferAttribute
            attach="attributes-position"
            count={(pairs.length + points.length) * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#b7c9e4" transparent opacity={0.22} depthWrite={false} />
      </lineSegments>
    </group>
  );
};

const StarField = ({ count }) => {
  const ref = useRef();
  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const radius = 1.15 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      coords[i3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta / 28;
  });

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial transparent color="#e7eef8" size={0.0026} sizeAttenuation depthWrite={false} opacity={0.85} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const reducedMotion = usePrefersReducedMotion();
  const mobile = useMediaQuery("(max-width: 768px)");
  const finePointer = useMediaQuery("(pointer: fine)");
  const [hidden, setHidden] = useState(false);
  const [webgl] = useState(supportsWebGL);

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (reducedMotion || !webgl) {
    return <div className="galaxy-fallback no-print" aria-hidden="true" />;
  }

  return (
    <div className="no-print pointer-events-none fixed inset-0 z-[-1] bg-primary" aria-hidden="true">
      <CanvasBoundary>
        <Canvas
          camera={{ position: [0, 0, 1], fov: mobile ? 82 : 68 }}
          dpr={mobile ? [1, 1.15] : [1, 1.35]}
          frameloop={hidden ? "never" : "always"}
          gl={{
            antialias: !mobile,
            alpha: true,
            powerPreference: mobile ? "low-power" : "default",
          }}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <StarField count={mobile ? 1200 : 2200} />
            <Galaxy position={[1.6, 0.8, -4.2]} rotation={[0.45, 0.15, -0.25]} color="#b7a6f0" count={mobile ? 1000 : 1800} />
            {!mobile && (
              <Galaxy position={[-4.2, 2.2, -8]} rotation={[Math.PI / 2, 0, 0.2]} color="#8fd0ea" scale={0.75} count={1200} />
            )}
            {!mobile && (
              <Galaxy position={[5.2, -2.2, -10]} rotation={[0.35, 0.1, -0.15]} color="#7f92e8" scale={1.05} count={1000} />
            )}
            {!mobile && <Constellation interactive={finePointer} />}
            {!mobile && (
              <group>
                <ShootingStar />
                <ShootingStar />
              </group>
            )}
          </Suspense>
        </Canvas>
      </CanvasBoundary>
    </div>
  );
};

export default StarsCanvas;
