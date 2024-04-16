import { ReloadOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";


const LetterDisplay = () => {
    return ( 
        <div className="w-1/2 mx-auto">
        <div className="bg-white mt-5 shadow-lg p-8">
        <h3 className='uppercase font-bold'>Letra</h3>
          <div className="mb-4">
            <div className='flex justify-end'>
            <Button className='uppercase' icon={<ReloadOutlined />} type="primary" onClick={() => {}}>
                 Regenerar
            </Button>
            </div>
          </div>
          <div className="mb-4">
              <Card>
                  lorem.. 
              </Card>
          </div>
          <div className="text-center">
              <p className="mb-4">¿Te gustó la letra?</p>
            <Button className='uppercase bg-green-500' type="primary" onClick={() => {}}>
              Generar melodía
            </Button>
          </div>
        </div>
      </div>
     );
}
 
export default LetterDisplay;