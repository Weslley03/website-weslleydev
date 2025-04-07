import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 65%;
  padding: 0.5rem;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 2px solid #c4c4c4;
  background-color: #0c0c0c;

  @media (max-width: 1056px) {
    width: 90%;
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  margin-top: 22px;
  margin-bottom: 22px;
`;

const Label = styled.label`
  color: #c4c4c4;
  font-size: 22px;
`;

function Contato(){
    return(
        <Container>
            <Content>
                <Label> contato@weslleydev.com </Label>
            </Content>
            <Content>
                <Label> +55 44 999428194 </Label>
            </Content>
        </Container>
    )
}

export default Contato;