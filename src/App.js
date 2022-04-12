/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */

import "./App.css";
import Router from "./rooter/rooter";
import { StatisticsProvider } from "./contexts/statistics";

function App() {
  return (
    //We created a provider and surrounded the whole project.
    <StatisticsProvider>
      <Router />
    </StatisticsProvider>
  );
}

export default App;
