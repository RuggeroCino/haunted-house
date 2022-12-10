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

export const Graves: React.FC<IGravesProps> = () => {
    return (
        <group>
            {[...Array(GRAVE_ITEMS).keys()].map((index) => (
                <GraveItem key={index} position={getGravePosition()} rotation={getGraveRotation()} />
            ))}
        </group>
    );
};
