import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='bg-slate-700 text-white'>
    <nav>
      <ul>
        <li><Link href="/">::.HOME</Link></li>
        <li><Link href="/produtos/camisa">::.Camisas</Link></li>
        <li><Link href="/produtos/tenis">::.Tênis</Link></li>
        <li><Link href="/fazenda">::.Queijos</Link></li>
      </ul>
    </nav>
  </header>
  )
}
