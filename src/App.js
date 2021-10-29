 import About from './About/about.js';
 import Signup from './Signup/signup.js';
 import Home from './Home/home.js';
import Form from './myform/form.js'
import Navbar from './Navbar/navbar.js';
import {Route, Switch} from 'react-router-dom';
import Draft from './Drafts/draft.js';
import Follower from './Followers/follower.js';
import Profile from './Profile/profile.js';
import Dashboard from './Dashboard/dashboard.js';
import Interest from './Interests/interest.js';

 


function App() {
  return (
    <div >
        <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/login" component={Form}  />
      <Route path="/about" component={About}  />
      <Route path="/signup" component={Signup}  />
      <Route path="/dashboard" component={Dashboard}  />
      <Route path="/draft" component={Draft}  />
      <Route path="/follower" component={Follower}  />
      <Route path="/profile" component={Profile}  />
      <Route path="/interest" component={Interest}  />
   </Switch>
    </div>
  );
}

export default App;
