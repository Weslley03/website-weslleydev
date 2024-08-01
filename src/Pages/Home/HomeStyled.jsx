import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 65%;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 0.5rem;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2px solid #c4c4c4;

    background-color: #0c0c0c;

    @media (max-width: 1056px) {
    width: 90%;
    padding: 1rem;
  } 
`

export const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinha os itens verticalmente ao centro */
  width: 100%;
  padding: 0.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    
    //background-color: yellow;

    @media (max-width: 900px) {
    margin-bottom: 1rem;
  }
`

export const DivLinks = styled.div`
    display: flex;
    align-items: center;
    
    //background-color: green;
`

export const ImgLogo = styled.img`
    height: 90px;
    width: 90px;
    padding: 1rem;

    cursor: pointer;
    border-radius: 2rem;
`

export const DivSeparacaoWelcome = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const DivParteTextual = styled.div`
    display: flex;
    max-width: 70%;

    @media (max-width: 900px) {
    max-width: 100%;
    flex-direction: column;
  }
`

export const DivTexto = styled.div`
    padding: 1rem;
    h1{
        color: #c4c4c4;
        font-size: 100px;
        
        @media (max-width: 900px) {
      font-size: 50px;
    }
    }

    p{
        color: #c4c4c4;
        font-size: 20px;
    }
`

export const DivWelcome = styled.div`
    display: flex;  
    width: 100%;
    margin-top: 1px;   
    padding: 0.5rem;

    @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const DivProjetos = styled.div`
    padding: 1rem;
    display: flex;
    left: 10%;

    @media (max-width: 900px) {
    left: 0;
    flex-direction: column;
    //align-items: center;
  } 
`

export const DivOpcoes = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        color: #c4c4c4;
        font-size: 80px;

        @media (max-width: 900) {
      font-size: 40px;
    }
    }

    span{
        color: #c4c4c4;
        font-size: 20px;
    }
`

export const DivFooter = styled.div`
    padding: 0.2rem;

    p{
        color: #c4c4c4;
        font-size: 20px;
    }
`

