
import { getImageUrl } from "../lib/utils";

export default function Avatar({person, size, border}) {
    return (
      <>
        <div style={{border : border}}>
          <img
          className="avatar"
          src={getImageUrl(person, size)}
          alt={person.name}
          />
        </div>  
        <strong>{person.name}</strong>
      </>
    );
  }