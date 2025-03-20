import { ReactNode } from "react";
import { SocialIconI } from "../../shared.interface";

export default function SocialIcon({ href, icon }: SocialIconI) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
      {icon}
    </a>
  );
}