import Logo from '../../componentes/logo'
import OpcoesHeader from '../opcoes-header';
import IconesHeader from '../icones-header';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;

`

function Header(){
    return(
        <HeaderContainer>
          <Logo/> 
          <OpcoesHeader/>
          <IconesHeader/>
      </HeaderContainer>
    )
}
export default Header;