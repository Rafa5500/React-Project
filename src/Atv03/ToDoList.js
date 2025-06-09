import Avatar from './Avatar';
import './List.css';

const hoje = new Date();
const person = {
    titulo: "Herói de Ooo",
    nomeReal: "Finn Mertens",
    name: 'finn',
    imageFile: 'finn.png'
};

function formatarData(data) {
    return new Intl.DateTimeFormat(
        'pt-br',
        { weekday: 'long'}
    ).format(data);
}

export default function ToDoList() {
    return (
        <section>
            <h2 className='titulo'>📋 Lista de Tarefas - Finn</h2>
            <div className='toDoList'>
                <div className='cabecalho'>
                    <Avatar person={person} size={80} />
                    <div>
                        <h2 className='tituloh2'>
                            Missões de {formatarData(hoje)} - {person.titulo}
                        </h2>
                        <h4 className='subtitulo'>{person.nomeReal}</h4>
                    </div>
                </div>
                <ul>
                    <li>⚔️ Lutar contra monstros na Terra de Ooo</li>
                    <li>🧪 Visitar a Princesa Jujuba no laboratório</li>
                    <li>🎮 Jogar com BMO</li>
                    <li>🎸 Ir ao show da Marceline</li>
                </ul>
            </div>
        </section>
    );
}
