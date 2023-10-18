import Image from "next/image";

export default function Tenis() {
  return (
    <div>
        <h1>Tênis</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolorum voluptatem. Rem dolor quia facilis repudiandae nobis voluptatem vitae? Cumque quo ullam dolorum fugiat est officia sint quis. Fugit, modi?</p>
            <figure>
                <Image
                    src="https://prints.ultracoloringpages.com/1c5c5fe9732b62308475c45956979053.png"
                    alt="Tênis"
                    width={300}
                    height={300}
                    />
            </figure>
        </div>
    </div>
  )
}
