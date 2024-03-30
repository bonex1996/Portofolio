import { Fragment } from "react";
import HomeLayoyts from "./components/Layouts/HomeLayouts";
import Header from "./components/Fragments/Header";
import QualityLayout from "./components/Layouts/QualityLayout";

const App = () => {
  return (
    <Fragment>
      <Header />
      <HomeLayoyts />
      <QualityLayout />
    </Fragment>
  );
};

export default App;
