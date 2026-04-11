import React from 'react';
import './Team.css'; 

const Team = () => {
  const trainers = [
    {
      id: 1,
      name: "Leonardo Sevilla",
      role: "Entrenador",
      desc: "Certificado en entrenamiento de alta intensidad con más de 8 años transformando vidas.",
      img: ""
    },
    {
      id: 2,
      name: "Allan Varela",
      role: "Instructor",
      desc: "Especialista en pérdida de grasa y planes alimenticios personalizados para atletas.",
      img: ""
    },
    {
      id: 3,
      name: "Ruben Aroca",
      role: "Entrenador",
      desc: "Cinturón Negro 4to Dan. Disciplina y técnica para todas las edades.",
      img: ""
    },
        {
      id: 4,
      name: "Oscar Aroca",
      role: "Instructor de Taekwondo",
      desc: "Cinturón Negro 4to Dan. Disciplina y técnica para todas las edades.",
      img: ""
    }
  ];

  return (
    <div className="team-container" style={{ backgroundColor: '#0a0a0a', color: '#fff', padding: '120px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#ffb800', margin: '0' }}>CONOCE A TUS COACHES</h1>
          <div style={{ width: '80px', height: '4px', background: '#ffb800', margin: '15px auto' }}></div>
          <p style={{ fontSize: '1.2rem', color: '#ccc' }}>El mejor equipo de Choluteca listo para entrenarte.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {trainers.map(t => (
            <div key={t.id} className="trainer-card-pro" style={{ 
              background: '#111', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              border: '1px solid #222',
              position: 'relative'
            }}>
              <div style={{ height: '400px', overflow: 'hidden' }}>
                <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '25px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#ffb800', marginBottom: '5px' }}>{t.name}</h3>
                <span style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>{t.role}</span>
                <p style={{ color: '#888', marginTop: '15px', fontSize: '1rem', lineHeight: '1.6' }}>{t.desc}</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                  <i className="fab fa-instagram" style={{ color: '#ffb800', cursor: 'pointer' }}></i>
                  <i className="fab fa-facebook" style={{ color: '#ffb800', cursor: 'pointer' }}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;