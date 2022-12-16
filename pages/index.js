import react from "react";
import reactDom from "react-dom";
import './index.css';

function Home() {

    return (
        <html>
          <head>
            <title>Meu Portfólio</title>
            <style>
              /* Adicione seu próprio estilo aqui */
            </style>
          </head>
          <body>
            <header>
              <h1>Meu Portfólio</h1>
              <nav>
                <ul>
                  <li><a href="#sobre-mim">Sobre Mim</a></li>
                  <li><a href="#projetos">Projetos</a></li>
                  <li><a href="#contato">Contato</a></li>
                </ul>
              </nav>
            </header>
            <main>
              <section id="sobre-mim">
                <h2>Sobre Mim</h2>
                <p>Eu sou um desenvolvedor de software com experiencia em linguagens X, Y e Z. Eu amo resolver problemas complexos e trabalhar em equipe. Além disso, gosto de aprender coisas novas e estou sempre procurando novas oportunidades de crescimento pessoal e profissional.</p>
              </section>
              <section id="projetos">
                <h2>Projetos</h2>
                <h3>Projeto 1</h3>
                <p>Descrição do projeto 1</p>
                <h3>Projeto 2</h3>
                <p>Descrição do projeto 2</p>
                <!-- Adicione mais projetos aqui -->
              </section>
              <section id="contato">
                <h2>Contato</h2>
                <p>Você pode me contatar através do meu email: <a href="mailto:meuemail@exemplo.com">meuemail@exemplo.com</a></p>
              </section>
            </main>
            <footer>
              <p>Copyright © 2022 Meu Nome</p>
            </footer>
          </body>
        </html>
         
    )
}

export default Home