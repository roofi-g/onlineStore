import './App.css'
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
    const routing = useRoutes(routes);
    return (
      <Provider store={store}>
          { routing }
      </Provider>
    )
}

export default App
