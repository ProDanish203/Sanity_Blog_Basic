import Link from "next/link"

export const Header = () => {
  return (
    <header className="max-w-[1400px] w-full font-bold mx-auto py-10 px-4">
      <Link href="/" className="text-4xl text-text">BloggerDS</Link>
    </header> 
  )
}
