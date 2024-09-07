import Logo from "@/assets/images/dvt-logo.png"
import Image from "next/image"
import { ItemMenu } from "./ItemMenu"
import { Container } from "./Container"

export const Header = () => {
    return (
        <nav className="fixed w-full z-10 flex items-center h-14 bg-header">

            <Container>
                <div className=" flex items-center justify-between">
                    <div className="w-20 flex justify-center">
                        <button>
                            <Image
                                src={Logo}
                                alt="logo"
                            />
                        </button>
                    </div>
                    <div >
                        <ul className="flex items-center gap-20">
                            <li>
                                <a href="/pages/about/about">
                                    <ItemMenu
                                        name="Sobre"
                                    />
                                </a>
                            </li>
                            <li>
                                <ItemMenu
                                    name="Skill"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                    name="Projetos"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                    name="Contatos"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}