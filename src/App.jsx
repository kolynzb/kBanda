import "./App.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import WelcomePg from "./pages/WelcomePg";
import WatchListPg from "./pages/WatchListPg";
import MovieDetailsPg from "./pages/MovieDetailsPg";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Home />} />
            <Route path="/movies/:slug" element={<MovieDetailsPg />} />
            <Route path="/tvshows" element={<Home />} />
            <Route path="/tvshows/:slug" element={<MovieDetailsPg />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/watchlist" element={<WatchListPg />} />
            <Route path="/welcome" element={<WelcomePg />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;