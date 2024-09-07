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
        <section className="bg-primary text-white h-lvh flex items-center">
            <Container>
                <div className="grid grid-cols-2 ">
                    <div className="relative">
                        <div className="absolute w-[130%] -top-1/3 right-4">
                            <AnimatedBackground />
                        </div>
                        <div className="relative flex items-center justify-center">
                            <Image src={Avatar} className="w-3/4 rounded-full border border-secondary" alt="avatar" quality={100} />
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-center items-center  gap-3">
                        <div className="text-secondary text-[3.4rem] text-nowrap">Daniel Vitor da Trindade</div>
                        <TypeAnimation
                            sequence={[
                                'Desenvolvedor FullStack',
                                1000,
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            className="text-secondary text-4xl"
                        />
                        <div className="flex gap-5 pt-5">
                            <Link href="https://github.com/danielvitort" target="_blank">
                                <IconLogoGithub
                                    width='3em'
                                    height='3em'
                                    className="text-secondary hover:text-indigo-900"
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/danielvitortrindade/" target="_blank">
                                <IconBxlLinkedinSquare
                                    width='3em'
                                    height='3em'
                                    className="text-secondary hover:text-blue-600"
                                />
                            </Link>
                            <Link href="mailto:danielvtrindade@outlook.com" target="_blank">
                                <IconEmail
                                    width='3em'
                                    height='3em'
                                    className="text-secondary hover:text-rose-800"
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