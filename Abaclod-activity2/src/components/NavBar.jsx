import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <>
        <nav className="d-flex justify-content-center">
        <Link to="/">Home</Link> | <Link to="/Register">Register</Link> | <Link to="/student/:id">Student</Link>            
        </nav>

        </>
    );
}
export default Navbar;