import Image from "next/image";
import { useState } from "react";
import { CustomPortal } from "./custom-portal";
import { cn } from "@/packages/utils/utils.shadcn";
import { heroPortalKey } from "@/packages/data/data.hero";
import HeroVideo from "@/components/features/hero/hero-video";

export type animationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoDialogProps {
  className?: string;
  videoSrc: string;
  animationStyle?: animationStyle;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  trigger?: React.ReactNode;
  isVideoOpen: boolean;
  setIsVideoOpen: (isOpen: boolean) => void;
}

export default function HeroVideoDialog({
  trigger,
  className,
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  isVideoOpen,
  setIsVideoOpen,
}: HeroVideoDialogProps) {
  const [mounted, setMounted] = useState(false);

  // To ensure the portal works correctly with server-side rendering
  useState(() => {
    setMounted(true);
  });

  return (
    <div className={cn("relative", className)}>
      <div className="relative cursor-pointer group" onClick={() => setIsVideoOpen(true)}>
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={512}
          height={512}
          className="w-full rounded-2xl shadow-2xl border border-border"
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          {trigger}
        </div>
      </div>

      {mounted && (
        <>
          <CustomPortal portalKey={heroPortalKey}>
            <HeroVideo
              videoSrc={videoSrc}
              animationStyle={animationStyle}
              isVideoOpen={isVideoOpen}
              setIsVideoOpen={setIsVideoOpen}
            />
          </CustomPortal>
        </>
      )}
    </div>
  );
}
