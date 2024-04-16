import { Input } from "antd";

const EmailInput = () => {
    return ( 
        <div className="w-1/2 mx-auto pt-5">
        <div className="bg-white mt-5 shadow-lg p-8">
            <h3 className='mb-4'>Ingresa los emails del equipo separados por coma</h3>
            <Input placeholder="hola@gmail.com,test@gmail.com..." className="rounded-none"></Input>
        </div>
    </div> 
     );
}
 
export default EmailInput;