import React from 'react';
import { connect } from 'react-redux';
import { activeBook } from '../actions/index';

class BookDetail extends React.Component{
    render(){
        if(!this.props.book){
            return <div>Select a book to get started...</div>
        }
        return(
            <div>
                <h3>DETAILS FOR:</h3>
                <div>{this.props.book.title}</div>
                <div>pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    return{
        book: state.activeBook
    }
}

export default connect( mapStateToProps, {activeBook})(BookDetail)