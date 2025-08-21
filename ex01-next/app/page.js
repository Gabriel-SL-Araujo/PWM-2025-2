// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
      <h1>Gabriel Araújo</h1>
      <Image
        src="/me.jpg"
        alt="Foto Gabriel Araújo"
        width={200}
        height={200}
        style={{ borderRadius: "50%" }}
      />
      <p>Sou estudante de Ciência da Computação, apaixonado por tecnologia e aprendizado constante.</p>
      <p>Atualmente desenvolvendo projetos em programação e explorando áreas como testes de software e machine learning.</p>
    </main>
  );
}
