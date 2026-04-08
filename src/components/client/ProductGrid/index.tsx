'use client';

import { useEffect, useState, type FC } from 'react';
import { Product } from '../../../types/product';
import ProductCard from '../ProductCard';
import styles from './ProductGrid.module.scss';

const CATEGORIES = ['Todos', 'Bolos', 'Cupcakes', 'Macarons', 'Tortas', 'Brownies', 'Donuts', 'Sobremesas'];

const ProductGrid: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [loading, setLoading] = useState(true);

    const fetchProducts = async (category: string) => {
        setLoading(true);
        try {
            const params = category !== 'Todos' ? `?category=${category}` : '';
            const response = await fetch(`/api/products${params}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(activeCategory);
    }, [activeCategory]);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className={styles.container}>

            <div className={styles.categories}>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        className={cat === activeCategory ? styles.categoryPillActive : styles.categoryPill}
                        onClick={() => handleCategoryClick(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <h2 className={styles.sectionTitle}>Produtos próximos a você</h2>

            {loading ? (
                <div className={styles.loading}>Carregando produtos...</div>
            ) : products.length === 0 ? (
                <div className={styles.empty}>Nenhum produto encontrado nessa categoria.</div>
            ) : (
                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
