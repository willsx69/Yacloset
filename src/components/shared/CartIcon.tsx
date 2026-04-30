"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/useCart";

interface CartIconProps {
  showCount?: boolean;
}

export function CartIcon({ showCount = true }: CartIconProps) {
  const { itemCount } = useCart();

  return (
    <Link href="/carrinho" className="cart-icon">
      <Image
        src="/images/cart.png"
        alt="Carrinho"
        width={30}
        height={30}
      />
      {showCount && itemCount > 0 && (
        <span className="cart-count">{itemCount}</span>
      )}
    </Link>
  );
}