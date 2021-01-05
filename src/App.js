import './App.css';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Tindercard from './Tindercard';
import Swipe from './Swipe';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="app">
      
       <Switch>
       <Route path="/chat/:person">
         <Header backbutton="/chat"/>
          <ChatScreen/>
         </Route>
         <Route path="/chat">
         <Header backbutton="/"/>
          <Chats/>
         </Route>
         <Route path="/">
         <Header/>
           <Tindercard/>
           <Swipe/>
         </Route>
       </Switch>
    </div>
  );
}

export default App;
