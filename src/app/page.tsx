"use client";

import Image from "next/image";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
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

      {/* Main - SEÇÃO CORRIGIDA */}
      <main>
        <div className="gray-background">
          <div className="page-inner-content">
            <h2 className="catalogo">Catálogo de Produtos</h2>
            
            <div className="produtos">
              <div className="produto-item">
                <Image
                  src="/images/produto1.jpeg"
                  alt="Produto 1"
                  width={250}
                  height={350}
                />
                <div className="descricao1">
                  <h3>Body Milão </h3>
                  <p>Tamanho Unico 36-42</p>
                  <p>Tecido Poliamida </p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>
              
              <div className="produto-item">
                <Image
                  src="/images/produto5.jpeg"
                  alt="Produto 2"
                  width={250}
                  height={350}

                />
                 <div className="descricao1">
                  <h3>Produto 1</h3>
                  <p>Descrição do Produto 1</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>
              
              <div className="produto-item">
                <Image
                  src="/images/produto3.jpeg"
                  alt="Produto 3"
                  width={250}
                  height={350}
                />
                 <div className="descricao1">
                  <h3>Saia Jessica</h3>
                  <p>Tamanho Unico 36-42</p>
                  <p>Tecido Poliamida</p>
                
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>
              
              <div className="produto-item">
                <Image
                  src="/images/produto7.jpeg"
                  alt="Produto 4"
                  width={250}
                  height={350}

                />
                 <div className="descricao1">
                  <h3>Saia Gisele</h3>
                  <p>Tamanho Unico 36-42</p>
                  <p>Tecido Poliamida</p>
                  <span>R$ 99,90</span>
                  <button>Comprar</button>
                </div>
              </div>

              <div className="produto-item">
                
              </div>

              {/* Adicione mais produtos aqui */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}