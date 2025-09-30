import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>📅 Congreso Mexicano de Recursos Forestales 2025</h1>
      <p>Bienvenido a la app oficial del congreso.</p>
      <nav>
        <ul>
          <li><Link href="/programa">Ver Programa</Link></li>
        </ul>
      </nav>
    </div>
  );
}
