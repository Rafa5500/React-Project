import './List.css';

function Item({ name, isPacked }) {
    return (
        <li className='item'>
            {isPacked ? (
                <>
                    <del>{name}</del> <span role="img" aria-label="checked">✔️</span>
                </>
            ) : (
                name
            )}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h2 className='titulo'>🎒 Lista de viagem do Jake</h2>
            <div className='toDoList'>
                <h2 className='tituloh2'>Itens para levar nas aventuras:</h2>
                <ul>
                    <Item isPacked={true} name={'🎸 Violão mágico (da Marceline)'} />
                    <Item isPacked={true} name={'🥞 Panquecas de emergência'} />
                    <Item isPacked={false} name={'🗺️ Mapa da Terra de Ooo'} />
                    <Item isPacked={false} name={'🎮 Cartucho de jogos do BMO'} />
                    <Item isPacked={false} name={'💬 Poções de transformação'} />
                </ul>
            </div>
        </section>
    );
}
