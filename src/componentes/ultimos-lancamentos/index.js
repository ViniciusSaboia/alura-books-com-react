import CardRecomendacao from '../card-recomendacao.js'
import { Titulo } from '../titulo'
import { livros } from './dados-ultimos-lancamentos'
import  imagemlivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor= '#EB9B00'
                tamanhoTexto = '36px'
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomendacao
                titulo = 'Talvez você se interesse por'
                subtitulo= 'Angular 11'
                descricao= 'Construindo uma aplicação com a plataforma Google'
                img = {imagemlivro}
                alt = 'Imagem Do Livro Angular 11'
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
