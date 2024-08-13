import { ContainerHome } from "../Home/HomeStyled";
import { DivImagem, ImgProjeto } from "../WebSockets/WebSocketsStyled";
import { DivSobreProjeto, DivTitulo } from "../WfNews/WfNewsStyled";
import imageProject from '../../assets/lhotse.png'

function Lhotse(){
    return(
        <ContainerHome>
            <DivTitulo>
                <h1 style={{color:"#c4c4c"}}>LHOTSE-Learning-English</h1>
                <a href="https://github.com/Weslley03/LHOTSE-Learning-English" target="_blank">github.com/weslley03/LHOTSE-Learning-English</a>
            </DivTitulo>

            <DivImagem>
                <ImgProjeto src={imageProject} className="d-block w-100"/>
            </DivImagem>

            <DivSobreProjeto    >
                <p className="resumo">Este projeto é uma aplicação web desenvolvida para ajudar usuários a melhorar suas habilidades de escuta em inglês.</p>
            
                <p>Tecnologias Utilizadas:</p>
                <p>React: Utilizado para construir a interface do usuário, gerencia o estado da aplicação e renderiza os formulários de entrada e áreas de texto, facilita a navegação entre a tela de entrada e a tela de escuta.</p>
                <p>Node.js/Express: Atua como o framework do backend, gerencia as requisições vindas do frontend, como a geração do arquivo de áudio a partir do texto inserido, fornece APIs para gerenciar a interação entre a entrada do usuário e a reprodução do áudio.</p>
                <p>localStorage: Utilizado para armazenamento temporário de dados no navegador do usuário, armazena o texto inserido pelo usuário para que ele possa ser transferido para a tela de escuta, mantém o URL do arquivo de áudio para reprodução, permitindo que o áudio seja reproduzido, pausado e reiniciado.</p>
                <p>TypeScript: Garante a segurança de tipos em todo o projeto, melhorando a qualidade do código e reduzindo erros, utilizado tanto no frontend quanto no backend, proporcionando uma experiência de desenvolvimento consistente.</p>

                <p>Funcionalidades:</p>
                <p>Na tela principal, o usuário pode inserir um texto, que é transferido para uma segunda tela onde ele pode ouvir o texto sendo lido em voz alta. Nesta segunda tela, há também uma área de texto onde o usuário deve digitar o que ouve. À medida que o usuário digita as palavras corretamente na ordem certa, a plataforma vai revelando o texto progressivamente, permitindo a comparação entre a entrada do usuário e o texto original. Essa abordagem oferece uma maneira interativa de praticar e aprimorar as habilidades de escuta e digitação em inglês.</p>
                
            </DivSobreProjeto>
        </ContainerHome>
    )
} 

export default Lhotse;