import { Vector3 } from '@react-three/fiber';
import React from 'react';
import { Texture } from 'three';

export interface IBushItemProps {
    scale: Vector3;
    position: Vector3;
    textures: Record<string, Texture>;
};

export const BushItem: React.FC<IBushItemProps> = ({ scale, position, textures }) => {
    return (
        <mesh scale={scale} position={position} castShadow={true}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial {...textures} displacementScale={0.2} />
        </mesh>
    );
};
