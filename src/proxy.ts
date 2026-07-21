import { routeGuard } from './middlewares/routeGuard';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  return routeGuard(request);
}

export const config = {
  matcher: ['/inicial/:path*', '/produtos/:path*', '/entrar'],
};
