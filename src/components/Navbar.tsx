import Link from 'next/link'; 

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Bloggy
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;