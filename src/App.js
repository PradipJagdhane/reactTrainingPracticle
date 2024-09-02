import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Routing/pages/home";
import About from "./components/Routing/pages/about";
import Contact from "./components/Routing/pages/contact";
import NoPage from "./components/Routing/pages/notfound";
import RouteLinks from "./components/Routing/routes/route";

function App() {
  // const user = {
  //   name : "Pradip",
  //   age: 25,
  //   email: "pradipj@gmail.com"
  // }
  // console.log(user)

  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log("component performance",
      id,
      phase,
      actualDuration,
      baseDuration,"st",
      startTime,
      commitTime,
      interactions
    );
  };

  return (
    <div className="App">
      {/* <Argument name="properties" /> */}
      {/* <Argument user={user}/> */}

      {/* <PropDrilling user={user}/> */}
      {/* <StateEx /> */}
      {/* <UseState /> */}
      {/* <Useeffect /> */}
      {/* <Timer name = "pradip"/> */}
      {/* <Car /> */}
      {/* <Header /> */}
      {/* <Mount /> */}
      {/* <ShuldUpdate /> */}
      {/* <Container /> */}
      {/* <Counter /> */}

      {/* <PureCompo /> */}
      {/* <ParentComponent /> */}
      {/* <ControlledComponent /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Mycomponent /> */}
      {/* <ThemeButton /> */}
      {/* <CreateContext /> */}
      {/* <UseRef /> */}
      {/* <UseMemoEx /> */}
      {/* <NoRender /> */}
      {/* <Counter /> */}
      {/* <ShoppingCart /> */}
      {/* <TodoApp /> */}
      {/* <ParentComponent /> */}
      {/* <SearchFilter /> */}
      {/* <UserList /> */}
      {/* <TitleUpdater /> */}

      {/* <ClickEvent /> */}
      {/* <FormHandler /> */}
      {/* <FormValidate /> */}
      {/* <ListKeyEx /> */}
      {/* <GetProps /> */}
      {/* <ReactFrag /> */}

      {/* <Profiler id="profile" onRender={onRender}>
        <ConditionalRender />
      </Profiler> */}
{/* 
      <Provider store={store}>
<CounterComponent />
      </Provider> */}
     
    <RouteLinks />


    </div>
  );
}

export default App;
