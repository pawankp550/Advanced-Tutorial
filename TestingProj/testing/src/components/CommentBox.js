import React from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchcomment, changeAuth } from '../actions';


class CommentBox extends React.Component{
    state = {
        comment: ''
    }

    componentDidMount(){
        this.shouldNavigate();
    }

    componentDidUpdate(){
        this.shouldNavigate();

    }

    shouldNavigate(){
        if(!this.props.auth){
            this.props.history.push('/')
        }
    }

    onChangeHandler = (event) => {

        this.setState({
        comment: event.target.value
        }) 

        //console.log(this.state)
    }

    onSubmitHandler = (event) => {
        // ToDo
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ''
        })
    }
    render(){
        return (
            <>
            <form onSubmit ={this.onSubmitHandler}>
                <h1> Enter Comment</h1>
                <div>
                    <textarea onChange = {this.onChangeHandler} value = {this.state.comment}></textarea>
                </div>
                <div>
                    <button>Submit Comment</button>
                </div>    
            </form>
            <button onClick = { this.props.fetchcomment }>Fetch Comments</button>
            
            </>
        )
    }    
}

function mapStateToProps(state){
    return {auth : state.auth}
}

export default connect(mapStateToProps, {saveComment, fetchcomment, changeAuth})(CommentBox);