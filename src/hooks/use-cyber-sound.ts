"use client";

import useSound from "use-sound";

// We'll use a placeholder sound URL or a very short base64 string for a "click" / "hover"
// For a real production app, these would be local mp3 files in /public/sounds

const CLICK_SOUND = "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"; // Sci-fi click
const HOVER_SOUND = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"; // Short blip

export function useCyberSound() {
    const [playClick] = useSound(CLICK_SOUND, { volume: 0.5 });
    const [playHover] = useSound(HOVER_SOUND, { volume: 0.2 });

    return { playClick, playHover };
}
