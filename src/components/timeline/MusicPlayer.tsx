"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const TRACK_SRC = "/music/Endgame-bgm.mp3";

/**
 * Loops the site score from first load. Browsers block audible autoplay
 * without a prior user interaction, so this tries to play with sound first;
 * if that's rejected it silently falls back to a muted loop the visitor can
 * switch on with one click (and if even muted autoplay is blocked, it waits
 * for the very first click/keypress anywhere on the page and starts then).
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;

    audio
      .play()
      .then(() => setMuted(false))
      .catch(() => {
        audio.muted = true;
        setMuted(true);
        audio.play().catch(() => {
          const resume = () => {
            audio
              .play()
              .then(() => setMuted(audio.muted))
              .catch(() => {});
            window.removeEventListener("pointerdown", resume);
            window.removeEventListener("keydown", resume);
          };
          window.addEventListener("pointerdown", resume, { once: true });
          window.addEventListener("keydown", resume, { once: true });
        });
      });
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !audio.muted;
    audio.muted = next;
    setMuted(next);
    if (audio.paused) audio.play().catch(() => {});
  };

  return (
    <>
      <audio ref={audioRef} src={TRACK_SRC} loop preload="auto" />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute timeline score" : "Mute timeline score"}
        aria-pressed={!muted}
        className={cn(
          "fixed bottom-20 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border font-mono transition-all duration-300",
          "border-[#4a3a1e]/60 bg-[#14100B]/85 backdrop-blur-md text-[#D9C9A3]/70 hover:text-[#F2A93B] hover:border-[#F2A93B]/70",
          !muted && "border-[#F2A93B] text-[#F2A93B] shadow-[0_0_14px_rgba(242,169,59,0.3)]"
        )}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </>
  );
}
