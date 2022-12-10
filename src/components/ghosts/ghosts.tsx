import { useFrame } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react';
import { PointLight } from 'three';
import { geometryUtils } from '../../utils';

export interface IGhostsProps {};;

export const Ghosts: React.FC<IGhostsProps> = () => {
    const ghost1 = useRef<PointLight>(null);
    const ghost2 = useRef<PointLight>(null);
    const ghost3 = useRef<PointLight>(null);

    useLayoutEffect(() => {
        geometryUtils.setLightFar(ghost1.current, 7);
        geometryUtils.setLightFar(ghost2.current, 7);
        geometryUtils.setLightFar(ghost3.current, 7);
    }, [])

    useFrame((state) => {
        const { elapsedTime } = state.clock;

        if (ghost1.current == null || ghost2.current == null || ghost3.current == null) {
            return;
        }

        const ghost1Angle = elapsedTime * 0.5
        ghost1.current.position.set(
            Math.cos(ghost1Angle) * 4,
            Math.sin(elapsedTime * 3),
            Math.sin(ghost1Angle) * 4,
        );

        const ghost2Angle = elapsedTime * 0.32
        ghost2.current.position.set(
            Math.cos(ghost2Angle) * 5,
            Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5),
            Math.sin(ghost2Angle) * 5,
        );

        const ghost3Angle = elapsedTime * 0.32
        ghost3.current.position.set(
            Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32)),
            Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 0.2),
            Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5)),
        );
    })

    return (
        <>
            <pointLight color="#ff00ff" intensity={2} distance={3} ref={ghost1} castShadow={true} />
            <pointLight color="#00ffff" intensity={2} distance={3} ref={ghost2} castShadow={true} />
            <pointLight color="#ffff00" intensity={2} distance={3} ref={ghost3} castShadow={true} />
        </>
    );
};
