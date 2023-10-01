import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Users from "./Components/Users";
// import UsersCard from "./Components/UsersCard";

// const usersList = [
//   {
//     id: 1,
//     name: "Amapola",
//     age: 25
//   },
//   {
//     id: 2,
//     name: "Julia ",
//     age: 24
//   },
//   {
//     id: 3,
//     name: "Guille",
//     age: 26
//   }
// ];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Users />
      {/* {usersList.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))} */}

      {/* {usersList.map((user) => (
        <UsersCard key={user.id} name={user.name} age={user.age} />
      ))} */}
      <Footer />
    </div>
  );
}

export default App;