import { NextResponse, NextRequest } from 'next/server'

const MAINTENANCE_MODE = true // ganti false kalau selesai

export function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE && !request.nextUrl.pathname.startsWith('/maintenance')) {
    return NextResponse.rewrite(new URL('/maintenance', request.url))
  }
}