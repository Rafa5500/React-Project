   /* import { getImageUrl } from "./Utils";
    */
    import finn from './imagens/finn.png';
    import jake from './imagens/jake.png';
    import bmo from './imagens/bmo.png';
    import marceline from './imagens/marceline.png';
    import princesa_jujuba from './imagens/princesa_jujuba.png';
    import rei_gelado from './imagens/rei_gelado.png';




    export default function Avatar({ person, size }) {
        if (!person) return null;
        return (
            <img
                className="avatar"
                src={finn}
                alt={person.name}
                width={size}
                height={size}

                className="avatar"
                src={jake}
                alt={person.name}
                width={size}
                height={size}

                className="avatar"
                src={bmo}
                alt={person.name}
                width={size}
                height={size}

                className="avatar"
                src={marceline}
                alt={person.name}
                width={size}
                height={size}

                className="avatar"
                src={princesa_jujuba}
                alt={person.name}
                width={size}
                height={size}

                className="avatar"
                src={rei_gelado}
                alt={person.name}
                width={size}
                height={size}
                
            />
        );
    }
