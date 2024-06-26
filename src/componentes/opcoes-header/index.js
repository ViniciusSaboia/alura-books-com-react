import styled from 'styled-components';
const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante']

const Opcoes = styled.ul`
  display: flex;
`
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

function OpcoesHeader(){
    return(
        <Opcoes>
        { textoOpcoes.map((texto) => (
          <Opcao><p>{texto}</p></Opcao>
        ))}
      </Opcoes> 
    )
}

export default OpcoesHeader;