import { Container } from "@/components/Container"
import { IconAward, IconEducation, IconLogoGithub } from "@/components/Icon"

const About = () => {
    return (
        <section id="about" className="bg-secondary text-primary xl:h-lvh flex">
            <Container>
                <div className="flex flex-col justify-center">
                    <h3 className="text-center lg:text-6xl text-4xl font-bold lg:py-16 py-8">Sobre</h3>
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center flex-col md:flex-row lg:gap-20 gap-8 pb-10">
                            <div className="w-80 border-4 border-primary  rounded-md flex flex-col items-center py-10">
                                <div className="pb-2"><IconAward className="text-primary" width='2em' height='2em' /></div>
                                <div className="text-xl font-bold pb-2">Experiência</div>
                                <div>+ 2 anos</div>
                                <div>Desenvolvedor Web</div>
                            </div>
                            <div className="">
                                <div className="w-80 border-4 border-primary  rounded-md flex flex-col items-center py-10">
                                    <div className="pb-2"><IconEducation className="text-primary" width='2em' height='2em' /></div>
                                    <div className="text-xl font-bold pb-2">Educação</div>
                                    <div>Analise e Desenvolvimento de Sistemas</div>
                                    <div>Curso B7Web</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center sm:text-lg">
                            <div className="text-center w-3/4">
                                Iniciei minha jornada na programação em 2022, mergulhando de cabeça nas tecnologias modernas.
                                Desde então, tenho explorado o vasto mundo do desenvolvimento web,
                                concentrando-me especialmente no ecossistema JavaScript com React, Next e Node.
                                Estas ferramentas não apenas me capacitaram a criar aplicações dinâmicas e eficientes,
                                mas também me desafiaram a expandir constantemente meu conhecimento e habilidades.

                                <ol className="list-disc py-6 text-left">
                                    <li>Desenvolvimento Front-end e Back-end: Criação de interfaces interativas e sistemas robustos utilizando React, Node.js e Next.js.</li>
                                    <li>Expertise em TypeScript: Garantia de código limpo, tipado e de fácil manutenção, contribuindo para a eficiência e a escalabilidade dos projetos.</li>
                                    <li>Soluções orientadas ao usuário: Foco na experiência do usuário para criar aplicações intuitivas e de alto desempenho.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About;