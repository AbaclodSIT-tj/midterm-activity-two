import {useState} from 'react'
const StudentForm=({forStudent})=>{
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [course, setCourse]=useState("")
const [error, setError]=useState("")

const submitting=(e)=>{
 e.preventDefault();

    if (!name || !email || !course) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    forStudent({ name, email, course });

    setName("");
    setEmail("");
    setCourse("");
    setError("");
  };


    return(
        <>
    <form onSubmit={submitting}>
    <input
    placeholder="Name"
    value={name}
    onChange={
        (e)=>setName(e.target.value)
    } 
    />
    <input
    placeholder="Email"
    value={email}
    onChange={
        (f)=>setEmail(f.target.value)
    }
    />
    <input
    placeholder="Course"
    value={course}
    onChange={
        (g)=>setCourse(g.target.value)
    }
    />
      <button disabled={!name || !email || !course}>
        Submit
      </button>
    </form>
    <p>{error}</p>
        </>
    );
}
export default StudentForm;