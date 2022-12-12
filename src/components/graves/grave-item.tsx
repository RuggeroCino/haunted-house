import { Euler, Vector3 } from '@react-three/fiber';
import React from 'react';
import { Texture } from 'three';

export interface IGraveItemProps {
    position: Vector3;
    rotation: Euler;
    textures: Record<string, Texture>;
};

export const GraveItem: React.FC<IGraveItemProps> = ({ position, rotation, textures }) => {
    return (
        <mesh position={position} rotation={rotation} castShadow={true}>
            <boxGeometry args={[0.6, 0.8, 0.2]} />
            <meshStandardMaterial {...textures} />
        </mesh>
    );
};
