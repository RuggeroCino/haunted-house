import { Euler, Vector3 } from '@react-three/fiber';
import React from 'react';

export interface IGraveItemProps {
    position: Vector3;
    rotation: Euler;
};

export const GraveItem: React.FC<IGraveItemProps> = ({ position, rotation }) => {
    return (
        <mesh position={position} rotation={rotation} castShadow={true}>
            <boxGeometry args={[0.6, 0.8, 0.2]} />
            <meshStandardMaterial color="#b2b6b1" />
        </mesh>
    );
};
