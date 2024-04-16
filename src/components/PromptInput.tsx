import { HighlightOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";

const PromptInput = () => {
  const [text, setText] = useState("");

  const handleTextChange = () => {};

  const handleSubmit = () => {
    console.log("Submitted:", text);
  };

  return (
    <>
      <div className="w-1/2 mx-auto">
        <div className="bg-white mt-5 shadow-lg p-8">
          <h3 className="uppercase font-bold">Generar canción</h3>
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="mb-2 flex items-end">
                ¿De qué quieres que sea tu canción?
              </label>
              <Button
                className="uppercase rounded-none mb-4"
                type="primary"
                onClick={handleSubmit}
                icon={<HighlightOutlined />}
              >
                Autogenerar
              </Button>
            </div>
            <Input.TextArea
              rows={4}
              value={text}
              onChange={handleTextChange}
              placeholder="Quiero una canción que hable de..."
            />
          </div>
          <div className="text-center">
            <Button
              className="uppercase bg-green-500"
              type="primary"
              onClick={handleSubmit}
            >
              Generar letra
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromptInput;
