import { Fragment } from 'react';
import { getImageUrl } from '../lib/utils';

export default function People (person) {

    return (
        <Fragment key={person.id}>
            <li>
                <img className="avatar" src={getImageUrl(person)} />
                <b>{person.name}</b>
                <p>{person.profession}</p>
            </li>
        </Fragment>
    )
}