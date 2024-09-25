import Header from "./Header";
import Footer from "./Footer"
import Board from './Board'
import { store, persistor } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

if (process.env.NODE_ENV !== 'production') {
  (window as any).store = store;
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header/>
        <Board/>
        <Footer/>
      </PersistGate>
    </Provider>
  )
}

export default App;
