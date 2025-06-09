import React from "react";
import Avatar from "./Avatar";
import './Gallery.css';

function Profile({ name, imageFile, power, universe, size }) {
  const person = { name, imageFile };

  return (
    <div className="profile-card">
      <Avatar person={person} size={size || 120} />
      <h3>{name}</h3>
      <p><strong>Habilidade:</strong> {power}</p>
      <p><strong>Universo:</strong> {universe}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1 className="titulo">Personagens: Hora de Aventura</h1>
      <div className="gallery-container">
        <div className="card">
          <Profile
            name="Finn"
            imageFile="finn.png"
            power="Espadas e coragem"
            universe="Terra de Ooo"
            size={120}
          />
          <Profile
            name="Jake"
            imageFile="jake.png"
            power="Elasticidade mágica"
            universe="Terra de Ooo"
            size={120}
          />
          <Profile
            name="Princesa Jujuba"
            imageFile="jujuba.png"
            power="Ciência e liderança"
            universe="Reino Doce"
            size={120}
          />
          <Profile
            name="Marceline"
            imageFile="marceline.png"
            power="Vampirismo e música"
            universe="Reino dos Vampiros"
            size={120}
          />
        </div>
      </div>
    </section>
  );
}
