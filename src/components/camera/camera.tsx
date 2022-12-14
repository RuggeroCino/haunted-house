import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { useRef } from 'react';
import { PerspectiveCamera as PerspectiveCameraClass } from 'three';

export interface ICameraProps {};

export const Camera: React.FC<ICameraProps> = () => {
    const cameraRef = useRef<PerspectiveCameraClass>(null);

    return (
        <>
            <PerspectiveCamera position={[-3, 2, 5]} fov={95} near={0.1} far={100} makeDefault={true} ref={cameraRef} />
            <OrbitControls maxDistance={10} minDistance={4} maxPolarAngle={1.5} enablePan={false} />
        </>
    );
};
