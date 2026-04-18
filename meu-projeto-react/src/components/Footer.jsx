import { REPO_URL } from '../config/site'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">© {new Date().getFullYear()} — Projeto de estudos em React.</p>
        <a className="site-footer__link" href={REPO_URL} rel="noreferrer noopener" target="_blank">
          Ver repositório
        </a>
      </div>
    </footer>
  )
}

export default Footer
