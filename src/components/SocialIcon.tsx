import { ReactNode } from "react";

export default function SocialIcon({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
      {icon}
    </a>
  );
}