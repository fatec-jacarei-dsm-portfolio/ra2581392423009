import { SocialLinks } from './SocialLinks'

export function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="brand">
          <span className="brand-badge">IL</span>
          <div>
            <p className="brand-title">Igor Lima</p>
            <p className="brand-subtitle">Portfólio Profissional</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Atuação</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <SocialLinks />
      </div>
    </header>
  )
}