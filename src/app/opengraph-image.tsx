import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'AXIO Collective';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#06060A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          {/* Logo SVG */}
          <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '30px' }}>
            <path d="M30 4 L56 30 L30 56 L4 30 Z" stroke="#FF5722" strokeWidth="3"/>
            <path d="M30 14 L46 30 L30 46 L14 30 Z" fill="#FF5722"/>
          </svg>

          <h1
            style={{
              color: '#F0EFF8',
              fontSize: '68px',
              fontWeight: 800,
              margin: 0,
              fontFamily: 'sans-serif',
              letterSpacing: '2px',
            }}
          >
            AXIO COLLECTIVE
          </h1>
        </div>

        <p
          style={{
            color: '#A8A8C0',
            fontSize: '36px',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            fontFamily: 'sans-serif',
          }}
        >
          Sistemas operativos con IA aplicada para empresas industriales.
        </p>

        {/* Console Box */}
        <div
          style={{
            marginTop: '80px',
            display: 'flex',
            background: '#0A0A0F',
            border: '2px solid #1E1E2A',
            padding: '24px 40px',
            boxShadow: '0 10px 30px rgba(255, 87, 34, 0.1)',
          }}
        >
          <span
            style={{
              color: '#FF5722',
              fontSize: '28px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}
          >
            SYS_AXIO&gt; Inicializando protocolo_
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
