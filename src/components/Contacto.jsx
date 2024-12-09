import { motion } from 'framer-motion'

const Contacto = () => {
    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-10 text-center text-black">Contacto</h2>
                <motion.form
                    className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block mb-2 text-black font-bold">Nombre</label>
                        <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border rounded-md bg-white" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-black font-bold">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md bg-white" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mensaje" className="block mb-2 text-black font-bold">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows={4} className="w-full px-3 py-2 border rounded-md bg-white" required></textarea>
                    </div>
                    <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Enviar
                    </button>
                </motion.form>
            </div>
        </section>
    )
}

export default Contacto
