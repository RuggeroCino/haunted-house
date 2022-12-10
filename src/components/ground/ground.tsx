import { useTexture } from '@react-three/drei';
import React, { useLayoutEffect, useRef } from 'react';
import { PlaneGeometry, RepeatWrapping, Vector2 } from 'three';
import { geometryUtils } from '../../utils';

export interface IGroundProps {};

export const Ground: React.FC<IGroundProps> = () => {
    const groundRef = useRef<PlaneGeometry>(null);

    useLayoutEffect(() => {
        if (groundRef.current) {
            geometryUtils.applyUv2Attribute(groundRef.current)
        }
    })

    const groundTextures = useTexture({
        map: 'images/textures/grass/color.jpg',
        aoMap: 'images/textures/grass/ambientOcclusion.jpg',
        normalMap: 'images/textures/grass/normal.jpg',
        roughnessMap: 'images/textures/grass/roughness.jpg',
    });

    groundTextures.map.repeat = new Vector2(8, 8);
    groundTextures.map.wrapT = RepeatWrapping;
    groundTextures.map.wrapS = RepeatWrapping;

    groundTextures.aoMap.repeat = new Vector2(8, 8);
    groundTextures.aoMap.wrapT = RepeatWrapping;
    groundTextures.aoMap.wrapS = RepeatWrapping;

    groundTextures.normalMap.repeat = new Vector2(8, 8);
    groundTextures.normalMap.wrapT = RepeatWrapping;
    groundTextures.normalMap.wrapS = RepeatWrapping;

    groundTextures.roughnessMap.repeat = new Vector2(8, 8);
    groundTextures.roughnessMap.wrapT = RepeatWrapping;
    groundTextures.roughnessMap.wrapS = RepeatWrapping;

    return (
        <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, 0]} receiveShadow={true}>
            <planeGeometry args={[80, 80]} ref={groundRef} />
            <meshStandardMaterial {...groundTextures} />
        </mesh>
    );
};
