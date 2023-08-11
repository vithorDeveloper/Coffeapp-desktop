import Image from "next/image";

export default function Header(){

  return(
    <main className="text-md pt-10 text-white">
      <nav className="flex flex-row justify-around items-center">
        <Image
          src="/assets/Logo.png"
          alt="logo do site"
          width={80}
          height={80}
        />

        <ul className="flex flex-row justify-between w-2/6">
          <li>Home</li>
          <li>Menu</li>
          <li>Recompensas</li>
          <li>Gift cards</li>
          <li>Lojas</li>
        </ul>

        <button className="py-2 px-10 border-[1px] border-violet-500 rounded-md">
          Pegar meu café
        </button>
      </nav>
    </main>
  )
}