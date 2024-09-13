
import { useEffect, useRef } from 'react';
import { fadeInAnimation } from '@/utils/motion-animation/gsap';
import { Description } from '@/components/demo/Description';
import { Title } from '@/components/demo/Title';

const GsapAnimation = () => {
    // Refs for the fade-in animation element
    const fadeInRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger the fade-in animation using the imported function
        fadeInAnimation(fadeInRef.current);
    }, []);

    return (
        <div className="container mx-auto p-10 space-y-10 overflow-hidden">
            {/* Fade In Animation */}
            <div className='py-5 text-center'>
                <Title name="Screen Animation GSAP" />
                <Description text="no yet implemented" />
            </div>
            <div
                className="bg-green-300 p-6 rounded"
                ref={fadeInRef}
            >
                Fade In from Left (GSAP)
            </div>
        </div>
    );
};

export default GsapAnimation;
