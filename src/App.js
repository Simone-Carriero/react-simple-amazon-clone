import {
  Routes,
  Route
} from 'react-router-dom'

import Header from "./routes/header/header.component";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
      </Route>
    </Routes>
  );
}

export default App;
