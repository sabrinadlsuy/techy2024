import { Avatar, Badge, Button } from "antd";

const SongDisplay = () => {
  return (
    <div className="w-1/2 mx-auto mb-8">
      <div className="flex justify-between flex-col">
        <div className="bg-white mt-5 shadow-lg p-8">
          <Badge className="mr-5">
            <Avatar shape="square" size="large" />
          </Badge>
          Audio name
        </div>
        <div className="justify-end flex mt-5">
          <Button
            className="uppercase bg-green-500 hover:bg-green-700"
            type="primary"
            onClick={() => {}}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SongDisplay;
