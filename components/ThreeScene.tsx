import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function ThreeScene() {
    return (
        <div className="scene-container">
            <Canvas>
                <ambientLight intensity={0.7}></ambientLight>
                <TorusMesh />
            </Canvas>
        </div>
    );
}

function TorusMesh() {
    const torusRef = useRef<any>();

    useFrame(({ clock, camera }) => {
        if (torusRef.current) {
            torusRef.current.rotation.z = clock.elapsedTime;
        }
    });

    return (
        <mesh ref={torusRef}>
            <torusKnotGeometry args={[2.5, 1, 32, 10]} />
            <meshStandardMaterial color={0xc7a8c2} />
        </mesh>
    );
}
