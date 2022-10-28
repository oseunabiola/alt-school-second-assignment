import { BrowserRouter as Router, Link, Outlet, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Users from "./pages/Users.";

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div style={{ height: "100%" }}>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <Nav />
            <Routes>
              <Route index path="/" element={<Home />}></Route>
              <Route index path="users" element={<Users />}></Route>
              <Route path="nested" element={<NestedRouteParent />}>
                <Route index element={<NestedRouteOne />}></Route>
                <Route path="route-one" element={<NestedRouteOne />}></Route>
                <Route path="route-two" element={<NestedRouteTwo />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

function Nav() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function NestedRouteOne() {
  return <div>I am nested route 1 mnkl</div>;
}
function NestedRouteTwo() {
  return <div>I am nested route 2</div>;
}
function NestedRouteParent() {
  return (
    <div>
      <nav>
        <Link to="route-one">Route 1</Link>
        <Link to="route-two">Route 2</Link>
      </nav>
      <Outlet />
    </div>
  );
}
function PageNotFound() {
  return <div>404, missing</div>;
}
