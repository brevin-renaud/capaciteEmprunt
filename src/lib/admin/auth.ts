import { NextRequest } from 'next/server';

export const ADMIN_TOKEN_COOKIE = 'admin_token';
const TOKEN_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24h

function generateToken(): string {
  const timestamp = Date.now();
  const payload = `${process.env.ADMIN_PASSWORD}:${timestamp}`;
  return Buffer.from(payload).toString('base64');
}

function verifyToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const colonIndex = decoded.lastIndexOf(':');
    const password = decoded.slice(0, colonIndex);
    const timestamp = decoded.slice(colonIndex + 1);
    if (password !== process.env.ADMIN_PASSWORD) return false;
    const age = Date.now() - parseInt(timestamp, 10);
    return age < TOKEN_MAX_AGE_MS;
  } catch {
    return false;
  }
}

export function login(password: string): string | null {
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return null;
  }
  return generateToken();
}

export function isAuthenticated(request: NextRequest): boolean {
  const token = request.cookies.get(ADMIN_TOKEN_COOKIE)?.value;
  if (!token) return false;
  return verifyToken(token);
}

export async function isAuthenticatedFromCookies(): Promise<boolean> {
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_TOKEN_COOKIE)?.value;
  if (!token) return false;
  return verifyToken(token);
}
