import React from 'react';
import NavBar from "./Components/NavBar";
import { Route, Router } from 'react-router-dom';
import history from './Components/history';
import './App.css';
import Results from "./Components/Results";
import Form from "./Components/Form";

const App = () => (
    <div className="App">
        <Router history={history}>
             <NavBar/>
                
                    <Route exact path="/results">
                        <Results/>
                    </Route>
                    <Route exact path="/">
                        <Form/>
                    </Route>
            
    </Router>
    </div>
  );

export default App;





// import React from 'react';
// import { Route, Switch } from 'react-router-dom';

// import NavBar from "./Components/NavBar";
// import Results from "./Components/Results";
// import Form from "./Components/Form";

// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <NavBar/>
//             <Switch>
//                 <Route path="/results">
//                     <Results/>
//                 </Route>
//                 <Route path="/">
//                     <Form/>
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

// export default App;
