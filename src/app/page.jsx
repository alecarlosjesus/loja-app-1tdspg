import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>

        <div className="w-96 m-auto">
          <figure>
            <figcaption>Grande Promoção!!!</figcaption>
            <Image src="/black-friday_640×360.png" alt='Promoção' width={540} height={360}/>
          </figure>
        </div>

    </div>
  )
}
