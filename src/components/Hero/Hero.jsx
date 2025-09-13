import React from 'react'
import './hero.css'

const hero = () => {
  return (
    <section className="dashboard">
      <h2>Bem-vindo, Luca</h2>
        <div className="cards">
          <div className="card">💰 Saldo Atual: R$ 15.200</div>
          <div className="card">📈 Rentabilidade: +12%</div>
          <div className="card">📊 Investimentos: 8 ativos</div>
          <div className="card">🎯 Meta: R$ 5.000 (80%)</div>
        </div>  
    </section>    
        
    
  )
}

export default hero