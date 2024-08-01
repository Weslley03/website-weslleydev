import CarouselComponent from "../../../component/carrosel/CarouselComponent.jsx";
import { ContainerHome } from "../Home/HomeStyled";
import { DivTitulo, DivCarrosel, DivSobreProjeto } from "./WfNewsStyled";

function WfNews(){
    return(
        <ContainerHome>
            <DivTitulo>
               <h1> WFNews (SITE COMPLETO) </h1>
               <a href="https://api-breaknews-5dmg.onrender.com" target="_blank"> https://api-breaknews-5dmg.onrender.com </a>
            </DivTitulo>

            <DivCarrosel>
                <CarouselComponent />
            </DivCarrosel>

            <DivSobreProjeto>
                <p className="resumo">Desenvolvi um site de notícias moderno e dinâmico, utilizando uma combinação de tecnologias avançadas para proporcionar uma experiência de usuário rápida e intuitiva. Este projeto destaca minhas habilidades em desenvolvimento full-stack, abrangendo desde a configuração do servidor até a interface do usuário.</p>
                
                <div className="funcionaldiades">
                    <p>Funcionalidades:</p>
                    <p>Interface de Usuário Responsiva: Design adaptável que proporciona uma ótima experiência em dispositivos móveis e desktops.</p>
                    <p>Autenticação de Usuários: Registro e login de usuários com segurança aprimorada através de JWT.</p>
                    <p>Gerenciamento de Conteúdo: Sistema de administração que permite o gerenciamento eficaz de artigos e categorias.</p>
                    <p>Documentação da API: Documentação abrangente com Swagger, facilitando a integração e manutenção.</p>
                </div>

                <div className="tecnologias">
                    <p>Tecnologias Utilizadas:</p>
                    <p>JavaScript: Linguagem principal para desenvolvimento front-end e back-end.</p>
                    <p>Node.js: Plataforma utilizada para construir o servidor e a lógica do aplicativo.</p>
                    <p>ExpressJS: Framework para Node.js, utilizado para criar uma API robusta e eficiente.</p>
                    <p>React: Biblioteca JavaScript para criar interfaces de usuário interativas e responsivas.</p>
                    <p>Mongoose e MongoDB: Mongoose foi utilizado como uma ferramenta de modelagem de dados para o banco de dados MongoDB, assegurando a persistência e gerenciamento eficiente de dados.</p>
                    <p>JWT (JSON Web Tokens): Implementado para autenticação segura dos usuários.</p>
                    <p>Swagger: Utilizado para documentar a API, facilitando o entendimento e utilização por outros desenvolvedores.</p>
                    <p>GitHub: Hospedagem do código-fonte e controle de versões, permitindo colaboração e acompanhamento do desenvolvimento.</p>
                    <p>Vercel: Plataforma escolhida para hospedar o site, garantindo alta performance e escalabilidade.</p>
                </div>
            </DivSobreProjeto>
        </ContainerHome>
    )
}

export default WfNews;