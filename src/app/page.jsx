"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

export default function Home() {

  const navigate = useRouter();

  useEffect(() => {
   if(sessionStorage.getItem("token-user") != null){
      navigate.refresh();
    }    
  },[navigate]);
  
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
