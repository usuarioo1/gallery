import Link from 'next/link'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

const Navbar = () => {
    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-30 backdrop-blur-sm"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="text-xl font-bold"><Camera color='black' size={48}/></Link>
                    <ul className="flex space-x-6">
                        <li><Link href="#sobre-mi" className="btn glass text-black">Sobre mí</Link></li>
                        <li><Link href="#galeria" className="btn glass text-black">Galería</Link></li>
                        <li><Link href="#contacto" className="btn glass text-black">Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar

