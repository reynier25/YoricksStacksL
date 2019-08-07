import React from 'react';
import { Link } from 'react-router-dom'

class TagItem extends React.Component {
    render() {
        return (
            <td>
                <p><Link to={`/tags/${this.props.tag.id}`}>{this.props.tag.name}</Link></p>
                {/* <button></button> */}
                {/* <span>Asked by: {this.props.question.username}</span> */}

                {/* <p>{this.props.question.body}</p> */}
            </td>

        )
    }
}


export default TagItem;