import React from "react"
import { Link } from "react-router-dom"

const Navbar = () =>{
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* <Link to="/" className="text-2xl font-bold">LegalLift</Link> */}
            <div className="space-x-4">
              {/* {isLoggedIn ? ( */}
                <>
                  {/* <Link to="/dashboard" className="hover:underline">Dashboard</Link> */}
                  <button 
                    // onClick={() => setIsLoggedIn(false)} 
                    className="hover:underline">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:underline">Login</Link>
                  <Link to="/signup" className="hover:underline">Sign Up</Link>
                </>
              )
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </nav>
    )
}
export default Navbar