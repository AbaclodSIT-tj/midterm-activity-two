import {Link} from 'react-router-dom'
const StudentList=({students})=>{
    return(
        <>
        <div>
        <h3>Students</h3>
        {
        students.map((s, index)=>(
            <div key={index}>
                <Link to={`/student/${index}`}>
                {s.name}
                </Link>

            </div>
       ))};
        </div>
        </>
    );
}
export default StudentList;