import "./App.css";
import EmailInput from "./components/EmailInput";
import LetterDisplay from "./components/LetterDisplay";
import PromptInput from "./components/PromptInput";
import SongDisplay from "./components/SongDisplay";
import Title from "./components/Title";

function App() {
  return (
    <div className="min-h-screen bg-[#0096FF] flex justify-center flex-col">
      <Title />
      <PromptInput />
      <LetterDisplay />
      <EmailInput />
      <SongDisplay />
    </div>
  );
}

export default App;
