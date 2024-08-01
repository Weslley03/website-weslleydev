import { ContainerHome } from "../Home/HomeStyled";
import { DivImagem, ImgProjeto } from "../WebSockets/WebSocketsStyled";
import { DivSobreProjeto, DivTitulo } from "../WfNews/WfNewsStyled";
import imageProject from '../../assets/streaming.png'

function VideoStreaming(){
    return(
        <ContainerHome>
            <DivTitulo>
                <h1 style={{color:"#c4c4c"}}>Video Streaming</h1>
                <a href="https://github.com/Weslley03/video-streaming" target="_blank">github.com/weslley03/video-streaming</a>
            </DivTitulo>

            <DivImagem>
                <ImgProjeto src={imageProject} className="d-block w-100"/>
            </DivImagem>

            <DivSobreProjeto    >
                <p className="resumo">Desenvolvi um esquema de transmissão de vídeo que otimiza o desempenho do servidor ao enviar vídeos em partes, utilizando Node.js e Express. Esta abordagem permite uma entrega mais eficiente e rápida de conteúdo multimídia, garantindo uma experiência de usuário superior.</p>
            
                <p>Tecnologias Utilizadas:</p>
                <p>WNode.js: Utilizado para a leitura e gerenciamento de arquivos de vídeo, permitindo o envio de dados em pedaços, o que reduz a carga no servidor.</p>
                <p>Express: Framework usado para criar a API que gerencia as requisições de streaming e responde de forma rápida e eficiente.</p>
                <p>Node.js: Utilizado para construir o servidor, fornecendo um ambiente escalável e eficiente para lidar com múltiplas conexões simultaneamente.</p>
                <p>React: Usado para criar uma interface de usuário dinâmica e responsiva, permitindo que os usuários interajam facilmente com a aplicação de chat.</p>

                <p>Funcionalidades:</p>
                <p>Streaming de Vídeo em Partes: O servidor envia apenas os pedaços necessários do vídeo, em vez de transmitir o arquivo completo, melhorando a performance e reduzindo a latência.</p>
                <p>Eficiência de Rede: Ao evitar o envio do tamanho total do vídeo, a solução reduz o uso de largura de banda e acelera o tempo de carregamento.
                Experiência do Usuário: Proporciona uma reprodução de vídeo contínua e sem interrupções, mesmo em condições de rede variáveis.</p>
            </DivSobreProjeto>
        </ContainerHome>
    )
} 

export default VideoStreaming;