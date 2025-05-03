import style from './Rodape.module.css'

const Rodape = (props) => {
    const { criador } = props;
    
    const anoAtual =  new Date().getFullYear()
    
    return(
        <footer className={style.Rodape}>
                React Básico - {anoAtual} - {criador}
        </footer>
    )
}

export {Rodape}

