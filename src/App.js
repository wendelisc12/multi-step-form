import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Sidebar from "./components/sidebar/sidebar";
import YourInfo from "./components/yourinfo/yourInfo";
import SelectPlan from "./components/selectPlan/selectPlan";
import PickAddons from "./components/pickAddons/PickAddons";
import Summary from "./components/summary/Summary";
import ThankYou from "./components/thankyou/ThankYou";
import { useState } from "react";

function App() {

  const [plan, setPlan] = useState()
  const [addons, setAddons] = useState()
  const [user, setUser] = useState()

  function handleSaveUser(user){
    setUser(user)
  }

  function handleSavePlan(plan){
    setPlan(plan)
  }

  function handleSaveAddons(addons){
    setAddons(addons)
  }

  return (
   <BrowserRouter>
    <main>
      <Sidebar />
      <section>
        <div id="principal-box">
          <Switch>
            <Route path='/'exact>
              <YourInfo onAddUser={handleSaveUser}/>
            </Route> 
            <Route path='/step-2' exact>
              <SelectPlan onSavePlan={handleSavePlan}/>
            </Route> 
            <Route path='/step-3' exact>
              <PickAddons onSaveAddons={handleSaveAddons}/>
            </Route> 
            <Route path='/step-4' exact> 
              <Summary dados={plan} addons={addons}/>  
            </Route>
            <Route path='/thanks' exact >
              <ThankYou/>
            </Route>
          </Switch>
        </div>
      </section>
    </main>
   </BrowserRouter>
  );
}

export default App;
