"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./globals.css";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    // BARRA DE PROGRESSO DE ROLAGEM
    const updateScrollProgress = () => {
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      const progressBar = document.querySelector(".scroll-progress");
      if (progressBar) {
      }
    };

    // OBSERVER PARA TÍTULO DO CATÁLOGO
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // OBSERVER PARA PRODUTOS COM ANIMAÇÕES DIFERENTES
    const productObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Define diferentes animações baseado no índice
            const animations = [
              "fade-in-up",
              "slide-in-left",
              "slide-in-right",
              "zoom-in",
              "bounce-in",
              "rotate-in",
            ];

            // Pega o índice real do produto na lista
            const products = document.querySelectorAll(".produto-item");
            const productIndex = Array.from(products).indexOf(entry.target);
            const animationClass = animations[productIndex % animations.length];

            // Adiciona delay escalonado para efeito em cascata
            setTimeout(() => {
              entry.target.classList.add(animationClass);
            }, productIndex * 150);

            productObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // APLICAR OBSERVERS
    const setupObservers = () => {
      // Observar título do catálogo
      const catalogTitle = document.querySelector(".catalogo");
      if (catalogTitle) {
        titleObserver.observe(catalogTitle);
      }

      // Observar todos os produtos
      const products = document.querySelectorAll(".produto-item");
      products.forEach((product) => {
        // Só adiciona observer se o produto tem conteúdo
        if (product.querySelector("img")) {
          productObserver.observe(product);
        }
      });
    };

    // Event listeners
    window.addEventListener("scroll", updateScrollProgress);

    // Setup inicial com delay para garantir que o DOM está pronto
    setTimeout(setupObservers, 100);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      titleObserver.disconnect();
      productObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* BARRA DE PROGRESSO */}
      <div className="scroll-progress"></div>

      {/* Navbar */}
      <div className={`navbar ${menuAberto ? "show-menu" : ""}`}>
        <div className="header-inner-content">
          <div className="logo">
            <Image
              src="/images/logo_transparente.png"
              alt="Logo"
              width={60}
              height={60}
            />
          </div>

          <nav>
            <ul>
              <li>Home</li>
              <li>Productos</li>
              <li>Sobre</li>
              <li>Contatos</li>
              <li>Conta</li>
            </ul>
          </nav>

          <div className="icons">
            <Image
              src="/images/cart.png"
              alt="Carrinho"
              width={50}
              height={50}
            />
            <Image
              src="/images/menu.png"
              alt="Menu"
              width={50}
              height={50}
              className="menu-icon"
              onClick={() => setMenuAberto(!menuAberto)}
            />
          </div>
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="header--inner--content">
          <div className="header-button-side">
            <div className="button-side-left">
              <h2>Yacloset Seu estilo, sua essência.</h2>
              <p>
                Moda feminina criada para mulheres que valorizam estilo,
                autenticidade e conforto. Nossas coleções combinam tendências
                atuais e qualidade premium, oferecendo peças versáteis para
                todas as ocasiões, do casual ao sofisticado.
              </p>
              <button>Ver agora &#8594;</button>
            </div>

            <div className="button-side-right">
              <Image
                src="/images/intro.jpeg"
                alt="Intro Image"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main - SEÇÃO COM ANIMAÇÕES */}
      <main>
        <div className="gray-background">
          <div className="page-inner-content">
            <h2 className="catalogo">Catálogo de Produtos</h2>

            <div className="produtos">
              {/* Produto 1 - Body Milão */}
              <div className="produto-item">
                <Image
                  src="/images/produto1.jpeg"
                  alt="Body Milão"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Body Milão</h3>
                  <p>Tamanho Único 36-42</p>
                  <p>Tecido Poliamida</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>

              {/* Produto 2 */}
              <div className="produto-item">
                <Image
                  src="/images/produto5.jpeg"
                  alt="Produto 2"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Blusa Elegante</h3>
                  <p>Tamanho Único 36-42</p>
                  <p>Tecido Premium</p>
                  <span>R$ 129,90</span>
                  <button>Comprar</button>
                </div>
              </div>

              {/* Produto 3 - Saia Jessica */}
              <div className="produto-item">
                <Image
                  src="/images/produto3.jpeg"
                  alt="Saia Jessica"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Saia Jessica</h3>
                  <p>Tamanho Único 36-42</p>
                  <p>Tecido Poliamida</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>

              {/* Produto 4 - Saia Gisele */}
              <div className="produto-item">
                <Image
                  src="/images/produto7.jpeg"
                  alt="Saia Gisele"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Saia Gisele</h3>
                  <p>Tamanho Único 36-42</p>
                  <p>Tecido Poliamida</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>

              {/* Produto 5 - Saia Gisele */}
              <div className="produto-item">
                <Image
                  src="/images/produto9.jpeg"
                  alt="Saia Gisele"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Saia Gisele</h3>
                  <p>Tamanho Único 36-42</p>
                  <p>Tecido Poliamida</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>

              <div className="produto-item">
                <Image
                  src="/images/produto10.jpeg"
                  alt="Saia Gisele"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Saia Gisele</h3>
                  <p>Tamanho Único 36-42</p>
                  <p>Tecido Poliamida</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>

              <div className="produto-item">
                <Image
                  src="/images/produto11.jpeg"
                  alt="Saia Gisele"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Saia Gisele</h3>
                  <p>Tamanho Único 36-42</p>
                  <p>Tecido Poliamida</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>

              <div className="produto-item">
                <Image
                  src="/images/produto12.jpeg"
                  alt="Saia Gisele"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Saia Gisele</h3>
                  <p>Tamanho Único 36-42</p>
                  <p>Tecido Poliamida</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="logo-footer">
          <Image
            src="/images/logo_transparente.png"
            alt="Logo"
            width={60}
            height={60}
          />
          </div>
          <p>Yacloset - Moda Feminina</p>
        






        <div className="footer-content">
          <h1>siga-nos</h1>
          <Image
            src="/images/instagram.jpg"
            alt="Instagram"
            width={50}
            height={50}
          /> 
          <Image
            src="/images/whatsapp.jpg"
            alt="Whatsapp"
            width={50}
            height={50}
          />


          </div>

            
 


        <p>© 2023 Yacloset. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
