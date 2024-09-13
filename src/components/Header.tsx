import Logo from "@/assets/images/dvt-logo.png"
import Image from "next/image"
import { Container } from "./Container"
import Link from "next/link"

export const Header = () => {
    return (
        <nav className="fixed w-full z-10 flex items-center h-14 bg-header">

            <Container>
                <div className=" flex items-center justify-between">
                    <div className="w-20 flex justify-center">
                        <Link href="#hero" >
                            <Image
                                src={Logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div >
                        <ul className="flex items-center sm:gap-16">
                            <li>
                                <Link href="#about" className="text-secondary font-bold hover:text-white relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400 after:origin-center">Sobre</Link>
                            </li>
                            <li>
                                <Link href="#skill" className="text-secondary font-bold hover:text-white relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400 after:origin-center">Habilidades</Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-secondary font-bold  hover:text-white relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400 after:origin-center">Projetos</Link>
                            </li>
                            <li>
                                <Link href="#contacts" className="text-secondary font-bold  hover:text-white relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400 after:origin-center">Contatos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}