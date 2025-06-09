import './Avatar.css';
import { getImageUrl } from "./Utils";

export default function Avatar({ person, size }) {
    if (!person) return null;
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}
