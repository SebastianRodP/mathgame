import { useEffect } from "react";
import useSound from "use-sound";

function BackgroundMusic() {
  const [play, { stop }] = useSound("/sounds/backgroundMusic.mp3", {
    volume: 0.5,
    loop: true,
  });

  useEffect(() => {
    play();

    return () => {
      stop();
    };
  }, [play, stop]);

  return null;
}

export default BackgroundMusic;
