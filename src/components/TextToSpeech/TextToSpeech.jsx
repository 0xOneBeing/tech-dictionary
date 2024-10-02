import { PlayCircleOutlined } from "@ant-design/icons";
import { SayButton } from "react-say";

export default function TextToSpeech({ text, className }) {
  return (
    <>
      <SayButton pitch={1.1} rate={1.5} volume={0.8} speak={text}>
        <PlayCircleOutlined
          className={
            "text-[var(--primary-color)] text-md " + className
          }
        />
      </SayButton>
    </>
  );
}
