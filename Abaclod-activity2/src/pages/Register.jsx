import {useState} from 'react'
const Register=()=>{
    const [form, setForm]=useState ({name: '', email:'', course:'' });
    const [error, setError]=useState({});

    const submitForm=(s)=>{

    }
    const change=(e)=>{

    }
    //for validation
    const isItValid=()=>{

    }
    const submit=()=>{

    }
    return(
        <>
    <form onSubmit={submitForm}>
        <div>
        <label>Name: </label>
        <input name="name" value={form.name} onChange={change}/>            
        </div>
        <div>
        <label>Email: </label>
        <input name="email" value={form.email} onChange={change}/>
        </div>
        <div>
        <label>Course: </label>
        <input name="course" value={form.course} onChange={change}/>
        </div>
        <button onClick={submit}>
        Submit form
        </button>
    </form>
        </>
    );
}
export default Register;