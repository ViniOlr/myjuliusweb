import Link from "next/link";


export default function NavBar({active}) {
  return (
    <>
      <nav className="flex  justify-between items-center bg-slate-900 px-6 py-4">
        <ul className="flex gap-20 items-end">
          <li><Link href="/" ><h1 className="text-2xl text-slate-100">MyJulius</h1></Link></li>
          <li><Link href="/despesas" className={active =='despesas' && "text-slate-500"}>Despesas</Link></li>
          <li><Link href="/contas" className={active =='contas' && "text-slate-500"}>Contas</Link></li>
          <li><Link href="/categorias" className={active =='categorias' && "text-slate-500"}>Categorias</Link></li>
        </ul>

        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt='avatar do usuário' />
        </div>
      </nav>
    </>
  )
}
