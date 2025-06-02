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
        return/* (
            <img
                className="avatar"
                src={finn}
                src={jake}
                src={bmo}
                src={marceline}
                src={princesa_jujuba}
                src={rei_gelado}
                alt={person.name}
                width={size}
                height={size}
                
            />
        );*/
    }
