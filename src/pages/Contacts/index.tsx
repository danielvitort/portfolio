import { Container } from "@/components/Container"
import { IconBxlLinkedinSquare, IconEmail, IconLogoGithub } from "@/components/Icon"
import Link from "next/link"

const Contacts = () => {
    return (
        <section id="contacts" className="bg-primary text-secondary">
            <Container>
                <h3 className="text-center lg:text-6xl text-4xl font-bold py-14">Contatos</h3>
                <div className="sm:text-xl text-xs pb-28 sm:pl-10 text-slate-300">
                    <div className=" flex items-center">
                        <IconEmail width='2em' height='2em' />
                        <span className="sm:px-2 px-1">Email:</span>
                        <Link href="mailto:danielvtrindade@outlook.com" className="hover:text-white hover:border-b-2" target="_blank">
                            danielvtrindade@outlook.com
                        </Link>
                    </div>
                    <div className=" flex items-center">
                        <IconBxlLinkedinSquare width='2em' height='2em' />
                        <span className="sm:px-2 px-1">LinkedIn:</span>
                        <Link href="https://www.linkedin.com/in/danielvitortrindade" className="hover:text-white hover:border-b-2" target="_blank">
                            https://www.linkedin.com/in/danielvitortrindade
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <IconLogoGithub width='2em' height='2em' />
                        <span className="sm:px-2 px-1">GitHub:</span>
                        <Link href="https://github.com/danielvitort" className="hover:text-white hover:border-b-2" target="_blank">
                            https://github.com/danielvitort
                        </Link>
                    </div>
                </div>
            </Container>
            <div className="bg-gradient-to-b from-primary to-black h-20"></div>
        </section>
    )
}

export default Contacts