import React from 'react';
import { Link } from 'react-router-dom'


class TagOptions extends React.Component {
    render() {
        // if (!this.props.question) return null;
        let allTags;
        // debugger;
        allTags = this.props.tags.map(tag => {
            return (
                <td>
                    <label>
                    {tag.name}
                    <input type="checkbox"></input>
                </label>
                </td>
            );
        });

            // < input type = "checkbox" name = "vehicle1" value = "Bike" >

        return (
            <table className="tag-table">
                <h2>Tags</h2>
                {allTags}

           </table>

        )
    }
}


export default TagOptions;
