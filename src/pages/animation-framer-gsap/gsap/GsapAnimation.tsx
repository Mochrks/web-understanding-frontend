import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { TextPlugin } from 'gsap/TextPlugin'
import '@/App.css'
import { Title } from '@/components/demo/Title'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)

const AnimationSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
    </section>
)

const GsapAnimation: React.FC = () => {

    const boxRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const circleRef = useRef<HTMLDivElement>(null)
    const squareRef = useRef<HTMLDivElement>(null)
    const staggerRef = useRef<HTMLDivElement>(null)
    const morphRef = useRef<SVGPathElement>(null)
    const scrollTriggerRef = useRef<HTMLDivElement>(null)
    const parallaxRef = useRef<HTMLDivElement>(null)
    const pinRef = useRef<HTMLDivElement>(null)
    const horizontalScrollRef = useRef<HTMLDivElement>(null)
    const scrollProgressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // 1. Basic Fade In/Out
        gsap.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, duration: 2, yoyo: true, repeat: -1 })

        // 2. Text Animation
        gsap.to(textRef.current, { duration: 2, text: "Hello, animated world!", ease: "none" })

        // 3. Motion Path Animation
        gsap.to(circleRef.current, {
            duration: 5,
            repeat: -1,
            ease: "none",
            motionPath: {
                path: "M0,0 C50,-50 50,50 100,0 C150,-50 150,50 200,0",
                align: "self",
                autoRotate: true,
            }
        })

        // 4. Color Change Animation
        gsap.to(squareRef.current, {
            duration: 3,
            backgroundColor: "#ff0000",
            repeat: -1,
            yoyo: true,
        })

        // 5. Stagger Animation
        gsap.from(".stagger-item", {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
        })

        // 6. SVG Morph Animation
        gsap.to(morphRef.current, {
            duration: 2,
            repeat: -1,
            yoyo: true,
            attr: { d: "M0,0 Q50,-50 100,0 Q150,50 200,0" },
        })

        // 7. Scroll Trigger Animation
        ScrollTrigger.create({
            trigger: scrollTriggerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
            animation: gsap.to(scrollTriggerRef.current, { scale: 1.5, duration: 1 }),
        })

        // 8. Parallax Effect
        gsap.to(parallaxRef.current, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: parallaxRef.current,
                scrub: true
            },
        })

        // 9. Pin Animation
        ScrollTrigger.create({
            trigger: pinRef.current,
            pin: true,
            start: "top top",
            end: "+=300",
        })

        // 10. Horizontal Scroll
        gsap.to(".horizontal-item", {
            xPercent: -100 * (document.querySelectorAll(".horizontal-item").length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontalScrollRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (document.querySelectorAll(".horizontal-item").length - 1),
                end: () => "+=" + horizontalScrollRef.current!.offsetWidth
            }
        })

        // 11. Scroll Progress Indicator
        gsap.to(scrollProgressRef.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                scrub: 0.3
            }
        })

        // 12. Rotate on Scroll
        gsap.to(".rotate-on-scroll", {
            rotation: 360,
            ease: "none",
            scrollTrigger: {
                scrub: true
            }
        })

        // 13. Scale on Scroll
        gsap.to(".scale-on-scroll", {
            scale: 2,
            ease: "none",
            scrollTrigger: {
                scrub: true
            }
        })

        // 14. Text Reveal on Scroll
        gsap.to(".text-reveal", {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: ".text-reveal",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true
            }
        })

        // 15. Flip Animation
        const flipTimeline = gsap.timeline({ paused: true })
        flipTimeline.to(".flip-card-inner", { rotationY: 180, duration: 0.6 })

        document.querySelector(".flip-card")?.addEventListener("click", () => {
            flipTimeline.play()
        })

    }, [])

    return (
        <div className="container mx-auto p-4">
            <div className="py-5">
                <Title name="Screen Gsap motion" />
            </div>

            <AnimationSection title="1. Basic Fade In/Out">
                <div ref={boxRef} className="w-32 h-32 bg-blue-500"></div>
            </AnimationSection>

            <AnimationSection title="2. Text Animation">
                <div ref={textRef} className="text-2xl"></div>
            </AnimationSection>

            <AnimationSection title="3. Motion Path Animation">
                <svg width="200" height="100">
                    <path d="M0,0 C50,-50 50,50 100,0 C150,-50 150,50 200,0" fill="none" stroke="gray" />
                    {/* <circle ref={circleRef} r="5" fill="red" /> */}
                </svg>
            </AnimationSection>

            <AnimationSection title="4. Color Change Animation">
                <div ref={squareRef} className="w-32 h-32 bg-green-500"></div>
            </AnimationSection>

            <AnimationSection title="5. Stagger Animation">
                <div ref={staggerRef} className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="stagger-item w-16 h-16 bg-purple-500"></div>
                    ))}
                </div>
            </AnimationSection>

            <AnimationSection title="6. SVG Morph Animation">
                <svg width="200" height="100">
                    <path ref={morphRef} d="M0,0 Q50,50 100,0 Q150,-50 200,0" fill="none" stroke="black" strokeWidth="2" />
                </svg>
            </AnimationSection>

            <AnimationSection title="7. Scroll Trigger Animation">
                <div ref={scrollTriggerRef} className="w-32 h-32 bg-yellow-500 mx-auto"></div>
            </AnimationSection>

            <AnimationSection title="8. Parallax Effect">
                <div className="h-96 overflow-hidden relative">
                    <div ref={parallaxRef} className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <div className="relative z-10 p-8">
                        <h3 className="text-white text-2xl">Parallax Background</h3>
                    </div>
                </div>
            </AnimationSection>

            <AnimationSection title="9. Pin Animation">
                <div ref={pinRef} className="bg-red-500 p-4 text-white">
                    This section will be pinned while scrolling
                </div>
            </AnimationSection>

            <AnimationSection title="10. Horizontal Scroll">
                <div ref={horizontalScrollRef} className="overflow-x-hidden whitespace-nowrap">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="horizontal-item inline-block w-screen h-64 bg-indigo-500 mr-4"></div>
                    ))}
                </div>
            </AnimationSection>

            <AnimationSection title="11. Scroll Progress Indicator">
                <div ref={scrollProgressRef} className="fixed top-0 left-0 right-0 h-2 bg-green-500 origin-left"></div>
            </AnimationSection>

            <AnimationSection title="12. Rotate on Scroll">
                <div className="rotate-on-scroll w-32 h-32 bg-pink-500 mx-auto"></div>
            </AnimationSection>

            <AnimationSection title="13. Scale on Scroll">
                <div className="scale-on-scroll w-32 h-32 bg-orange-500 mx-auto"></div>
            </AnimationSection>

            <AnimationSection title="14. Text Reveal on Scroll">
                <h3 className="text-reveal text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:0%_100%] bg-no-repeat">
                    Scroll to reveal this text
                </h3>
            </AnimationSection>

            <AnimationSection title="15. Flip Animation">
                <div className="flip-card w-64 h-64 perspective-1000 mx-auto cursor-pointer">
                    <div className="flip-card-inner relative w-full h-full transition-transform duration-600 transform-style-3d">
                        <div className="flip-card-front absolute w-full h-full bg-blue-500 backface-hidden flex items-center justify-center text-white text-2xl">
                            Front
                        </div>
                        <div className="flip-card-back absolute w-full h-full bg-red-500 backface-hidden rotate-y-180 flex items-center justify-center text-white text-2xl">
                            Back
                        </div>
                    </div>
                </div>
            </AnimationSection>
        </div>
    )
}

export default GsapAnimation