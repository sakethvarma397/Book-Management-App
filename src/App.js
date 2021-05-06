import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import EditBook from "./components/EditBook";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import UseLocalStorage from "./hooks/UseLocalStorage";

const App = () => {
  const [books, setBooks] = UseLocalStorage("books", []);
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            render={(props) => (
              <BookList {...props} books={books} setBooks={setBooks}></BookList>
            )}
            exact={true}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddBook {...props} books={books} setBooks={setBooks}></AddBook>
            )}
          />
          <Route
            path="/edit/:id"
            render={(props) => (
              <EditBook {...props} books={books} setBooks={setBooks}></EditBook>
            )}
          />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
