import heroImg from '../assets/hero.png'
import './Main.css'

const LINKS = [
  {
    title: 'Documentação React',
    href: 'https://react.dev',
    blurb: 'Aprenda hooks, componentes e o ecossistema moderno.',
  },
  {
    title: 'Guia Vite',
    href: 'https://vite.dev/guide/',
    blurb: 'Build rápido, HMR e otimização para produção.',
  },
  {
    title: 'GitHub Pages',
    href: 'https://docs.github.com/pages',
    blurb: 'Hospede sites estáticos direto do repositório.',
  },
]

function Main() {
  return (
    <main id="conteudo-principal" className="site-main" tabIndex={-1}>
      <section
        id="topo"
        className="hero-panel"
        aria-labelledby="titulo-principal"
      >
        <div className="hero-panel__visual">
          <img
            src={heroImg}
            alt=""
            width={320}
            height={200}
            className="hero-panel__img"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="hero-panel__copy">
          <p className="hero-panel__eyebrow">React + Vite</p>
          <h1 id="titulo-principal">Bem-vindo ao seu projeto</h1>
          <p className="hero-panel__lead">
            Base limpa para evoluir com componentes, rotas e deploy no{' '}
            <strong>GitHub Pages</strong> — tema claro/escuro já respeita as
            preferências do sistema.
          </p>
        </div>
      </section>

      <section id="sobre" className="cards" aria-labelledby="sec-recursos">
        <h2 id="sec-recursos" className="cards__title">
          Por onde continuar
        </h2>
        <ul className="cards__grid">
          {LINKS.map((item) => (
            <li key={item.href}>
              <a
                className="cards__card"
                href={item.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                <span className="cards__card-title">{item.title}</span>
                <span className="cards__card-blurb">{item.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
