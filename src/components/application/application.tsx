import { PositionalAudio } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { PCFSoftShadowMap, PositionalAudio as PositionalAudioClass} from 'three';
import { Bushes } from '../bushes';
import { Camera } from '../camera/camera';
import { Ghosts } from '../ghosts/ghosts';
import { Graves } from '../graves';
import { Ground } from '../ground';
import { House } from '../house';
import { Lights } from '../lights';
import './application.css';

export interface IApplicationProps {
    /**
     * Additional classes for the component.
     */
    className?: string;
};

export const Application: React.FC<IApplicationProps> = ({ className }) => {
    const [volumeEnabled, setVolumeEnabled] = useState(false);

    const audioRef = useRef<PositionalAudioClass>(null);

    const toggleVolume = () => {
        console.log({audioRef, volumeEnabled})
        if (volumeEnabled) {
            audioRef.current?.stop();
        } else {
            audioRef.current?.play();
        }

        setVolumeEnabled(!volumeEnabled);
    };

    return (
        <div className={classNames('application', className)}>
            <Canvas shadows={{ enabled: true, type: PCFSoftShadowMap }}>
                <Camera />
                <fog attach="fog" color="#262837" near={1} far={15} />
                <color attach="background" args={["#262837"]} />
                <Lights />
                <Ground />
                <House />
                <Bushes />
                <Graves />
                <Ghosts />
                <mesh position={[2, 2, 2]}>
                    <PositionalAudio url="/audio/haunted-house-ambience.mp3" autoplay={false} loop={true} ref={audioRef} />
                </mesh>
            </Canvas>
            <button className="application__audio-btn" onClick={toggleVolume}>
                <img src={`/images/icons/volume-${volumeEnabled ? 'enabled' : 'disabled'}.png`} alt="Enable sound" />
            </button>
        </div>
    );
};
