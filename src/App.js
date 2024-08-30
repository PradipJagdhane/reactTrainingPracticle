import React, { Profiler } from "react";
import "./App.css";
import ReactFrag from "./components/Fragment/reactFrag";
import GetProps from "./components/Hooks/Usecontext/Ex3/Passprops";
import NoRender from "./components/Hooks/UseMemo/memoEx";
import ConditionalRender from "./components/ConditionalRender/conditionlRender";
import { Provider } from "react-redux";
import { store } from "./components/Redux/store/store";
import CounterComponent from "./components/Redux/testredux";

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

      <Profiler id="profile" onRender={onRender}>
        <ConditionalRender />
      </Profiler>

      <Provider store={store}>
<CounterComponent />
      </Provider>
    </div>
  );
}

export default App;
