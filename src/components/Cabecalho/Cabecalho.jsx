import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
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
