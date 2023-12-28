'use client'
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname()
    const router = useRouter()

    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <div>
                Navbar
            </div>
            <div>
                <ul className="flex space-x-4">
                <Link href="/" className={`${pathname === '/' ? 'text-blue-400' : ''}`}>Home</Link>
                <Link href="/about" className={`${pathname === '/about' ? 'text-blue-400' : ''}`}>About</Link>
                <Link href="/about/profile" className={`${pathname === '/about/profile' ? 'text-blue-400' : ''}`}>Profile</Link>
            </ul>
            </div>
            <div>
                <button 
                className="bg-blue-400 px-3 py-1 rounded text-black hover:bg-blue-500"
                onClick={() => router.push('/login')}
                >Login</button>
            </div>
        </nav>
    )
}

export default Navbar