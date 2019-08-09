import React from 'react';
import TagItem from './tag_item';
import { Link } from 'react-router-dom';

class TagIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTags();
        // this.props.fetchQuestions();

    }


    render() {
        const { tags } = this.props;
        // debugger;
        if (!tags) return null;

        return (
            <header className="all-tags">
                {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                <div className="top-tags">Tags</div>
                <table className="tags-table">
                    <tbody>
                    {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                    {/* <div className="top-tags">Top Tags</div> */}
                    <tr>
                    {
                        tags.map(tag => (
                            <TagItem
                                key={`${tag.id}`}
                                // currentUser={this.props.currentUser}
                                tag={tag} />
                        )
                        )
                            }
                    </tr>
                    </tbody>
                </table>
                {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                {/* <button>Ask Question</button> */}


                {/* <div className="hot-questions">HOT NETWORK QUESTIONS GO HERE</div> */}
            </header>
        )
    }

}


export default TagIndex