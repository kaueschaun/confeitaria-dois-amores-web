import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const routeGuard = (request: NextRequest) => {
  const token = request.cookies.get('token')?.value;

  const protectedRoutes = ['/inicial', '/produtos'];
  
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/entrar', request.url));
  }

  if (request.nextUrl.pathname === '/entrar' && token) {
    return NextResponse.redirect(new URL('/inicial', request.url));
  }

  return NextResponse.next();
};
