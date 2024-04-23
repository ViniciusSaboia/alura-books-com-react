import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './style.css'
const iconeOpcoes = [perfil, sacola]

function IconesHeader () {
    return(
        <ul className='icones'>
        { iconeOpcoes.map((icone) => (
          <li className='icone'><img src={icone} alt=''></img></li>
        ))}
      </ul> 
    )
}
export default IconesHeader;