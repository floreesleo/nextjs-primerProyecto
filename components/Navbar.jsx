import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 mb-4 flex justify-between items-center px-20 p-3 ">
      <Link href="/" className="text-3xl font-bold text-black">
        Home
      </Link>
      <ul>
        <li>
          <Link href="/about">Acerca del proyecto</Link>
        </li>
      </ul>
    </nav>
  );
}
