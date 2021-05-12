import {Switch , Route} from "react-router-dom"
import './App.css';
import User from './component/User';
import UserProfile from './component/UserProfile';


function App() {
  return (
    <div>
      <Switch >
    <Route exact path="/" component={User} />
    <Route  path="/:id" component={UserProfile} />
   <UserProfile />

   </Switch>
    </div>
  )
}

export default App;
