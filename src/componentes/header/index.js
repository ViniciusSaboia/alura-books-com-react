import Logo from '../../componentes/logo'
import OpcoesHeader from '../opcoes-header';
import IconesHeader from '../icones-header';
import './style.css'

function Header(){
    return(
        <header className='App-header'>
        <Logo/> 
        <OpcoesHeader/>
        <IconesHeader/>
      </header>
    )
}
export default Header;