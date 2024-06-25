import { useRive } from "@rive-app/react-canvas";
import an from "./../assets/new_file (9).riv";

export default function SkillsRive() {
  const { RiveComponent } = useRive({
    src: an,
    stateMachines: "State Machine 1",
    autoplay: true,
   
  });

  return (
    <div style={{ display: "flex", justifyContent: "START"  }}>
      <RiveComponent style={{ height: "1000px", width: "2190000px" }} />
    </div>
  );
}