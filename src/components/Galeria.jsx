import { motion } from 'framer-motion'
import Image from 'next/image'

const imagenes = [
    {
        src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358282/iWEB/galeria/dwyz1ejssldcvweiupwy.jpg'
    },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358279/iWEB/galeria/gj7g8jaldzhkse6kfsoh.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358278/iWEB/galeria/np2ylf7wjzdqnyqac0rl.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358281/iWEB/galeria/edqrozypeozgevocvvny.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358276/iWEB/galeria/rp8ylgyzjx232hcpbyvg.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358277/iWEB/galeria/uf421qdmz02ghs9haner.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358283/iWEB/galeria/frddcguj8tppbp8jadfc.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358277/iWEB/galeria/aygawxtfhlcuhi8gzclj.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358278/iWEB/galeria/iaiucmko8nygbvzuhukz.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733358283/iWEB/galeria/vb7igivu6ybuigotxahu.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733362621/iWEB/galeria/yx1zwxnypyga0oc9tbmu.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733362620/iWEB/galeria/szoj651jq053mohep6wk.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733362620/iWEB/galeria/ejzn5dxiutwxznmr3hib.jpg' },
    { src: 'https://res.cloudinary.com/dpbpyzl96/image/upload/v1733362619/iWEB/galeria/va7d5evtnuuoslut6okf.jpg' }
]

const Galeria = () => {
    return (
        <section id="galeria" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-8xl font-bold mb-24 text-center text-black">Galería</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {imagenes.map(({ src }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                src={src}
                                alt={`Imagen ${index + 1}`}
                                width={300}
                                height={300}
                                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                placeholder="blur"
                                blurDataURL="/path/to/placeholder.svg"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Galeria
