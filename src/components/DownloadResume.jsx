import React from 'react';

export default function DownloadResume() {
    return (
        <div style={{ textAlign: 'center', marginTop: 30 }}>
            <a
                href="/Gorinov_Ivan_Resume.pdf"
                download="Gorinov_Ivan_Resume.pdf"
                style={{
                    padding: '12px 24px',
                    backgroundColor: '#0a3d62',
                    color: '#fff',
                    borderRadius: '12px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    display: 'inline-block',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0366d6')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0a3d62')}
            >
                Скачать резюме
            </a>
        </div>
    );
}
