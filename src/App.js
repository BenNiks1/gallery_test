import React from "react";
import { connect, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Gallary from "./components/Gallary";
import { fetchPhotos, newClient } from "./redux/actions";

const App = ({ page, activeKey }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos(activeKey, page));
    dispatch(newClient());
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

const mapStateToProps = (state) => ({
  activeKey: state.localData.activeKey,
  page: state.localData.page,
});

export default connect(mapStateToProps)(App);
