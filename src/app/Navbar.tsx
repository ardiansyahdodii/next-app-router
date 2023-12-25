import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <div>
                Navbar
            </div>
            <ul className="flex space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/about/profile">Profile</Link>
            </ul>
            
        </nav>
    )
}

export default Navbar