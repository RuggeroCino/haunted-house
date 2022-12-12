import { useFrame } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react';
import { DirectionalLight, PointLight } from 'three';
import { geometryUtils } from '../../utils';

export interface ILightsProps {};

export const Lights: React.FC<ILightsProps> = () => {
    const directionalLightRef = useRef<DirectionalLight>(null);
    const doorLightRef = useRef<PointLight>(null);

    useLayoutEffect(() => {
        geometryUtils.setLightFar(directionalLightRef.current, 15);
        geometryUtils.setLightFar(doorLightRef.current, 7);
    }, []);

    useFrame((state) => {
        if (doorLightRef.current) {
            doorLightRef.current.intensity = Math.sin(state.clock.elapsedTime) + 2;
        }
    });

    return (
        <>
            {/* Ambient light */}
            <ambientLight intensity={0.08} color="white" />
            {/* Moon light */}
            <directionalLight color="white" intensity={0.10} position={[4, 5, -2]} castShadow={true} shadow-mapSize={[256, 256]} ref={directionalLightRef} />
            {/* Door light light */}
            <pointLight color="#ff7d46" intensity={1} distance={7} position={[0, 2.2, 2.7]} castShadow={true} shadow-mapSize={[256, 256]} ref={doorLightRef} />
        </>
    )
};
