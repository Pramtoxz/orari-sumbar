import { ImgHTMLAttributes } from 'react';
import LogoOrari from '@/assets/orari.png';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src={LogoOrari}
            alt="ORARI Logo"
            className={`object-contain ${props.className || ''}`}
            {...props}
        />
    );
}
