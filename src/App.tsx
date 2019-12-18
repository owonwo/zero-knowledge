import React, { useState } from "react";

// @ts-ignore
// import { Provider, useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Card from "./components/Card";
import TokenInput, { TokenGroup } from "./components/TokenInput";
import UserList from "./components/UserList";
import StaticContent from "./components/StaticContent";
import Preloader from "./components/Preloader";

// import store from './store/index';
// views
// import Home from "./views/Home";
// import Products from "./views/Products";
// import NotFound from "./views/NotFound";
// import { SingleProduct } from "./views/SingleProduct";

function App() {
  // store.subscribe(() => store.getState());
  const fakePairs: [number, number][] = [
    [200, 200],
    [300, 400],
    [500, 300]
  ];
  const [state, setState] = useState({
    stage: 1
  });
  const stage = (s_: number) => () => setState({ ...state, stage: s_ });
  const isStage = (s_: number) => state.stage === s_;
  const fade = (s_: number) => isStage(s_) || "opacity-25";

  type User = {
    name: string;
    image: string;
  };

  const users: User[] = [
    { name: "Online Bot", image: "/assets/bot.png" },
    { name: "Vitalik Buterin", image: "/assets/unicorn-avatar.png" }
  ];

  return (
    <>
      <div className="App">
        <Header />
        <div className="container lg:w-2/3 flex mx-auto justify-around mt-10">
          <div className="flex-1 max-w-md">
          <Card active={isStage(1)}>
            <p className={`text-5xl leading-none pl-2 pr-8 ${fade(1)}`}>1</p>
            <div className="flex-1">
              <p className="uppercase text-lg">CHOOSE A TOKEN</p>
              <p className="text-xs color3 mb-8">Standard erc20s or private erc1724s</p>
              <TokenGroup name="Private ZK Tokens - ERC1724">
                {fakePairs.map(([a, b], index) => (
                  <TokenInput
                    key={index}
                    label="RBT"
                    firstValue={a}
                    secondValue={b}
                    onSend={stage(2)}
                  />
                ))}
              </TokenGroup>
              <TokenGroup name="Standard Tokens - ERC20">
                {fakePairs.map(([a, b], index) => (
                  <TokenInput
                    key={index}
                    label="RBT"
                    firstValue={a}
                    secondValue={b}
                    onSend={stage(2)}
                  />
                ))}
              </TokenGroup>
            </div>
          </Card>
            <div className="acc-info text-sm p-4">
              <div className="mt-2">
                <p>Send another token</p>
              </div>
            </div>

          </div>
          <div className="flex-1 flex flex-col max-w-md">
            <Card active={isStage(2)}>
            <p className={`text-5xl leading-none pl-2 pr-8 ${fade(2)}`}>2</p>
            <div className="flex-1">
              <p className="uppercase text-lg">CHOOSE RECIPIENT</p>
              <p className="text-xs color3 mb-8">
                Other online users, or Mr. Robot
              </p>
              <div className="text-sm mb-2">Search for user...</div>
                <ul className="user-list flex flex-col w-5/6">
                  {users.map( (user, index) => 
                    <UserList key={index} {...user} onSend={stage(1)}/> )}
                </ul>
            </div>
          </Card>
            <div className="acc-info text-sm p-4">
              <div className="flex">
                <Preloader />
                <span className="ml-2">The transaction is being mined</span>
              </div>
              <div className="flex mt-2">
                <img src="/assets/logo-ether.png" alt="eth" className="icons icon-lg" />
                <span className="text-gray">0x291F1ic810…2BgSdifB7</span>
              </div>
              <div className="mt-2">
                <p>Check the data on etherscan or send an ERC20 token, to see the difference!</p>
              </div>
            </div>
          </div>
        </div>

        <StaticContent />
        {/* <Router> */}
        {/* <Cart /> */}
        {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:category" component={Products} />
            <Route
              exact
              path="/category/:category/:id"
              component={SingleProduct}
            />
            <Route component={NotFound} />
          </Switch>*/}
        {/* </Router>  */}
      </div>
    </>
  );
}

export default App;