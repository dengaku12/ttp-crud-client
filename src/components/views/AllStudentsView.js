import React from 'react';
import {Link} from 'react-router-dom';

const AllStudentsView = (props) => {
    if(!props.allStudents.length){
        return <div className="all-students">There are no students</div>;
    }

    return (
        <div className="all-students">
            <Link to="/students/new" className="add-student">
                New Student
            </Link>
            <div>
                {props.allStudents.map((student) => (
                    <div key={student.id}>
                        <Link to={`/students/${student.id}`}>
                        <p>{student.firstName} {student.lastName}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllStudentsView;