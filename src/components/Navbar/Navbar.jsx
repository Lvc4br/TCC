import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src="/logo-aureus.png" alt="Aureus Logo" />
        </div>

        {/* Menu Desktop */}
        <ul className="nav-links">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Investimentos</a></li>
            <li><a href="#">IA Assistente</a></li>
            <li><a href="#">Metas</a></li>
            <li><a href="#">Configurações</a></li>
        </ul>

        {/* Ações do Usuário */}
        <div className="nav-actions">
            
            <div className="user-profile">
            <img src="/user-avatar.png" alt="Usuário" className="avatar" />
            </div>
        </div>

        {/* Botão Hamburguer Mobile */}
        <div className="hamburger">
            
        </div>
    </nav>
  )
}

export default Navbar