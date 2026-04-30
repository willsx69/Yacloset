"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/lib/useCart";

interface CartItemProps {
  item: CartItemType;
}

export function CartItemCard({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <Image
          src={item.image}
          alt={item.name}
          width={120}
          height={150}
        />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        {item.color && <p>Cor: {item.color}</p>}
        {item.size && <p>Tamanho: {item.size}</p>}
        <span className="cart-item-price">
          R$ {item.price.toFixed(2)}
        </span>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-control">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="Diminuir quantidade"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeItem(item.id)}
          className="remove-btn"
          aria-label="Remover item"
        >
          Remover
        </button>
      </div>
    </div>
  );
}