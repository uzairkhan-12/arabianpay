import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string; 
  [key: string]: any;
}

export interface FeatureCardI {
    svgCode:string; 
    title:string; 
    description: string
}

export interface HeroSectionPropsI {
    videoSrc: string;
}

export interface MarketPlaceCardI {
    image: string; 
    title: string; 
    description: string
 }

 export interface SocialIconI {
    href: string; 
    icon: ReactNode
 }