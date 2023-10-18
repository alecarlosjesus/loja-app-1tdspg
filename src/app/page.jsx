import Link from 'next/link'

export default function Home() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link href="/produtos/camisa">Camisas</Link></li>
        </ul>
      </nav>
    </header>

      <h1>HOME</h1>


    </>
  )
}
