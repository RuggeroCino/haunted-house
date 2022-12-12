import { useTexture } from '@react-three/drei';
import React, { useLayoutEffect, useRef } from 'react';
import { BoxGeometry, ConeGeometry, PlaneGeometry } from 'three';
import { geometryUtils } from '../../utils';

export interface IHouseProps {};

const measures = {
    wall: { height: 2.5 },
    roof: { height: 2 },
}

export const House: React.FC<IHouseProps> = () => {
    const { wall, roof } = measures;

    const wallRef = useRef<BoxGeometry>(null);
    const doorRef = useRef<PlaneGeometry>(null);
    const roofRef = useRef<ConeGeometry>(null);

    useLayoutEffect(() => {
        geometryUtils.applyUv2Attribute(doorRef.current);
        geometryUtils.applyUv2Attribute(wallRef.current);
        geometryUtils.applyUv2Attribute(roofRef.current)
    }, []);

    const roofTextures = useTexture({
        map: 'images/textures/terracotta/color.jpg',
        aoMap: 'images/textures/terracotta/ambientOcclusion.jpg',
        normalMap: 'images/textures/terracotta/normal.jpg',
        roughnessMap: 'images/textures/terracotta/roughness.jpg',
    })

    const doorTextures = useTexture({
        map: 'images/textures/door/color.jpg',
        alphaMap: 'images/textures/door/alpha.jpg',
        aoMap: 'images/textures/door/ambientOcclusion.jpg',
        displacementMap: 'images/textures/door/height.jpg',
        normalMap: 'images/textures/door/normal.jpg',
        metalnessMap: 'images/textures/door/metalness.jpg',
        roughnessMap: 'images/textures/door/roughness.jpg',
    });

    const wallTextures = useTexture({
        map: 'images/textures/bricks/color.jpg',
        aoMap: 'images/textures/bricks/ambientOcclusion.jpg',
        normalMap: 'images/textures/bricks/normal.jpg',
        roughnessMap: 'images/textures/bricks/roughness.jpg',
    });

    return (
        <group>
            {/* Walls */}
            <mesh position={[0, 1.25, 0]} castShadow={true}>
                <boxGeometry args={[4, wall.height, 4]} ref={wallRef} />
                <meshStandardMaterial {...wallTextures} />
            </mesh>
            {/* Roof */}
            <mesh position={[0, wall.height + (roof.height / 2), 0]} rotation={[0, Math.PI * 0.25, 0]} castShadow={true}>
                <coneGeometry args={[3.5, roof.height, 4]} ref={roofRef} />
                <meshStandardMaterial {...roofTextures} />
            </mesh>
            {/* Door */}
            <mesh position={[0, 1, 2 + 0.01]}>
                <planeGeometry args={[2.2, 2.2, 100, 100]} ref={doorRef} />
                <meshStandardMaterial {...doorTextures} transparent={true} displacementScale={0.1} />
            </mesh>
        </group>
    );
};
