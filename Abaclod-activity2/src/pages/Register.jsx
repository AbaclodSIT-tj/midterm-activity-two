import {useState} from 'react'
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
const Register=()=>{
const [students, setStudents] = useState([]);

const addStudent=(student)=> {
    setStudents([...students, student]);
  };
  return(
<>
    <StudentForm forStudent={addStudent}/>
    <StudentList students={students}/>
</>
    );
}
export default Register;