import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import { WackyBagel } from "./SaveTheBagels/WackyBagel";
import { Title } from "./SaveTheBagels/Title";
import { CartoonBackground } from "./SaveTheBagels/CartoonBackground";

export const saveTheBagelsSchema = z.object({
  websiteTitle: z.string(),
  backgroundColor: zColor(),
  primaryColor: zColor(),
  secondaryColor: zColor(),
});

export const SaveTheBagels: React.FC<z.infer<typeof saveTheBagelsSchema>> = ({
  websiteTitle,
  backgroundColor,
  primaryColor,
  secondaryColor,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [durationInFrames - 30, durationInFrames - 15],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor }}>
      <AbsoluteFill style={{ opacity }}>
        <CartoonBackground color1={primaryColor} color2={secondaryColor} />
        <WackyBagel />
        <Title titleText={websiteTitle} titleColor={primaryColor} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};