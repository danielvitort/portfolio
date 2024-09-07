import { Container } from "@/components/Container"
import { IconAward, IconBxLinkExternal, IconCss3, IconDatabase, IconEducation, IconGit, IconHtml5, IconJavascript, IconNode, IconReact, IconTailwindcss, IconTypescript } from "@/components/Icon"
import Link from "next/link"

export const Skill = () => {
    return (
        <section className="bg-primary text-secondary h-lvh">
            <Container>
                <div className="bg-primary">
                    <h3 className="text-center text-6xl font-bold py-20">Habilidades</h3>
                    <div className="">
                        <div className="grid grid-cols-4 justify-items-center gap-10">
                            <div className="w-60 h-64 bg-card-skill  rounded-2xl flex flex-col items-center justify-center">
                                <div className="flex gap-2 pb-4">
                                    <IconHtml5 className="text-amber-700" width='4em' height='4em' />
                                    <IconCss3 className="text-blue-600" width='4em' height='4em' />
                                </div>
                                <div className="text-xl font-bold pb-2">HTML5 e CSS3</div>
                                <Link
                                    href="https://alunos.b7web.com.br/media/certificates/certificado_7990573.jpg"
                                    className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl mt-5 hover:border-white hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Exibir Certificado</span>
                                    <IconBxLinkExternal />
                                </Link>
                            </div>
                            <div className="w-60 h-64 bg-card-skill  rounded-2xl flex flex-col items-center justify-center">
                                <div className="pb-4">
                                    <IconJavascript className="text-yellow-400" width='4em' height='4em' />
                                </div>
                                <div className="text-xl font-bold pb-2">JavaScript</div>
                                <Link
                                    href="https://alunos.b7web.com.br/media/certificates/certificado_7075296.jpg"
                                    className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl mt-5 hover:border-white hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Exibir Certificado</span>
                                    <IconBxLinkExternal />
                                </Link>
                            </div>
                            <div className="w-60 h-64 bg-card-skill  rounded-2xl flex flex-col items-center justify-center">
                                <div className="pb-4">
                                    <IconTypescript className="text-blue-500" width='4em' height='4em' />
                                </div>
                                <div className="text-xl font-bold pb-2">TypeScript</div>
                                <Link
                                    href="https://alunos.b7web.com.br/media/certificates/certificado_3424945.jpg"
                                    className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl mt-5 hover:border-white hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Exibir Certificado</span>
                                    <IconBxLinkExternal />
                                </Link>
                            </div>
                            <div className="w-60 h-64 bg-card-skill  rounded-2xl flex flex-col items-center justify-center">
                                <div className="pb-4">
                                    <IconTailwindcss className="text-sky-500" width='4em' height='4em' />
                                </div>
                                <div className="text-xl font-bold pb-2">TailWindCSS</div>
                                <Link
                                    href="https://alunos.b7web.com.br/media/certificates/certificado_1807067.jpg"
                                    className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl mt-5 hover:border-white hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Exibir Certificado</span>
                                    <IconBxLinkExternal />
                                </Link>
                            </div>
                            <div className="w-60 h-64 bg-card-skill  rounded-2xl flex flex-col items-center justify-center">
                                <div className="pb-4">
                                    <IconReact className="text-sky-300" width='4em' height='4em' />
                                </div>
                                <div className="text-xl font-bold pb-2">ReactJS</div>
                                <Link
                                    href="https://alunos.b7web.com.br/media/certificates/certificado_3401495.jpg"
                                    className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl mt-5 hover:border-white hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Exibir Certificado</span>
                                    <IconBxLinkExternal />
                                </Link>
                            </div>
                            <div className="w-60 h-64 bg-card-skill  rounded-2xl flex flex-col items-center justify-center">
                                <div className="pb-4">
                                    <IconNode className="text-lime-500" width='4em' height='4em' />
                                </div>
                                <div className="text-xl font-bold pb-2">NodeJS</div>
                                <Link
                                    href="https://alunos.b7web.com.br/media/certificates/certificado_6005311.jpg"
                                    className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl mt-5 hover:border-white hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Exibir Certificado</span>
                                    <IconBxLinkExternal />
                                </Link>
                            </div>
                            <div className="w-60 h-64 bg-card-skill  rounded-2xl flex flex-col items-center justify-center">
                                <div className="pb-4">
                                    <IconDatabase className="text-zinc-300" width='4em' height='4em' />
                                </div>
                                <div className="text-xl font-bold pb-2">Bancos de Dados</div>
                                <Link
                                    href="https://alunos.b7web.com.br/media/certificates/certificado_29071.jpg"
                                    className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl mt-5 hover:border-white hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Exibir Certificado</span>
                                    <IconBxLinkExternal />
                                </Link>
                            </div>
                            <div className="w-60 h-64 bg-card-skill  rounded-2xl flex flex-col items-center justify-center">
                                <div className="pb-4">
                                    <IconGit className="text-orange-500" width='4em' height='4em' />
                                </div>
                                <div className="text-xl font-bold pb-2">Git/GitHub</div>
                                <Link
                                    href="https://alunos.b7web.com.br/media/certificates/certificado_7837190.jpg"
                                    className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl mt-5 hover:border-white hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Exibir Certificado</span>
                                    <IconBxLinkExternal />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}