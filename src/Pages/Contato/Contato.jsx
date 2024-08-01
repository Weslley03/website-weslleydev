import { ContainerHome, DivLogo, ImgLogo } from "../Home/HomeStyled";
import { DivSobreProjeto, DivTitulo } from "../WfNews/WfNewsStyled";
import weslleylogo from '../../assets/weslley.png'

function Contato(){
    return(
        <ContainerHome>
            <DivTitulo>
                <DivLogo>
                    <ImgLogo src={weslleylogo} alt='logoWeslley'/>
                </DivLogo>
            </DivTitulo>

            <DivSobreProjeto>
                <p>
                   e-mail: contato@weslleydev.com
                </p>
                <p>
                    telefone: +55 44 999428194
                </p>
            </DivSobreProjeto>
        </ContainerHome>
    )
}

export default Contato;