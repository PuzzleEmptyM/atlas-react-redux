import Header from "./Header";
import Footer from "./Footer"
import Board from './Board'
import { store } from "../store";
import { Provider } from "react-redux";

// Expose the store globally to test in console
if (process.env.NODE_ENV !== 'production') {
  (window as any).store = store;
}

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Board/>
      <Footer/>
    </Provider>
  )
}

export default App;
