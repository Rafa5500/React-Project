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
            <h2 className='titulo'>🎒 Lista de viagem do Finn</h2>
            <div className='toDoList'>
                <h2 className='tituloh2'>Packing list - Finn, o Humano</h2>
                <ul>
                    <Item isPacked={true} name={'🗡️ Espada da Vinha'} />
                    <Item isPacked={true} name={'🥪 Lanches preparados pela Jujuba'} />
                    <Item isPacked={false} name={'🛡️ Escudo de madeira'} />
                    <Item isPacked={false} name={'🧭 Bússola mágica'} />
                    <Item isPacked={false} name={'📖 Caderno de anotações de aventuras'} />
                </ul>
            </div>
        </section>
    );
}
