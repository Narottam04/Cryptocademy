import { BrowserRouter } from "react-router-dom";

import "./App.css";

import ErrorBoundary from "./Utils/ErrorBoundary";

import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import ClientError from "./Pages/ClientError";

function App() {
  return (
    <div className="App scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-black">
      <BrowserRouter>
        <ErrorBoundary fallback={<ClientError />}>
          <ScrollToTop />
          <AnimatedRoutes />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
