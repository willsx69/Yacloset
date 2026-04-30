"use client";

import { useState } from "react";
import { useCart } from "@/lib/useCart";
import { CartItemCard } from "@/components/ui/CartItem";
import { Navbar } from "@/components/shared";
import Link from "next/link";

export default function CartPage() {
  const { items, total, itemCount, clearCart, isLoaded } = useCart();
  const [couponCode, setCouponCode] = useState("");

  if (!isLoaded) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <h1>Seu Carrinho</h1>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Seu carrinho está vazio</p>
            <Link href="/" className="shop-btn">
              Comprar Agora
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <section className="cart-items">
              <h2>Todos os Itens ({itemCount})</h2>
              {items.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Resumo do Pedido</h2>
              <div className="coupon-section">
                <input
                  type="text"
                  placeholder="Código do cupom"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button>Aplicar</button>
              </div>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Frete</span>
                <span>Grátis</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="checkout-btn">
                Finalizar Compra
              </Link>
              <button onClick={clearCart} className="clear-cart-btn">
                Limpar Carrinho
              </button>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}