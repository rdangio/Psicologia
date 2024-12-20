
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";

const schema = z.object({
  nome: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." }) // Tamanho mínimo
    .max(50, { message: "O nome não pode ter mais de 50 caracteres." }) // Tamanho máximo
    .regex(/^[a-zA-Z\s]+$/, { message: "O nome deve conter apenas letras e espaços.",}) // Apenas caracteres alfabéticos e espaços
    .trim(), // Remove espaços em branco extras,

  email: z
    .string()
    .nonempty({ message: "O email não pode estar vazio" })
    .email({ message: "Email inválido" })
    .min(5, { message: "O email deve ter pelo menos 5 caracteres" })
    .max(50, { message: "O email deve ter no máximo 50 caracteres" })
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, { message: "Email inválido" }),

  password: z
      .string()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
      .max(128, { message: "A senha deve ter no máximo 128 caracteres" })
      .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula",})
      .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula",})
      .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número" })
      .regex(/[@$!%*?&#]/, { message: "A senha deve conter pelo menos um caractere especial (@$!%*?&)",})
      .regex(/^\S*$/, { message: "A senha não deve conter espaços em branco" }),
    
  repassword: z
      .string()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
      .max(128, { message: "A senha deve ter no máximo 128 caracteres" })
      .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula",})
      .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula",})
      .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número" })
      .regex(/[@$!%*?&#]/, { message: "A senha deve conter pelo menos um caractere especial (@$!%*?&)",})
      .regex(/^\S*$/, { message: "A senha não deve conter espaços em branco" }),

});


const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(schema), });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/registeruser', data);
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
      className="mt-12 w-full max-w-sm rounded-2xl">
        <div>
          <h2 className="text-xl font-bold">Cadastre-se</h2>
          <div>Faça seu cadastro gratuitamente.</div>
        </div>
        <div>
          <div>
            <label>Nome</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Fulano de Tal"
            {...register("nome")} />
            {errors.nome && <p>{errors.nome.message}</p>}
          </div>
          <div>
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="eu@exemplo.com" 
            {...register("email")}/>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Senha</label>
            <input 
            type="password" 
            name="password" 
            placeholder="********"
            {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <label>Redigite a Senha</label>
            <input 
            type="password" 
            name="repassword" 
            placeholder="********" 
            {...register("repassword")}/>
            {errors.repassword && <p>{errors.repassword.message}</p>}
          </div>
          <div>

            <button className="mt-6 w-full" type="submit">
              Registrar
            </button>
          </div>
        </div>
      </form>
      <p className="text-muted-foreground mt-3 text-sm">
        Já possui cadastro?{" "}
        <a className="text-gray-800 hover:underline" href="/login">
          Faça o login
        </a>
        .
      </p>
    </CentralizedContainer>
  );
};

export default RegisterPage;
