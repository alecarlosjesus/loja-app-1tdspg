"use client";
import {  redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const [msg, setMsg] = useState("");

    const [usuario, setUsuario] = useState({
        userName: '',
        senha: ''
    });

    const handleChanges = (event) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await 
        fetch('http://localhost:3000/api/base/base-users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        });

            if(response.ok){
                const data = await response.json();
                
                if(data.status == 'ok'){

                setMsg('login sucesso');
                setTimeout(() => {
                    setMsg('');
                }, 5000); //Limpa o formulário

            }else{
                
                console.log('Erro de login');
                setMsg('Erro de login');
                setTimeout(() => {
                    setMsg('');
                }, 5000);
                
            }
        }
    }

    return (
    <div>
        <h1>Login</h1>
        <h2>ERRO - {msg}</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="userName" placeholder="Usuário" value={usuario.userName} onChange={handleChanges} />
            <input type="password" name="senha" placeholder="Senha" value={usuario.senha} onChange={handleChanges}/>
            <button>Login</button>
        </form>
    </div>
  )
}
