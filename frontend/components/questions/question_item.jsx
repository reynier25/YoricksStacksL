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
        <div>
            <p><Link to={`/questions/${this.props.question.id}`}>Q: {this.props.question.title}</Link></p>
                <span>Asked by: {this.props.question.username}</span>
                
            {/* <p>{this.props.question.body}</p> */}
        </div>

        )
    }
}


export default QuestionItem;