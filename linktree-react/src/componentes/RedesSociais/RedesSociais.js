import './RedesSociais.css'

const RedesSociais = () => {
    
    const ListaRedes = [
        { id: 1, urlNome: 'Instagram' , url: '//https://www.instagram.com/italomauricio1/' }
    ]
    const LinkRedes = ListaRedes.map((props) => 
        <div key={props.id} className='conteudo_links' >
                <a href={props.url}>{props.urlNome}</a>
        </div>
    )
    
    return (
        <></>
    )
}

export default RedesSociais;