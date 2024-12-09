import { motion } from 'framer-motion'

const Hero = ({ nombre, imagenFondo }) => {
    return (
        <motion.div
            className="h-screen flex items-center justify-center relative bg-cover bg-center"
            style={{ backgroundImage: `url(${imagenFondo})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <motion.h1
                className="relative text-6xl font-bold text-white text-center shadow-text"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {nombre}
                <p className="text-4xl">Fotografía</p>
            </motion.h1>
        </motion.div>
    )
}

export default Hero
