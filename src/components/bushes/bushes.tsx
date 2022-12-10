import React from 'react';
import { BushItem } from './bush-item';

export interface IBushesProps {};

export const Bushes: React.FC<IBushesProps> = () => {
    return (
        <>
            <BushItem position={[0.8, 0.2, 2.2]} scale={[0.5, 0.5, 0.5]} />
            <BushItem position={[1.4, 0.1, 2.1]} scale={[0.25, 0.25, 0.25]} />
            <BushItem position={[-0.8, 0.1, 2.2]} scale={[0.4, 0.4, 0.4]} />
            <BushItem position={[-1, 0.05, 2.6]} scale={[0.15, 0.15, 0.15]} />
        </>
    )
};
