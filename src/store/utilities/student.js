import axios from 'axios';

const FETCH_STUDENT = "FETCH_STUDENT";

const fetchStudent = (student) => {
    return{
        type: FETCH_STUDENT,
        payload: student,
    };
};

export const fetchStudentThunk = (id) => (dispatch) => {
    return axios
        .get(`/api/students/${id}`)
        .then((res) => res.data)
        .then((student) => dispatch(fetchStudent(student)))
        .catch((err) => console.log(err));
}

const reducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_STUDENT:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;