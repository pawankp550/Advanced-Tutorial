import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component{
    renderButton(){
                if(this.props.auth){
                    return(
                        <button onClick = {() => this.props.changeAuth(false)}>Sign out</button>
                    )
                }
                else{
                    return(
                        <button onClick = {() => this.props.changeAuth(true)}>Sign In</button>
                    )
                }
            
        
    }

    
    renderHeader(){
        const pStyle = {
            display: 'inline'
          };

        return(
            <div>
                <ul style = {pStyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post a Comment</Link></li>
                    <li>{this.renderButton()}</li>
                </ul>
            </div>
        )
    }
    render()
    {
        return(
         <>   
         <div>
             {this.renderHeader()}
         </div>   
        <div>
            <Route  path='/post' component={CommentBox} />
            <Route  path='/' exact component= {CommentList} />
         </div>
         </>     
    )
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth
    } 
}

export default connect(mapStateToProps, actions)(App)