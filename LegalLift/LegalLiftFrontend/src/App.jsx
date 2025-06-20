// import { BrowserRouter  useRoutes } from 'react-router-dom';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './components/ContactUs';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './components/Dashboard/Dashboard';
// import {useRoutes}  from 'react-router-dom';
// import {ROUTES} from "./router/Routes"

const App = () => {

  return (

    <div>
      <Home />
    </div>

    // <Router>
    //   <div className="min-h-screen bg-gray-50"> */}
     //     <main className="container mx-auto p-4"> */}
    // {/* </Routes> */}
    // {/* </main> */} 
    //     <footer className="bg-gray-800 text-white p-6 mt-8">
    //       <div className="container mx-auto">
    //         <div className="grid md:grid-cols-3 gap-8">
    //           <div>
    //             <h3 className="text-xl font-bold mb-4">LegalLift</h3>
    //             <p>Providing legal aid to low-income Nigerians through community support.</p>
    //           </div>
    //           <div>
    //             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
    //             <ul className="space-y-2">
    //               <li><Link to="/" className="hover:underline">Home</Link></li>
    //               <li><Link to="/about" className="hover:underline">About Us</Link></li>
    //               <li><Link to="/contact" className="hover:underline">Contact</Link></li>
    //             </ul>
    //           </div>
    //           <div>
    //             <h3 className="text-xl font-bold mb-4">Contact Info</h3>
    //             <p>312 Herbert Macauley way Sabo, Lagos</p>
    //             <p>+234 800 000 0000</p>
    //             <p>info@legallift.org</p>
    //           </div>
    //         </div>
    //         <div className="border-t border-gray-700 mt-6 pt-6 text-center">
    //           <p>&copy; {new Date().getFullYear()} LegalLift. All rights reserved.</p>
    //         </div>
    //       </div>
    //     </footer>
    //   </div> */}
    // </Router>
    
    // useRoutes(ROUTES)

        // <a path="/" element={<Home />} />
        //  <a path="/about" element={<AboutUs />} />
        //  <a path="/contact" element={<ContactUs />} />
        //  <a path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        //  <a path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        //  <a path="/dashboard" element={<Dashboard />} />

  )
};

export default App;