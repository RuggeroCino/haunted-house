import { useTexture } from '@react-three/drei';
import { Euler, Vector3 } from '@react-three/fiber';
import React from 'react';
import { GraveItem } from './grave-item';

export interface IGravesProps {};

const GRAVE_ITEMS = 50;

const getGravePosition = (): Vector3 => {
    const angle = Math.random() * Math.PI * 2; // Random angle
    const radius = 3 + Math.random() * 6; // Random radius

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    return [x, 0.3, z];
}

const getGraveRotation = (): Euler => {
    const y = (Math.random() - 0.5) * 0.4;
    const z = (Math.random() - 0.5) * 0.4;

    return [0, y, z];
}

const gravePositions = [...Array(GRAVE_ITEMS)].map(getGravePosition);
const graveRotations = [...Array(GRAVE_ITEMS)].map(getGraveRotation);

export const Graves: React.FC<IGravesProps> = () => {
    const roofTextures = useTexture({
        map: 'images/textures/rock/color.jpg',
        aoMap: 'images/textures/rock/ambientOcclusion.jpg',
        normalMap: 'images/textures/rock/normal.jpg',
        roughnessMap: 'images/textures/rock/roughness.jpg',
    });

    return (
        <group>
            {[...Array(GRAVE_ITEMS).keys()].map((index) => (
                <GraveItem key={index} position={gravePositions[index]} rotation={graveRotations[index]} textures={roofTextures} />
            ))}
        </group>
    );
};
