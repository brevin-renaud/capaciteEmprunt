import { NextRequest, NextResponse } from 'next/server';
import { login, ADMIN_TOKEN_COOKIE } from '@/lib/admin/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json({ error: 'Mot de passe requis' }, { status: 400 });
    }

    const token = login(password);
    if (!token) {
      return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_TOKEN_COOKIE, token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60, // 24h en secondes
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
