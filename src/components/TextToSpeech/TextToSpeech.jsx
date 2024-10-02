import { PlayCircleOutlined } from "@ant-design/icons";
import { SayButton } from "react-say";

export default function TextToSpeech({ text }) {
  return (
    <>
      <SayButton pitch={1.1} rate={1.5} volume={0.8} speak={text}>
        <PlayCircleOutlined />
      </SayButton>
    </>
  );
}
