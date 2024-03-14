
import { NextResponse } from 'next/server'
 

export function middleware(request) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get("token")?.value || ''
  const isPublic = path === '/' || path === '/login' || path === '/signup' || path ==='/verifyemail' || path === '/resetpassword' || path === '/forgotpassword'

  if(isPublic && token){
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }
  if(!isPublic && !token){
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
}
 
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/dashboard',
    '/verifyemail',
    '/forgotpassword',
    '/resetpassword',
    '/dashboard/:path*',
  ]
}