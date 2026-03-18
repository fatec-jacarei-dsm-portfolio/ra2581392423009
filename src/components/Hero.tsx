import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="hero" id="sobre">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">DESENVOLVIMENTO DE SOFTWARE MULTIPLATAFORMA</span>
          <h1 className="hero-title">
            Portfólio com foco em <span>automação</span>, software e soluções digitais.
          </h1>

          <p className="hero-description">
            Meu nome é Igor Lima, tenho 28 anos e curso Desenvolvimento de Software
            Multiplataforma na FATEC Jacareí. Atuo com automação de processos, RPA,
            integração com APIs e desenvolvimento de soluções com foco em produtividade,
            estrutura e resultado.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos
            </a>
            <a className="button button-secondary" href="#contato">
              Entrar em contato
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric-card">
              <strong>RPA</strong>
              <span>Automação de processos</span>
            </div>
            <div className="metric-card">
              <strong>Python</strong>
              <span>Integrações e produtividade</span>
            </div>
            <div className="metric-card">
              <strong>Web</strong>
              <span>Interfaces modernas e responsivas</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="glow glow-1" />
          <div className="glow glow-2" />
          <div className="profile-card">
            <img
              src={`${import.meta.env.BASE_URL}profile/foto-perfil.png`}
              alt="Foto de Igor Lima"
              className="profile-image"
            />
            <div className="profile-card-text">
              <p className="profile-name">Igor Lima</p>
              <p className="profile-role">RPA • Python • APIs • Desenvolvimento Web</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}