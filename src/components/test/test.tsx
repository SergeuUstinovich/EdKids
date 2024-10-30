import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Group, Object3DEventMap } from 'three';
import model3d from '../../assets/robot.glb'

interface ModelProps {
    url: string
}

const Model = ({ url }: ModelProps) => {
  const [model, setModel] = useState<Group<Object3DEventMap>>();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      setModel(gltf.scene);
    });
  }, [url]);

  return model ? <primitive object={model} /> : null;
};

const Test = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <Model url={model3d} />
      <OrbitControls />
    </Canvas>
  );
};

export default Test;
