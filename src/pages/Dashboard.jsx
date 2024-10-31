import { Link, Outlet } from "react-router-dom"
import './Dashboard.css'

const Dashboard = () => {
  return (
    <main className="dashboard">
      <aside>
        <Link to='services'>Servicios</Link>
        <Link to='contact'>Contacto</Link>
        <Link to='about'>Acerca de</Link>
        <Link to='/'>Cerrar Sesión</Link>
      </aside>
      <section>
        <span className="glass"></span>
        <Outlet />
      </section>
    </main>
  )
}

export default Dashboard