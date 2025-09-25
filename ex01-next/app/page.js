// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="card hero">
        <div className="hero-left">
          <h1 className="title">Gabriel de Souza Leão Araújo</h1>
          <p className="subtitle">
            Software Tester · Computer Science Student (UNICAP) · Python, Java & SQL ·
            Interested in Software Quality, Data Science & Automation · FCE (B2) Certified
          </p>

          <div className="hero-pills">
            <span className="pill">QA & Test Automation</span>
            <span className="pill">Python / Selenium</span>
            <span className="pill">Java · Estruturas de Dados</span>
            <span className="pill">Data Science / ML</span>
            <span className="pill">FCE Cambridge (B2)</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-wrap">
            <Image
              src="/me.jpg"           
              alt="Gabriel Araújo"
              width={200}
              height={200}
              className="avatar"
              priority
            />
          </div>
        </div>
      </section>

      <section className="card section">
        <h2 className="section-title">About</h2>
        <p style={{ opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
          I am a Computer Science student at the Catholic University of Pernambuco (UNICAP), currently in the 5th semester.
          I have experience as a Software Tester at Motorola (CIn/Motorola Project), with knowledge in Python, C, Java, and SQL.
          Passionate about software quality and technology, eager to learn more about computing, improve teamwork, and apply my skills in real projects.
          Certified in FCE Cambridge (B2 English).
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-head">
                <strong>Software Tester — Projeto CIn/Motorola</strong>
                <span className="tl-meta">Part-time · Aug 2025 — Present</span>
              </div>
              <ul className="list">
                <li>Writing and executing test cases.</li>
                <li>Working with <strong>Python</strong> for test automation.</li>
                <li>Identifying and reporting bugs.</li>
                <li><strong>Collaboration</strong> with development team to improve software quality.</li>
                <li><strong>Software Quality</strong>.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="kv">
            <div>University</div>
            <div>
              <strong>Universidade Católica de Pernambuco (UNICAP)</strong> — BSc Computer Science<br/>
              Aug 2023 — Aug 2027
            </div>

            <div>Certification</div>
            <div>
              <strong>Monitoria em Disciplina de Cálculo 1, 2 e 3</strong> — UNICAP (Issued Aug 2024)
            </div>

            <div>Certification</div>
            <div>
              <strong>First Cambridge Exam (FCE)</strong> — English Certification<br/>
            </div>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2 className="section-title">Top Skills</h2>
        <div className="tags">
            <span className="tag">Java</span>
            <span className="tag">Python</span>
            <span className="tag">Git</span>
            <span className="tag">Software Testing</span>
            <span className="tag">Test Automation</span>
            <span className="tag">SQL</span>
            <span className="tag">C</span>
            <span className="tag">Selenium</span>
          </div>
        </div>

        <div className="card">
          <h2 className="section-title">Languages</h2>
          <div className="kv">
            <div>English</div>
            <div>Professional working proficiency (FCE – B2)</div>
            <div>Português</div>
            <div>Native or bilingual proficiency</div>
          </div>
        </div>
      </section>

      <section className="card section">
        <h2 className="section-title">Main Goal</h2>
        <ul className="list">
          <li>Studying Computer Science (UNICAP)</li>
          <li>Focus on <strong>Python</strong> Development</li>
          <li>Also studying: <strong>Python, C, Java e SQL</strong></li>
          <li>Exploring <strong>Automatized Tests</strong> and Clean Codes on Softwares</li>
          <li>Exploring <strong>Machine Learning</strong> e Data Science</li>
        </ul>
      </section>

      <section className="card section">
        <h2 className="section-title">Also Reading</h2>
        <ul className="list">
          <li>Reading <em>Data Science do Zero</em> — Joel Grus</li>
          <li>Reading <em>Mãos à Obra: Aprendizado de Máquina</em> — Aurélien Géron</li>
          <li>Reading <em>Artificial Intelligence</em> — Stuart Russell</li>
          <li>Read <em>Foundations of Software Testing (ISTBQ)</em> — Dorothy Graham ✅</li>
          <li>Reading <em>Design Patterns</em> — Erich Gamma</li>
        </ul>
      </section>
    </main>
  );
}
