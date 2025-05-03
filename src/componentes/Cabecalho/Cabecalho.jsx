import { Link } from 'react-router-dom'

import style from './Cabecalho.module.css'

const Cabecalho = () => {
    return(
        <div className={style.Cabecalho}>
            <Link to='/'>
                <h1>
                    <span>To do </span>
                    List
                </h1>
            </Link>

            <Link to='/sobre-nos'>Sobre nós</Link>
        </div>
    );
};

export {Cabecalho};