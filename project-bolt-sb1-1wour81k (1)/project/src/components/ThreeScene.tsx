import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

function ParticleField({ count = 100, spacing = 3 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spacing;
      const y = (Math.random() - 0.5) * spacing;
      const z = (Math.random() - 0.5) * spacing;
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count, spacing]);

  const pointsRef = useRef();
  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * Math.PI * 0.1;
      const y = (e.clientY / window.innerHeight - 0.5) * Math.PI * 0.1;
      api.start({ rotation: [y, x, 0] });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [api]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.001;
      pointsRef.current.rotation.y += 0.002;

      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const t = state.clock.elapsedTime;
        positions[i + 1] += Math.sin(t + positions[i] * 0.5) * 0.001;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <animated.group rotation={springs.rotation}>
      <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </animated.group>
  );
}

function ConnectionLines({ count = 50 }) {
  const linesRef = useRef();
  const positions = useMemo(() => {
    const points = [];
    for (let i = 0; i < count; i++) {
      const x1 = (Math.random() - 0.5) * 6;
      const y1 = (Math.random() - 0.5) * 6;
      const z1 = (Math.random() - 0.5) * 6;
      const x2 = x1 + (Math.random() - 0.5) * 2;
      const y2 = y1 + (Math.random() - 0.5) * 2;
      const z2 = z1 + (Math.random() - 0.5) * 2;
      points.push(new THREE.Vector3(x1, y1, z1));
      points.push(new THREE.Vector3(x2, y2, z2));
    }
    return points;
  }, [count]);

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(positions);
    return geometry;
  }, [positions]);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x += 0.0005;
      linesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <line ref={linesRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial
        attach="material"
        color="#4a90e2"
        transparent
        opacity={0.2}
        linewidth={1}
      />
    </line>
  );
}

const Scene = () => {
  return (
    <>
      <ParticleField count={200} spacing={8} />
      <ConnectionLines count={100} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
    </>
  );
};

const ThreeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  );
};

export default ThreeScene;