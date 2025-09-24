// app/page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="card hero">
        <div className="hero-left">
          <h1 className="title">Gabriel Araújo</h1>
          <p className="subtitle">
            Estagiário em QA (CIn Motorola) · Bacharel em formação, Ciência da Computação — UNICAP
          </p>
          <div className="actions">
            <Link className="btn" href="/forca" prefetch={false}>Jogo da Forca</Link>
            <a className="btn secondary" href="mailto:gabrielsla2022@gmail.com">Contato</a>
          </div>

          <div className="hero-pills">
            <span className="pill">Automação de Testes · Python/Selenium</span>
            <span className="pill">Java · Estruturas de Dados</span>
            <span className="pill">Machine Learning · Data Science</span>
            <span className="pill">Inglês Cambridge (CAE)</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-wrap">
            <Image
              src="/me.jpg"
              alt="Foto de Gabriel Araújo"
              width={200}
              height={200}
              className="avatar"
              priority
            />
          </div>
        </div>
      </section>

      {/* BLOCO ACADÊMICO + ESTÁGIO */}
      <section className="grid">
        <div className="card">
          <h2 className="section-title">Acadêmico — UNICAP</h2>
          <div className="kv">
            <div>Curso</div>
            <div>Ciência da Computação</div>

            <div>Disciplinas atuais</div>
            <div className="tags">
              <span className="tag">Estruturas de Dados (Java)</span>
              <span className="tag">Engenharia de Software</span>
              <span className="tag">Banco de Dados (SQL)</span>
              <span className="tag">Robótica</span>
              <span className="tag">Estatística</span>
            </div>

            <div>Fundamentos de base</div>
            <div className="tags">
              <span className="tag">Cálculo</span>
              <span className="tag">Álgebra Linear</span>
              <span className="tag">Geometria Analítica</span>
              <span className="tag">Métodos Numéricos</span>
              <span className="tag">Física Geral</span>
              <span className="tag">Sistemas Digitais</span>
              <span className="tag">Arquitetura & SO</span>
              <span className="tag">Compiladores</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="section-title">Estágio — CIn Motorola (Regression Testing)</h2>
          <ul className="list">
            <li>Automação de testes com <strong>Python + Selenium</strong>.</li>
            <li>Testes funcionais e de regressão, foco em qualidade contínua.</li>
            <li>Ampliar cobertura, suites estáveis e relatórios.</li>
          </ul>

          <h3 className="section-sub">Stack & Ferramentas</h3>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">Selenium</span>
            <span className="tag">PyTest</span>
            <span className="tag">Java</span>
            <span className="tag">SQL</span>
            <span className="tag">Git</span>
            <span className="tag">React/Next</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO NOVA: RESUMO POR CATEGORIAS */}
      <section className="card section">
        <h2 className="section-title">Resumo por Categorias</h2>
        <div className="cats">
          <div className="cat">
            <div className="cat-title">Universidade</div>
            <ul className="list">
              <li>UNICAP — Ciência da Computação</li>
              <li>Rotina: manhã (7:30–12:50), revisões rápidas entre aulas</li>
            </ul>
          </div>

          <div className="cat">
            <div className="cat-title">Disciplinas</div>
            <div className="tags">
              <span className="tag">ED (Java)</span>
              <span className="tag">Eng. de Software</span>
              <span className="tag">BD (SQL)</span>
              <span className="tag">Robótica</span>
              <span className="tag">Estatística</span>
            </div>
          </div>

          <div className="cat">
            <div className="cat-title">Estágio</div>
            <ul className="list">
              <li>CIn Motorola — Regression Testing</li>
              <li>Automação (Python/Selenium), análise de falhas, documentação</li>
            </ul>
          </div>

          <div className="cat">
            <div className="cat-title">Stack</div>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">Selenium</span>
              <span className="tag">PyTest</span>
              <span className="tag">Java</span>
              <span className="tag">SQL</span>
              <span className="tag">Git</span>
              <span className="tag">React/Next</span>
            </div>
          </div>

          <div className="cat">
            <div className="cat-title">Rotina</div>
            <ul className="list">
              <li>Tarde: Estágio QA</li>
              <li>Noite: Estudos dirigidos + Cambridge + ML (dias específicos)</li>
              <li>Treinos: academia/jiu-jitsu ~1h (hipertrofia, força, resistência)</li>
            </ul>
          </div>

          <div className="cat">
            <div className="cat-title">Projetos</div>
            <ul className="list">
              <li>Portfólio em Next.js + Forca (Pokémon)</li>
              <li>Suites de regressão em Selenium</li>
              <li>ML — Joel Grus + exercícios</li>
            </ul>
          </div>

          <div className="cat">
            <div className="cat-title">Metas 2025</div>
            <ul className="list">
              <li>Consolidar Java (ED) e Eng. de Software</li>
              <li>Elevar maturidade em QA (pirâmide, ambientes, relatórios)</li>
              <li>Projetos pequenos de ML — bem documentados</li>
              <li>CAE (Cambridge): prática diária</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
