import Avatar from "./Avatar";

function Profile({ name, imageFile, power, universe, size }) {
  const person = { name, imageFile };

  return (
    <div className="profile-card">
      <Avatar person={person} size={size || 120} />
      <h3>{name}</h3>
      <p><strong>Poder:</strong> {power}</p>
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
            imageFile="/imagens/finn.png"
            power="Coragem e Espada"
            universe="Hora de Aventura"
            size={120}
          />
          <Profile
            name="Jake"
            imageFile="jake.png"
            power="Elasticidade e Humor"
            universe="Hora de Aventura"
            size={120}
          />
          <Profile
            name="Princesa Jujuba"
            imageFile="princesa_jujuba.png"
            power="Inteligência e Ciência"
            universe="Hora de Aventura"
            size={120}
          />
          <Profile
            name="Rei Gelado"
            imageFile="rei_gelado.png"
            power="Magia do Gelo"
            universe="Hora de Aventura"
            size={120}
          />
          <Profile
            name="Marceline"
            imageFile="marceline.png"
            power="Vampirismo e Música"
            universe="Hora de Aventura"
            size={120}
          />
          <Profile
            name="BMO"
            imageFile="bmo.png"
            power="Tecnologia e Diversão"
            universe="Hora de Aventura"
            size={120}
          />
        </div>
      </div>
    </section>
  );
}
