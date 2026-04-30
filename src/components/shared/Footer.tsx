import Image from "next/image";

interface FooterProps {
  year?: number;
}

export function Footer({ year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo-footer">
          <Image src="/images/logo_transparente.png" alt="Yacloset Logo" width={80} height={80} unoptimized />
        </div>
        <div className="siga">
          <p>siga-nos</p>
        </div>
        <div className="footer-links">
          <a href="#">
            <Image src="/images/instagram.jpg" alt="Instagram" width={30} height={30} unoptimized />
          </a>
          <a href="#">
            <Image src="/images/whatsapp.jpg" alt="WhatsApp" width={30} height={30} unoptimized />
          </a>
        </div>
        <p>© {year} Yacloset. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}