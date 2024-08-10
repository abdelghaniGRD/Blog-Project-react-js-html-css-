import Navbar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Blog from "./blog";

import NotFound from "./NotFound";

function App() {
  const { data: blogs } = useFetch("http://localhost:8000/blogs");
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route exact path="/blogs">
              {blogs && <BlogList blogs={blogs} title={"all blogs"} />}
            </Route>
            <Route path="/blogs/:id">
              <Blog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
