import React from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame } from "remotion";

const SHAPES = 20;

export const CartoonBackground: React.FC<{
  color1: string;
  color2: string;
}> = ({ color1, color2 }) => {
  const { width, height } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <svg width={width} height={height}>
        {new Array(SHAPES).fill(0).map((_, i) => {
          const progress = (frame / 30 + i / SHAPES) % 1;
          const x = Math.sin(progress * Math.PI * 2) * width * 0.5 + width * 0.5;
          const y = Math.cos(progress * Math.PI * 2) * height * 0.5 + height * 0.5;
          const size = Math.sin(progress * Math.PI) * 50 + 50;

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={size}
                fill={i % 2 === 0 ? color1 : color2}
                opacity={0.5}
              />
              <text
                x={x}
                y={y}
                fontSize={size}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#FFFFFF"
              >
                {i % 2 === 0 ? "🥯" : "🎨"}
              </text>
            </g>
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};