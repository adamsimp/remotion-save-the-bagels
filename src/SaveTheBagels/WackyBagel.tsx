import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const WackyBagel: React.FC = () => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const scale = spring({
    frame,
    from: 0,
    to: 1,
    fps: videoConfig.fps,
    config: { mass: 0.5, damping: 10 },
  });

  const rotation = spring({
    frame,
    from: -180,
    to: 0,
    fps: videoConfig.fps,
    config: { mass: 0.5, damping: 10 },
  });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          transform: `scale(${scale}) rotate(${rotation}deg)`,
          fontSize: 200,
        }}
      >
        🥯
      </div>
    </AbsoluteFill>
  );
};