import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Baki saare checks ko abhi skip karo aur direct aage jaane do
  return NextResponse.next();
}