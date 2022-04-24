import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useState } from "react";

function App() {
  const admin = localStorage.getItem('isAdmin') === process.env.REACT_APP_SEC;
  const [userN, setUserN] = useState('');
  const [pass, setPass] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if(userN === process.env.REACT_APP_AdminN && pass === process.env.REACT_APP_Pass){
      localStorage.setItem('isAdmin', process.env.REACT_APP_SEC);
      window.location.reload();
    }
  }
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        ) : (
          <form onSubmit={submit} style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column'}}>
            <h1>Admin</h1>
            <label style={{marginLeft: '-100px', marginTop: '10px', marginBottom: '10px'}}>Username:</label>
            <input type="text" onChange={e => setUserN(e.target.value)} required/>
            <label style={{marginLeft: '-100px', marginTop: '10px', marginBottom: '10px'}}>Password:</label>
            <input type="password" onChange={e => setPass(e.target.value)} required/>
            <button type="submit" style={{margin: '10px', outline: 'none', border: '1px solid #000', color: '#000', background: '#fff', fontSize: '1.1rem', padding: '10px 15px', cursor: 'pointer'}}>login</button>
          </form>
        )}
      </Switch>
    </Router>
  );
}

export default App;
