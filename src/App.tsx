import { useState } from "react";
import "./App.css";
import EmailInput from "./components/EmailInput";
import LetterDisplay from "./components/LetterDisplay";
import PromptInput from "./components/PromptInput";
import SongDisplay from "./components/SongDisplay";
import Title from "./components/Title";

function App() {
  const [lyrics, setLyrics] = useState<string>("");
  const [emails, setEmails] = useState<string>("");

  //TODO: Cambiar a las URLs del cover y el mp3 generado, para el envio del email
  const cover = "https://lh3.googleusercontent.com/drive-viewer/AKGpihYye5l1UTedTSfMzGEHQNkv2Q_Ero6STvV_rawLU1uso4FOjVqHIMIwmAm9GGnC2luNNHc-U-2GYzieqOSMhVOoUSLkPCybr08=s1600-rw-v1";
  const mp3_url = "https://drive.google.com/file/d/1X0ghrOMip_MmQVQGT0yhj23TXcOHn1vm/view?usp=drive_link";

  return (
    <div className="min-h-screen bg-[#0096FF] flex justify-center flex-col">
      <Title />
      <PromptInput setLyrics={setLyrics} />
      <LetterDisplay lyrics={lyrics} onRegenerate={() => {}} />
      <EmailInput setEmails={setEmails} />
      <SongDisplay emails={emails} cover={cover} mp3_url={mp3_url} />
    </div>
  );
}

export default App;
