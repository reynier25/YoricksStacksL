// import React from 'react';
// import QuestionItem from './question_item';

// class QuestionIndex extends React.component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         this.props.fetchQuestions();
//     }


//     render() {
//         const { questions } = this.props;

//         return (
//             <div>
//                 <ul>
//                     {
//                         questions.map(question => (
//                             <QuestionItem
//                                 key={`question${question.id}`}
//                                 question={question} />
//                             )
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }

// }


// export default QuestionIndex