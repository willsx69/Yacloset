"use client";
import React from "react";

import Image from "next/image";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./style.css";



export default function Comprar() {
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
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const animations = [
            "fade-in-up",
            "slide-in-left",
            "slide-in-right",
            "zoom-in",
            "bounce-in",
            "rotate-in",
          ];
          const products = document.querySelectorAll(".produto-item");
          const idx = Array.from(products).indexOf(entry.target);
          const animationClass = animations[idx % animations.length];

          setTimeout(() => {
            entry.target.classList.add(animationClass);
          }, idx * 150);

          productObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const setupObservers = () => {
      const catalogTitle = document.querySelector(".catalogo");
      if (catalogTitle) titleObserver.observe(catalogTitle);

      const products = document.querySelectorAll(".produto-item");
      products.forEach((product) => {
        if (product.querySelector("img")) {
          productObserver.observe(product);
        }
      });
    };

    window.addEventListener("scroll", updateScrollProgress);
    setTimeout(setupObservers, 100);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      titleObserver.disconnect();
      productObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="navbar">
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
              <a href="http://127.0.0.1:3000/comprar">
                {" "}
                <li>Home</li>{" "}
              </a>
              <li>Produtos</li>
              <li>Sobre</li>
              <li>Contatos</li>
              <li>Conta</li>
            </ul>
          </nav>
          <div className="icons">
            <a href="/perfil">
              <Image
                src="/images/cart.png"
                alt="Carrinho"
                width={30}
                height={30}
              />
            </a>
            <a href="/carrinho">
              <Image
                src="/images/menu.png"
                alt="Menu"
                width={50}
                height={50}
                className="menu-icon"
              />
            </a>
          </div>
        </div>
      </div>

      <header>
        <div className="header-inner-content">
          <div className="header-button-side">
            <div className="button-side-left">
              <div className="text-white text-[1px] w-full max-w-[1280px] mx-auto sticky top-[50px]">
                <Carousel
                  infiniteLoop={true}
                  showIndicators={false}
                  showStatus={false}
                  thumbWidth={50}
                  className="productCarousel"
                >
                  <img
                    src="/images/produto3.jpeg"
                    alt=""
                    style={{
                      marginTop: "-2.5%",
                      marginLeft: "-10%",
                      width: "125%",
                    }}
                  />
                  

                  <img
                    src="/images/produto4.jpeg"
                    alt=""
                    style={{ marginLeft: "-10%", width: "125%" }}
                  />

                  {/* Adicione mais imagens conforme necessário */}
                </Carousel>
              </div>
            </div>
            <div className="side-left">
              <h3>Body Milão</h3>
              <p>Tamanho Único 36-42</p>
              <p>Tecido Poliamida</p>
              <span>R$ 99,90</span>
              

              <br />
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div className="footer-content">
          <div className="logo-footer">
            <img src="/images/logo_transparente.png" alt="Yacloset Logo" />
          </div>
          <div className="siga">
            <p>siga-nos</p>
          </div>
          <div className="footer-links">
            <a href="#">
              <img src="/images/instagram.jpg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/whatsapp.jpg" alt="WhatsApp" />
            </a>
          </div>

          <p>© 2023 Yacloset. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
