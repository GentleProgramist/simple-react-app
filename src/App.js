// import React from "react"
// import Header from "./Header"
// import MemeGenerator from "./MemeGenerator"

// function App() {
//     return (
//         <div>
//             <Header />
//             <MemeGenerator />
//         </div>
//     )
// }

// export default App
// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import Home from './pages/Home';
// import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';

// export default function App() {
//     return (
//         <Router>
//             <ul>
//             <div>
//                 <Link to = "/home">Home</Link>
//             </div>
//             <div>
//                 <Link to = "/blogs">Blog Articles</Link>
//             </div>
//             <div>
//                 <Link to = "/contact">Contact Me</Link>
//             </div>
//             </ul>
//             <hr />

//             <Routes>
//                 <Route path = "/home" element = {<Home />}/>
//                 <Route path = "/blogs" element = {<Blogs />}/>
//                 <Route path = "/contact" element = {<Contact />}/>
//             </Routes>
//         </Router>
//     );
// }

// import { useState, useEffect } from "react";
// // import ReactDOM from "react-dom";


import { useState } from "react";
// import ReactDOM from "react-dom";

function App() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default App