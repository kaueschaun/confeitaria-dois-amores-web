import { http, HttpResponse } from 'msw';
import { mockProducts } from './data/products';

export const handlers = [
    http.get('/api/products', ({ request }) => {
        const url = new URL(request.url);
        const category = url.searchParams.get('category');

        let products = mockProducts;

        if (category && category !== 'Todos') {
            products = mockProducts.filter((p) => p.category === category);
        }

        return HttpResponse.json(products);
    }),

    http.get('/api/products/:id', ({ params }) => {
        const { id } = params;
        const product = mockProducts.find((p) => p.id === id);

        if (!product) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(product);
    }),
];
