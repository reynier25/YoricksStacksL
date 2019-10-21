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
        debugger;
        // if (!this.props.question) return null;
        return (
        //     <div>
        //         <div>
        //         <p><Link to={`/questions/${this.props.question.id}`}>Q: {this.props.question.title}</Link></p>
        //         </div>
        //         {this.props.question.ids.length}
        //         <br/>
        //         <span>Asked by: {this.props.question.username}</span>
        // </div>
        <tbody>
            <tr>
                <td className="votes-and-answers-total">
                  
                        {this.props.question.answer_ids.length} <div>answers</div>
                        {/* <div className="space-between-counts"></div> */}
                        <br/>
                        {this.props.question.question_vote_ids.length} <div>votes</div>

                </td>
                <td className="question-link">
                        <Link to={`/questions/${this.props.question.id}`}>Q: {this.props.question.title}</Link>
                        <div className="question-author">asked by
                        <br/>{this.props.question.username}</div>
                    </td>
                    {/* <td className="votes-total">
                        {this.props.question.ids.length} <div>HELLO</div>
                    </td> */}
            </tr>
                
            {/* <tr>
                    <td className="votes-total">
                        {this.props.question.ids.length} <div>HELLO</div>
                    </td>
            </tr> */}
                
        </tbody>
        )
    }
}


export default QuestionItem;
