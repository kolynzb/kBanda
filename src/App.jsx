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
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase/auth";
import { setActiveUser, setUserLogoutState } from "./features/slices/userSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      authUser
        ? dispatch(setActiveUser(authUser))
        : dispatch(setUserLogoutState());
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/welcome" element={<WelcomePg />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Home />} />
              <Route path="/movies/:slug" element={<MovieDetailsPg />} />{" "}
              <Route path="/tvshows" element={<Home />} />
              <Route path="/tvshows/:slug" element={<MovieDetailsPg />} />
              <Route path="/watchlist" element={<WatchListPg />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
