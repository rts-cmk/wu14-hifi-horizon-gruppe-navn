import { Route, Routes, Link, NavLink } from "react-router";
import FrontPage from "./Sites/frontPage";

function App() {
  return (
    <>
      <h1>Hejsa</h1>
      <Link to="/" end>Forside</Link>
      <Routes >
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </>
  );
}

export default App;
