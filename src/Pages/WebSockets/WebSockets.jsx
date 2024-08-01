import { ContainerHome } from "../Home/HomeStyled";
import { DivSobreProjeto, DivTitulo } from "../WfNews/WfNewsStyled";
import { DivImagem, ImgProjeto} from "./WebSocketsStyled";

function WebSockets(){
    return(
        <ContainerHome>
            <DivTitulo>
                <h1 style={{color:"#c4c4c"}}>WebSockets</h1>
                <a href="https://github.com/Weslley03/WebSockets-NODEJS" target="_blank"> github.com/weslley03/websockets-nodejs </a>
            </DivTitulo>

            <DivImagem>
                <ImgProjeto src="../../../public/websockets/websockets.jpg" className="d-block w-100"/>
            </DivImagem>

            <DivSobreProjeto>
                <p className="resumo">Este projeto destaca minha capacidade de integrar funcionalidades em tempo real em aplicações web, criando experiências de usuário envolventes e interativas. É uma prova das minhas habilidades em desenvolvimento full-stack e tecnologias de comunicação em tempo real</p>
            
                <p>Tecnologias Utilizadas:</p>
                <p>WebSockets: Utilizados para estabelecer uma conexão persistente entre o cliente e o servidor, permitindo a troca de mensagens em tempo real com baixa latência.</p>
                <p>JavaScript: A linguagem de programação principal utilizada tanto para a lógica do lado do cliente quanto do servidor.</p>
                <p>Node.js: Utilizado para construir o servidor, fornecendo um ambiente escalável e eficiente para lidar com múltiplas conexões simultaneamente.</p>
                <p>React: Usado para criar uma interface de usuário dinâmica e responsiva, permitindo que os usuários interajam facilmente com a aplicação de chat.</p>

                <p>Funcionalidades:</p>
                <p>Mensagens Instantâneas: Os usuários podem enviar e receber mensagens em tempo real, garantindo comunicação rápida e eficiente.</p>
                <p>Interface de Usuário: Um design limpo e intuitivo, construído com React, proporciona uma experiência suave em diversos dispositivos.</p>
                <p>Escalabilidade: A aplicação pode lidar com múltiplos usuários simultaneamente, graças à arquitetura eficiente proporcionada pelo Node.js e WebSockets.</p>
            </DivSobreProjeto>
        </ContainerHome>
    )
} 

export default WebSockets;