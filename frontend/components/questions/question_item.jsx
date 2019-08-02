import React from 'react';
import { Link } from 'react-router-dom'

// export default ({ question }) => {

//     //handle votes?

//     return (
//         <li>
//             <h3><Link to={`questions/${this.props.question.id}`}>{question.title}</Link></h3>
//             <p>Asked by: {question.author_id}</p>
//             <p>{question.body}</p>
//             <br />
//         </li>
//     );

// }

class QuestionItem extends React.Component {
    render() {
        return (
        <li>
            <h3><Link to={`/questions/${this.props.question.id}`}>{this.props.question.title}</Link></h3>
            <p>Asked by: {this.props.question.author_id}</p>
            <p>{this.props.question.body}</p>
            <br />
        </li>

        )
    }
}


export default QuestionItem;