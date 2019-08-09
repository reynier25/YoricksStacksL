import React from 'react';
import TagItem from './tag_item';
import QuestionItem from '../questions/question_item';
// import { fetchQuestion } from '../../utils/questions';
// import { fetchQuestions } from '../../actions/questions';
// import AnswerNewContainer from '../answers/answer_new_container';
// import AnswerIndexContainer from '../answers/answer_index_container';

class TagShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTag(this.props.tagId);
        this.props.fetchQuestions();
    }

    // componentDidUpdate() {
    //     true;
    // }

    render() {
        // debugger;

        // if (!tag) return null;
        const { tag } = this.props;

        if (!tag) return null;

        if (this.props.questions.length === 0) {
            return null;
        }
        

        let filteredQuestions = [];

        debugger;

        tag.question_ids.forEach(id => {
            filteredQuestions.push(this.props.questions[id - 1])
        })

        // if (filteredQuestions.length === 0 || filteredQuestions[0] === undefined) {
        //     this.props.fetchQuestions()
        // }
        
        // debugger;
        // localStorage.setItem(this.props.match.params.questionId, this.props.question.body);
        // if (!tag) return null;

            return (

                <div className="tag-show">


                    <h2>Questions tagged [{this.props.tag.name}]</h2>

                    {filteredQuestions.map(question => (
                        <QuestionItem
                            key={`${question.id}`}
                            currentUser={this.props.currentUser}
                            question={question} />
                    ))}

                    {/* {localStorage.getItem([this.props.match.params.questionId])} */}
                </div>
            )
    }
}


export default TagShow;


// {
//     questions.map(question => (
//         <QuestionItem
//             key={`${question.id}`}
//             currentUser={this.props.currentUser}
//             question={question} />
//     )
//     )
// }