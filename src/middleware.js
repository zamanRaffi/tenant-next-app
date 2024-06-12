import { NextResponse } from "next/server"
// import { getSession } from 'next-auth/react';
 

export async function middleware(request) {
 
  const path = request.nextUrl.pathname ;


  const isPublicPath = path === '/login' ||   path ==='/signup';

  const token = request.cookies.get('token')?.value || '';
  // const session = await getSession({ req: request });

  if(isPublicPath && token ){
    return NextResponse.redirect(new URL('/profile', request.nextUrl))
  }

  if(!isPublicPath && !token ){
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }


}


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile',
    '/login',
    '/signup', 
    '/profile/:path*'
  ]
}