import { useEffect, useRef, useState } from 'react';

interface VideoplayerProps {
  src: string;
  poster: string;
  isPlaying: boolean;
}

function Videoplayer({
  src,
  poster,
  isPlaying,
}: VideoplayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    }

    return () => {
      videoRef.current?.pause();
    };
  }, [isPlaying, isLoading]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      width="280"
      height="175"
    />
  );
}

export default Videoplayer;
