import { ReloadOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import * as mm from "@magenta/music";

interface LetterDisplayProps {
  lyrics: string;
  onRegenerate: () => void;
}

const LetterDisplay: React.FC<LetterDisplayProps> = ({
  lyrics,
  onRegenerate,
}) => {
  const handleGenerateMelody = async () => {
    try {
      const player = new mm.Player();
      const mvae = new mm.MusicVAE(
        "https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_2bar_small"
      );
      await mvae.initialize();
      const samples = await mvae.sample(1);
      player.start(samples[0]);
    } catch (error) {
      console.error("Error generating melody:", error);
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <div className="bg-white mt-5 shadow-lg p-8">
        <h3 className="uppercase font-bold">Letra</h3>
        <div className="mb-4">
          <div className="flex justify-end">
            <Button
              className="uppercase"
              icon={<ReloadOutlined />}
              type="primary"
              onClick={onRegenerate}
            >
              Regenerar
            </Button>
          </div>
        </div>
        <div className="mb-4">
          <Card>
            <p>
              {lyrics.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </Card>
        </div>
        <div className="text-center">
          <p className="mb-4">¿Te gustó la letra?</p>
          <Button
            className="uppercase bg-green-500"
            type="primary"
            onClick={handleGenerateMelody}
          >
            Generar melodía
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LetterDisplay;
