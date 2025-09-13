import React from 'react'
import './graficos.css'

const graficos = () => {
  return (
    <section className="graficos">
      <h2>Gráficos de Investimentos</h2>
      <div className="chart">
        <h3>Rentabilidade Mensal</h3>
        <img src="https://via.placeholder.com/600x300?text=Gráfico+de+Rentabilidade" alt="Gráfico de Rentabilidade" />
      </div>
      <div className="chart">
        <h3>Distribuição de Ativos</h3>
        <img src="https://via.placeholder.com/600x300?text=Gráfico+de+Distribuição+de+Ativos" alt="Gráfico de Distribuição de Ativos" />
      </div>
    </section>
  )
}

export default graficos