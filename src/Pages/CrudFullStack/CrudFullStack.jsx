import { ContainerHome } from "../Home/HomeStyled";
import { DivImagem, ImgProjeto } from "../WebSockets/WebSocketsStyled";
import { DivSobreProjeto, DivTitulo } from "../WfNews/WfNewsStyled";
import imageProject from '../../assets/crudfullstack.png'

function CrudFullStack(){
    return(
        <ContainerHome>
            <DivTitulo>
                <h1 style={{color:"#c4c4c4"}}> CRUD-FullStack-Node-React-MySQL </h1>    
                <a href="https://github.com/Weslley03/CRUD-Full-Stack-com-Node-React-MySQL" target="_blank">github.com/weslley03/crud-full-stack-nodejs-react-mysql</a>
            </DivTitulo>

            <DivImagem>
                <ImgProjeto src={imageProject} className="d-block w-100"/>
            </DivImagem>

            <DivSobreProjeto>
                <p className="resumo">Desenvolvi uma aplicação CRUD (Create, Read, Update, Delete) simples e altamente escalável, utilizando uma combinação de tecnologias modernas para garantir eficiência e persistência de dados. Este projeto demonstra minha habilidade em construir aplicações completas com um foco na escalabilidade e na experiência do usuário</p>
            
                <p>Tecnologias Utilizadas:</p>
                <p>JavaScript: Linguagem principal usada para a lógica de desenvolvimento tanto no front-end quanto no back-end.</p>
                <p>React: Biblioteca utilizada para criar interfaces de usuário interativas e responsivas, garantindo uma navegação fluida.</p>
                <p>Node.js: Utilizado no back-end para gerenciar as operações do servidor e interações com o banco de dados.</p>
                <p>MySQL: Banco de dados relacional escolhido para garantir a persistência e consistência dos dados da aplicação.</p>
                <p>React Toastify: Implementado para fornecer notificações elegantes e intuitivas, melhorando a experiência do usuário ao informar sobre ações do sistema.</p>

                <p>Funcionalidades:</p>
                <p>CRUD Completo: Permite a criação, leitura, atualização e exclusão de dados de forma eficiente, assegurando a integridade e persistência das informações.</p>
                <p>ENotificações em Tempo Real: Com o React Toastify, os usuários recebem feedback imediato sobre suas ações, tornando a interação mais agradável e clara.</p>
                <p>Escalabilidade: Estruturada para crescer e se adaptar a um aumento no volume de dados e usuários, mantendo a performance e a estabilidade.</p>
            </DivSobreProjeto>
        </ContainerHome>
    )
} 

export default CrudFullStack;