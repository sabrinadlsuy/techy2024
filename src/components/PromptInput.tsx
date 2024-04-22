import { HighlightOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";
import OpenAI from "openai";
import React from "react";

const PromptInput = () => {
  const [text, setText] = useState("");
  const [lyrics, setLyrics] = useState("");

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("Submitted:", text);

    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY, // This is also the default, can be omitted
      dangerouslyAllowBrowser: true,
    });

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            content: "Sos un robot que genera letras de canciones",
            role: "system",
          },
          { content: `Generar canciones acerca de: ${text}`, role: "user" },
        ],
        max_tokens: 500,
        n: 1,
        stop: null,
        temperature: 0.8,
      });

      const generatedLyrics = JSON.stringify(
        response.choices[0].message.content?.trim()
      );
      setLyrics(generatedLyrics);
    } catch (error) {
      console.error("Error generating lyrics:", error);
    }
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
          <p>
            {lyrics.split("\\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default PromptInput;
