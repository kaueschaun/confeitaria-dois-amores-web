'use client';

import { type FC } from 'react';
import { Product } from '../../../types/product';
import { Clock, MapPin, Flame } from 'lucide-react';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
    product: Product;
}

const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
};

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }) + ' ' + date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.isTrending && (
                    <span className={styles.badge}>
                        <Flame size={14} />
                        Em alta
                    </span>
                )}
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>

                <div className={styles.meta}>
                    <span>
                        <Clock size={14} />
                        {formatDate(product.createdAt)}
                    </span>
                    <span>
                        <MapPin size={14} />
                        {product.deliveryLocation}
                    </span>
                </div>

                <div className={styles.footer}>
                    <span className={styles.price}>{formatPrice(product.price)}</span>
                    <button className={styles.addButton}>Adicionar</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
