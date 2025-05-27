    import Avatar from './Avatar';

    const hoje = new Date();
    const person = {
        titulo: "Finn, o Humano",
        nomeReal: "Finn Mertens",
        name: 'finn',
        imageFile: 'finn.png'
    };

    function formatarData(data) {
        return new Intl.DateTimeFormat(
            'pt-br',
            { weekday: 'long' }
        ).format(data);
    }

    export default function ToDoList() {
        return (
            <section>
                <h2 className='titulo'>📋 Lista de tarefas - Finn</h2>
                <div className='toDoList'>
                    <div className='cabecalho'>
                        <Avatar person={person} size={80} />
                        <div>
                            <h2 className='tituloh2'>
                                To-do list for {formatarData(hoje)} - {person.titulo}
                            </h2>
                            <h4 className='subtitulo'>{person.nomeReal}</h4>
                        </div>
                    </div>
                    <ul>
                        <li>⚔️ Treinar com a Espada da Vinha</li>
                        <li>🍬 Visitar a Princesa Jujuba no Reino Doce</li>
                        <li>🐍 Ajudar a derrotar monstros na Terra de Ooo</li>
                        <li>🎮 Jogar com o BMO e relaxar com Jake</li>
                    </ul>
                </div>
            </section>
        );
    }
