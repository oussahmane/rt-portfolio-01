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
    if (this.state.failed) return null;
    return this.props.children;
  }
}

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return Boolean(gl);
  } catch {
    return false;
  }
};

const streakMap = (() => {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  const mid = 32;

  for (let y = 0; y < 256; y += 1) {
    const t = y / 255;
    const fade = (1 - t) ** 1.55;
    const half = (1 - t) * 14 + 0.6;
    const shade = ctx.createLinearGradient(mid - half, y, mid + half, y);
    shade.addColorStop(0, "rgba(214,228,246,0)");
    shade.addColorStop(0.5, `rgba(255,255,255,${fade})`);
    shade.addColorStop(1, "rgba(214,228,246,0)");
    ctx.fillStyle = shade;
    ctx.fillRect(mid - half, y, half * 2, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
})();

const SLOPE = 0.55;
const STREAK_TILT = Math.atan2(1 / Math.hypot(1, SLOPE), -SLOPE / Math.hypot(1, SLOPE));

const ShootingStar = ({ delay = 800 }) => {
  const ref = useRef();
  const active = useRef(false);
  const spawnTime = useRef(Date.now() + delay);
  const speed = useRef(2.6);
  const length = useMemo(() => 1.45 + Math.random() * 0.7, []);

  useFrame((_, delta) => {
    if (!ref.current) return;

    if (!active.current) {
      if (Date.now() <= spawnTime.current) {
        ref.current.visible = false;
        return;
      }
      active.current = true;
      ref.current.visible = true;
      ref.current.position.set(2.5 + Math.random() * 4.5, 0.6 + Math.random() * 2.6, -5.5);
      speed.current = 2.2 + Math.random() * 1.1;
      return;
    }

    const move = speed.current * delta;
    ref.current.position.x -= move;
    ref.current.position.y -= move * SLOPE;
    if (ref.current.position.y < -4.4 || ref.current.position.x < -9) {
      active.current = false;
      ref.current.visible = false;
      spawnTime.current = Date.now() + 2500 + Math.random() * 4500;
    }
  });

  return (
    <group ref={ref} visible={false} rotation={[0, 0, STREAK_TILT]}>
      <mesh position={[0, -length / 2, 0]} frustumCulled={false}>
        <planeGeometry args={[0.16, length]} />
        <meshBasicMaterial
          map={streakMap}
          transparent
          depthWrite={false}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const StarField = ({ count, size = 0.05, animate = true }) => {
  const ref = useRef();
  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const radius = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      coords[i3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current || !animate) return;
    ref.current.rotation.y -= delta / 28;
  });

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#f4f7ff" size={size} sizeAttenuation depthWrite={false} opacity={0.95} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const reducedMotion = usePrefersReducedMotion();
  const mobile = useMediaQuery("(max-width: 768px)");
  const [hidden, setHidden] = useState(false);
  const [webgl] = useState(supportsWebGL);

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (!webgl) return null;

  return (
    <div className="no-print pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <CanvasBoundary>
        <Canvas
          key={mobile ? "mobile" : "desktop"}
          camera={{ position: [0, 0, 1], fov: mobile ? 75 : 68 }}
          dpr={mobile ? [1, 1.25] : [1, 1.5]}
          frameloop={hidden || reducedMotion ? "demand" : "always"}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: mobile ? "low-power" : "default",
          }}
        >
          <Suspense fallback={null}>
            <StarField
              count={mobile ? 1100 : 2000}
              size={mobile ? 0.055 : 0.06}
              animate={!reducedMotion}
            />
            <StarField
              count={mobile ? 70 : 120}
              size={mobile ? 0.11 : 0.13}
              animate={!reducedMotion}
            />
            {!reducedMotion && <ShootingStar delay={700} />}
            {!reducedMotion && <ShootingStar delay={mobile ? 4200 : 2200} />}
          </Suspense>
        </Canvas>
      </CanvasBoundary>
    </div>
  );
};

export default StarsCanvas;
