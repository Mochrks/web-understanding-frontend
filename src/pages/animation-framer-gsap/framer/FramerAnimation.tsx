import { motion } from "framer-motion";
import {
    navVariants,
    fadeIn,
    slideIn,
    zoomIn,
    staggerContainer,
    textVariantFromTop,
    textVariantFromBottom,
    textVariantFromLeft,
    textVariantFromRight,
    textContainer,
    fadeInOpacity,
    planetVariants,
    appBarVariants,
    toolbarVariants,
    typographyVariant,
    footerVariants,
} from "@/utils/motion-animation/framer";
import { Title } from "@/components/demo/Title";

const FramerAnimation = () => {
    return (
        <div className="container mx-auto p-10 space-y-10 overflow-hidden">

            <div className="py-5">
                <Title name="Screen Animation Framer motion" />
            </div>
            {/* Navigation Animation */}
            <motion.div
                className="bg-blue-300 p-6 rounded"
                variants={navVariants}
                initial="hidden"
                animate="show"
            >
                Navigation Animation (navVariants)
            </motion.div>

            {/* Fade In Animation */}
            <motion.div
                className="bg-green-300 p-6 rounded"
                variants={fadeIn("left", "tween", 0.5, 1)}
                initial="hidden"
                animate="show"
            >
                Fade In from Left (fadeIn)
            </motion.div>

            {/* Slide In Animation */}
            <motion.div
                className="bg-yellow-300 p-6 rounded"
                variants={slideIn("right", "spring", 0.5, 1)}
                initial="hidden"
                animate="show"
            >
                Slide In from Right (slideIn)
            </motion.div>

            {/* Zoom In Animation */}
            <motion.div
                className="bg-red-300 p-6 rounded"
                variants={zoomIn(0.5, 1)}
                initial="hidden"
                animate="show"
            >
                Zoom In (zoomIn)
            </motion.div>

            {/* Stagger Container Animation */}
            <motion.div
                className="bg-purple-300 p-6 rounded"
                variants={staggerContainer(0.3, 0.2)}
                initial="hidden"
                animate="show"
            >
                Stagger Container (staggerContainer)
            </motion.div>

            {/* Text Animation from Top */}
            <motion.div
                className="bg-indigo-300 p-6 rounded"
                variants={textVariantFromTop(0.5)}
                initial="hidden"
                animate="show"
            >
                Text Animation from Top (textVariantFromTop)
            </motion.div>

            {/* Text Animation from Bottom */}
            <motion.div
                className="bg-pink-300 p-6 rounded"
                variants={textVariantFromBottom(0.5)}
                initial="hidden"
                animate="show"
            >
                Text Animation from Bottom (textVariantFromBottom)
            </motion.div>

            {/* Text Animation from Left */}
            <motion.div
                className="bg-gray-300 p-6 rounded"
                variants={textVariantFromLeft(0.5)}
                initial="hidden"
                animate="show"
            >
                Text Animation from Left (textVariantFromLeft)
            </motion.div>

            {/* Text Animation from Right */}
            <motion.div
                className="bg-orange-300 p-6 rounded"
                variants={textVariantFromRight(0.5)}
                initial="hidden"
                animate="show"
            >
                Text Animation from Right (textVariantFromRight)
            </motion.div>

            {/* Text Container Animation */}
            <motion.div
                className="bg-cyan-300 p-6 rounded"
                variants={textContainer}
                initial="hidden"
                animate="show"
            >
                Text Container Animation (textContainer)
            </motion.div>

            {/* Fade In Opacity Animation */}
            <motion.div
                className="bg-teal-300 p-6 rounded"
                variants={fadeInOpacity}
                initial="hidden"
                animate="show"
            >
                Fade In Opacity (fadeInOpacity)
            </motion.div>

            {/* Planet Animation */}
            <motion.div
                className="bg-lime-300 p-6 rounded"
                variants={planetVariants("left")}
                initial="hidden"
                animate="show"
            >
                Planet Animation (planetVariants)
            </motion.div>

            {/* AppBar Animation */}
            <motion.div
                className="bg-blue-500 p-6 rounded"
                variants={appBarVariants}
                initial="hidden"
                animate="show"
            >
                App Bar Animation (appBarVariants)
            </motion.div>

            {/* Toolbar Animation */}
            <motion.div
                className="bg-red-500 p-6 rounded"
                variants={toolbarVariants}
                initial="hidden"
                animate="show"
            >
                Toolbar Animation (toolbarVariants)
            </motion.div>

            {/* Typography Animation */}
            <motion.div
                className="bg-yellow-500 p-6 rounded"
                variants={typographyVariant}
                initial="hidden"
                animate="show"
            >
                Typography Animation (typographyVariant)
            </motion.div>

            {/* Footer Animation */}
            <motion.div
                className="bg-green-500 p-6 rounded"
                variants={footerVariants}
                initial="hidden"
                animate="show"
            >
                Footer Animation (footerVariants)
            </motion.div>

        </div>
    );
};

export default FramerAnimation;
