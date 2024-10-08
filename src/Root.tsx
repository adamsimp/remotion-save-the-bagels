import { Composition } from "remotion";
import { SaveTheBagels, saveTheBagelsSchema } from "./SaveTheBagels";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SaveTheBagels"
        component={SaveTheBagels}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        schema={saveTheBagelsSchema}
        defaultProps={{
          websiteTitle: "Save the Bagels",
          backgroundColor: "#FFD700",
          primaryColor: "#FF6B6B",
          secondaryColor: "#4ECDC4",
        }}
      />
    </>
  );
};