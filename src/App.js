import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchedPhotos } from "./redux/actions";
import { Header } from "./components/Header/Header";
import { Gallary } from "./components/Gallary";

const App = () => {
  // const dispatch = useDispatch();
  // const image = useSelector((state) => state.dataReducer.photos.data);
  // console.log(image);
  // React.useEffect(() => {
  //   axios.get("/api/photos").then((res) => dispatch(fetchedPhotos(res.data)));
  // }, []);

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
