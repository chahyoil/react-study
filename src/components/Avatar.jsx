
import { getImageUrl } from "../lib/utils";

export default function Avatar({person, size, border}) {
    return (
      <>
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
        {/* <strong>{person.name}</strong> */}
      </>
    );
}