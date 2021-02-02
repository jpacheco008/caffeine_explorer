import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../screens/Landing";
import List from "../screens/List";
import Profile from "../screens/Profile";
import ItemDetail from "../screens/ItemDetail"
import { getAllCoffees } from "../services/coffees";

export default function MainContainer(props) {
  const [list, setList] = useState([]);
  const { currentUser } = props;
  
  useEffect(() => {
    const fetchList = async () => {
      const coffeeData = await getAllCoffees();
      setList(coffeeData)
    }
    fetchList();
  }, []);

  return (
    <Switch>
      <Route path='/coffees/:id'>
        <ItemDetail currentUser={currentUser}/>
      </Route>
      <Route path='/profile'>
        <Profile currentUser={currentUser}/>
      </Route>
      <Route path='/coffees'>
        <List
          coffees={list}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/'>
        <Landing currentUser={currentUser}/>
      </Route>
    </Switch>
  )

}