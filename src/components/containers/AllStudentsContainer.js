import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../thunks";
import { AllStudentsView } from "../views";

class AllStudentsContainer extends Component {
    componentDidMount(){
        this.props.fetchAllStudents();
    }

    render(){
        return(
            <AllStudentsView allStudents={this.props.allStudents} />
        )
    }

}

const mapState = (state) => {
    return{
        allStudents: state.allStudents,
    };    
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    }
}

export default connect(mapState, mapDispatch)(AllStudentsContainer);
