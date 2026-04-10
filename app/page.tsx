import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <div className="text-amber-300 items-center justify-center">
      <h1 className=" items-center justify-center">Welcome, Stranger</h1>
      <p> Junte-se a nós e descubra um mundo de oportunidades! </p>
       </div>
      </main>
    </div>
  );
}
