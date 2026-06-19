import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center px-6">

            {/* Background gradient layer — must be empty */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950" />

            {/* Content */}
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-bold"
                >
                    Build Your Perfect
                    <span className="gradient-text block">
                        Product Configuration
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 mt-6 max-w-2xl mx-auto"
                >
                    Configure laptops, smartphones, gaming PCs,
                    and cars with real-time pricing and modern
                    interactive experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10"
                >
                    <Link
                        to="/dashboard"
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 font-semibold text-white"
                    >
                        Launch Studio
                    </Link>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;