import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="encabezado">
            <Link className='enlace' to="/dashboard">Iniciar Sesión</Link>
        </header>
    )
}

export default Header