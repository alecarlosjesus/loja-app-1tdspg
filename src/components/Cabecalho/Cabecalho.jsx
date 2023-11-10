"use client";
import Link from "next/link";
import { useState } from "react";

export default function Cabecalho() {
  //No momento de recuperar o objeto da sessão, é necessário converter o JSON para objeto novamente.
  const usuario = JSON.parse(sessionStorage.getItem("obj-user"));
  const [userLogado] = useState(usuario);

  const handleLogout = () => {
    sessionStorage.removeItem("obj-user");
    sessionStorage.removeItem("token-user");
    window.location.href = "/";
  }

  if(sessionStorage.getItem("token-user") != null){
  return (
    <header className='cabecalho'>
      <div>
        <p>{usuario != null ? `Olá ${usuario.email}`:""}</p>

      </div>
    <nav>
      <ul>
        <li><Link href="/">::.HOME</Link></li>
        <li><Link href="/" onClick={handleLogout}>::.Logout</Link></li>
        <li><Link href="/produtos/camisa">::.Camisas</Link></li>
        <li><Link href="/produtos/tenis">::.Tênis</Link></li>
        <li><Link href="/fazenda">::.Queijos</Link></li>
      </ul>
    </nav>
  </header>
  )
  }else{
    return (
      <header className='cabecalho'>
      <nav>
        <ul>
          <li><Link href="/">::.HOME</Link></li>
          <li><Link href="/login">::.Login</Link></li>
        </ul>
      </nav>
    </header>
    )
  }
}
