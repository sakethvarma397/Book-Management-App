import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import EditBook from "./components/EditBook";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import UseLocalStorage from "./hooks/UseLocalStorage";
import BooksContext from "./hooks/BooksContext";

const App = () => {
  const [books, setBooks] = UseLocalStorage("books", []);
  return (
    <BrowserRouter>
      <div className="main-content">
        <Header />
        <BooksContext.Provider value={{ books, setBooks }}>
          <Switch>
            <Switch>
              <Route component={BookList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </Switch>
        </BooksContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
