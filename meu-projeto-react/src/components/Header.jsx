import { PAGES_URL, REPO_URL } from '../config/site'
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo
      </a>
      <div className="site-header__inner">
        <a className="site-header__brand" href="#topo">
          <span className="site-header__mark" aria-hidden="true" />
          meu-projeto-react
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          <a href="#sobre">Sobre</a>
          <a href={REPO_URL} rel="noreferrer noopener" target="_blank">
            Código no GitHub
          </a>
          <a
            className="site-header__cta"
            href={PAGES_URL}
            rel="noreferrer noopener"
            target="_blank"
          >
            Site publicado
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
