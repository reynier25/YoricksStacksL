import React from 'react';
import { Link } from 'react-router-dom'


class TagOptions extends React.Component {
    render() {
        // if (!this.props.question) return null;
        let allTags;
        // debugger;
        allTags = this.props.tags.map(tag => {
            return (
                <label htmlFor="">
                    {tag.name}
                    <input type="checkbox"></input>
                </label>
                // <div type="checkbox">{tag.name}</div>
            );
        });

            // < input type = "checkbox" name = "vehicle1" value = "Bike" >

        return (
            <div>
                {allTags}

           </div>

        )
    }
}


export default TagOptions;
