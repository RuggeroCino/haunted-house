import { Vector3 } from '@react-three/fiber';
import React from 'react';

export interface IBushItemProps {
    scale: Vector3;
    position: Vector3;
};

export const BushItem: React.FC<IBushItemProps> = ({ scale, position }) => {
    return (
        <mesh scale={scale} position={position} castShadow={true}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#89c854" />
        </mesh>
    );
};
