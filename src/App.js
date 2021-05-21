import React from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header/Header";
import Gallary from "./components/Gallary";
import { fetchPhotos } from "./redux/actions";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos('new'));
  });
  return (
    <div>
      <Header />
      <main className="main">
        <Gallary />
      </main>
    </div>
  );
};

export default App;
