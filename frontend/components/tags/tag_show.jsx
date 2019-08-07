import React from 'react';
import TagItem from './tag_item';
// import AnswerNewContainer from '../answers/answer_new_container';
// import AnswerIndexContainer from '../answers/answer_index_container';

class TagShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTag(this.props.tagId);
    }

    componentDidUpdate() {
        true;
    }

    render() {
        // debugger;
        const { tag } = this.props;
        // if (!question) {
        //     return null;
        // 

        // localStorage.setItem(this.props.match.params.questionId, this.props.question.body);
        if (!tag) return null;

            return (

                <div className="tag-show">


                    <h2>Questions tagged [{this.props.tag.name}]</h2>


                    {/* {localStorage.getItem([this.props.match.params.questionId])} */}
                </div>
            )
    }
}


export default TagShow;