"use client";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  links?: { label: string; href: string }[];
}

export function Navbar({ links = [
  { label: "Home", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contatos", href: "/contatos" },
  { label: "Conta", href: "/perfil" },
] }: NavbarProps) {
  return (
    <div className="navbar">
      <div className="header-inner-content">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo_transparente.png"
              alt="Logo"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <nav>
          <ul>
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="icons">
          <Link href="/perfil">
            <Image
              src="/images/cart.png"
              alt="Carrinho"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/carrinho">
            <Image
              src="/images/menu.png"
              alt="Menu"
              width={50}
              height={50}
              className="menu-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}