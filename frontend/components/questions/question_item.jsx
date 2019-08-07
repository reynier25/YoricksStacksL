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
        //     <div>
        //         <div>
        //         <p><Link to={`/questions/${this.props.question.id}`}>Q: {this.props.question.title}</Link></p>
        //         </div>
        //         {this.props.question.ids.length}
        //         <br/>
        //         <span>Asked by: {this.props.question.username}</span>
        // </div>

            <tr>
                <td className="votes-and-answers-total">
                    {this.props.question.ids.length}
                </td>
                <td className="question-link">
                    <Link to={`/questions/${this.props.question.id}`}>Q: {this.props.question.title}</Link>
                </td>
            </tr>

        )
    }
}


export default QuestionItem;
