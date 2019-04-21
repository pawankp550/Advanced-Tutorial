import React from 'react';  
import { connect } from 'react-redux';

class CommentList extends React.Component{

renderCommentList(){
    return this.props.comments.map(comment => {
        return <li key={comment}>{comment}</li>;
    })
}

    render(){
        return (
            <div>
                <h1>Comment List</h1>
                <ul>
                    {this.renderCommentList()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
        console.log(state)
         return {comments : state.Comments}   
}

export default connect(mapStateToProps)(CommentList)