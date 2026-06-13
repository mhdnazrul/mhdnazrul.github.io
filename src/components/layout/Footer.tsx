'use client';

import { Code2, Globe, MessageCircle } from 'lucide-react';
import { LogoMark } from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="w-full bg-[#282c33] ">
      <div className="max-w-7xl p-6 lg:px-16 mx-auto">

        <div className="h-[1px] bg-[#ABB2BF] mb-12"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          {/* Left: Logo, Name, Email, Bio */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LogoMark />
              <span className="text-white font-mono text-lg">Nazrul Islam</span>
            </div>
            
            <p className="text-[#ABB2BF] font-mono text-sm mb-4">
              mhdnazrul511@gmail.com
            </p>
            
            <p className="text-[#ABB2BF] font-mono text-sm max-w-sm">
              Web designer and front-end developer
            </p>
          </div>

          {/* Right: Media Links */}
          <div>
            <h3 className="text-white font-mono text-sm mb-6">
              <span className="text-[#C778DD]">#</span>media
            </h3>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/nazrulislam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
                aria-label="GitHub"
              >
                <Code2 size={20} />
              </a>
              
              <a
                href="https://figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
                aria-label="Figma"
              >
                <Globe size={20} />
              </a>
              
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ৩. নিচের লাইন (Bottom Line) */}
        <div className="h-[1px] bg-[#ABB2BF] w-full mb-6"></div>

        {/* Bottom: Copyright */}
        <div className="text-center">
          <p className="text-[#ABB2BF] font-mono text-xs">
            © Copyright 2026. Made by Nazrul Islam
          </p>
        </div>
      </div>
    </footer>
  );
}