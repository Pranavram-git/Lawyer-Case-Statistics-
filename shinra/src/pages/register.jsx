import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/FormSchema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
function Register() {
    const navigate =useNavigate();
    const{register,handleSubmit,formState:{errors}} = useForm({
          resolver: zodResolver(registerschema)
    });
     function onsubmit(data){
        console.log(data)
        alert("registeration successful ")
        navigate("/login",{
            state:data,
        });
     }
    return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 text-center">
    <h1 className="text-xl font-bold mb-4">Shinra</h1>
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col items-center gap-2">

      <input type="text"placeholder="Enter ur name"className="text-center border p-2 rounded"{...register("name")}/>
      <p className="text-red-500">{errors.name?.message}</p>

      <input type="email"placeholder="Enter ur email"className="text-center border p-2 rounded"{...register("email")}/>
      <p className="text-red-500">{errors.email?.message}</p>

      <input
        type="password"
        placeholder="Enter ur password"
        className="text-center border p-2 rounded"
        {...register("password")}/>
      <p className="text-red-500">{errors.password?.message}</p>

      <button
  type="submit"
  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-green-500/30 transition duration-200 cursor-pointer mt-2"
>
  REGISTER
</button>

    </form>
  </div>
);

}

export default Register;