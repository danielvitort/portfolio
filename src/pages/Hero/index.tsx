"use client"

import Avatar from "@/assets/images/Daniel.jpg";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Image from "next/image";
import { Container } from "@/components/Container";
import { TypeAnimation } from 'react-type-animation';
import { IconBxlLinkedinSquare, IconEmail, IconLogoGithub } from "@/components/Icon";
import Link from "next/link";

const Hero = () => {


    return (
        <section id="hero" className="bg-primary text-white h-lvh flex items-center">
            <Container>
                <div className="grid sm:grid-cols-2 grid-cols-1">
                    <div className="relative">
                        <div className="absolute w-[130%] -top-1/3 right-0">
                            <AnimatedBackground />
                        </div>
                        <div className="relative flex items-center justify-center">
                            <Image src={Avatar} className="sm:w-3/4 w-3/5 rounded-full border border-secondary" alt="avatar" quality={100} />
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-center items-center text-center gap-3">
                        <div className="text-secondary text-[3.4rem]">Daniel Vitor da Trindade</div>
                        <TypeAnimation
                            sequence={[
                                'Desenvolvedor Full Stack',
                                1000,
                            ]}
                            wrapper="div"
                            speed={20}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            className="text-secondary text-4xl lg:h-14 h-20"
                        />
                        <div className="flex gap-5 pt-5">
                            <Link href="https://github.com/danielvitort" target="_blank">
                                <IconLogoGithub
                                    width='3em'
                                    height='3em'

                                    className="text-slate-600 hover:text-indigo-900"
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/danielvitortrindade/" target="_blank">
                                <IconBxlLinkedinSquare
                                    width='3em'
                                    height='3em'
                                    className="text-slate-600 hover:text-blue-600"
                                />
                            </Link>
                            <Link href="mailto:danielvtrindade@outlook.com" target="_blank">
                                <IconEmail
                                    width='3em'
                                    height='3em'
                                    className="text-slate-600 hover:text-white"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default Hero