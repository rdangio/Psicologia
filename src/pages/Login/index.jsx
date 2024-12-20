
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";

// Definindo o esquema de validação com Zod
const schema = z.object({
  password: z
    .string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
    .max(128, { message: "A senha deve ter no máximo 128 caracteres" })
    .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula",})
    .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula",})
    .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número" })
    .regex(/[@$!%*?&#]/, { message: "A senha deve conter pelo menos um caractere especial (@$!%*?&)",})
    .regex(/^\S*$/, { message: "A senha não deve conter espaços em branco" }),

  email: z
    .string()
    .nonempty({ message: "O email não pode estar vazio" })
    .email({ message: "Email inválido" })
    .min(5, { message: "O email deve ter pelo menos 5 caracteres" })
    .max(50, { message: "O email deve ter no máximo 50 caracteres" })
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, { message: "Email inválido" }),
});

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(schema), });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/login', data);
      console.log(response.data);
      // Aqui você pode adicionar lógica para tratar a resposta da API (ex.: redirecionamento, mensagem de erro)
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <CentralizedContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[25%] flex flex-col items-center justify-center gap-4"
      >
        <div>
          <label htmlFor="email" className="bg-amber-200 px-5">
            Email
          </label>
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="bg-amber-200 px-5">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" className="bg-amber-200 px-5">
          Submit
        </button>
      </form>
    </CentralizedContainer>
  );
};

export default LoginPage;
