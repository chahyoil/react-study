import { Fragment } from 'react';
import { getImageUrl } from '../lib/utils';

export default function People({ person }) {
    console.log(person);
    return (
        <Fragment>
            <li key={person.id}>
                <img className="avatar" src={getImageUrl(person)} />
                <b>{person.name}</b>
                <p>{person.profession}</p>
            </li>
        </Fragment>
    )
}