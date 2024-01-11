import Image from 'next/image'
import { Inter } from 'next/font/google'
import Component from '@/comps/component';

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async () => {
  try {
    const res = await fetch(process.env.API_URL!);
    const text = await res.text()
    console.log(text, process.env.API_URL)
    return { props: {text, e: process.env.API_URL} }
  } catch (error) {
    console.log(error)
    return { props: {text: 'error', e: process.env.API_URL} }
  }
} 

export default function Home({text, e}: {text: string, e?: string}) {
  console.log({e});
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      Hello World! This is nextjs app.
      <p> This is deploy test. </p>

      <p>This is link to the public backend: {process.env.NEXT_PUBLIC_API_URL}</p>
      <p>This is link to the interal backend: {e}</p>

      <p>This is server side rendered response from backend {text}</p>

      <Component />
    </main>
  )
}
