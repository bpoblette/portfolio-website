import { useEffect, useRef } from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame((_, delta) => {
        birdRef.current.rotation.x += 0.15 * delta
    })
    return (
        <mesh
            position={[-5, 2, 1]}
            scale={[0.003, 0.003, 0.003]}
            ref={birdRef}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird
