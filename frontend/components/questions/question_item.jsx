import React from 'react';

export default ({ question }) => {

    //handle votes?

    return (
        <li>
            <h3>{question.title}</h3>
            <p>Asked by: {question.author_id}</p>
            <p>{question.body}</p>
            <br />
        </li>
    );

}