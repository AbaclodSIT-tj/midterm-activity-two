import {useParams} from 'react-router-dom'
const StudentDetails=()=>{
    const {id}=useParams();
    return(
        <>
        <div>
            <h1>Student Id:{id}</h1>

        </div>
        </>
    );
}
export default StudentDetails;