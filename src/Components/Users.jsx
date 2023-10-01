import { useState } from "react";
import UsersCard from "./UsersCard";

const Users = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const usersList = [];

  const welcomeMessage = (name, age) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if (name === "" && age === "") {
      return "Ingrese nombre y edad para Verificar";
    }
    if (name === "") {
      return "Por favor ingrese su nombre";
    }
    if (age === "") {
      return `Por favor ingrese su edad ${name}`;
    }
    if (age < 0) {
      return "Por favor ingrese una edad válida";
    }
    if (age < 18) {
      return `Hola ${name}, eres muy joven para usar esta aplicación`;
    } else {
      const newUser = { id: usersList.length + 1, name: name, age: age };
      usersList.push(newUser);
      return `Le damos la Bienvenida ${name}, gracias por usar nuestra aplicación`;
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    return name;
  };

  const handleAge = (e) => {
    setAge(e.target.value);
    return name;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    welcomeMessage(name, age);
    e.target.name.value = "";
    e.target.age.value = "";
  };

  const reset = () => {
    setName("");
    setAge("");
  };

  return (
    <main className="Main">
      <header className="header">
        <h4>Formulario </h4>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" onChange={handleName} />
        <label htmlFor="age">Edad</label>
        <input type="number" id="age" onChange={handleAge} />
        <button onClick={reset}>RESET</button>
      </form>
      {/* si  el usuario cargó los datos se muestra mensaje*/}
      {name && age > 18 ? (
        <p className="success">{welcomeMessage(name, age)}</p>
      ) : (
        <p className="error-0">{welcomeMessage(name, age)}</p>
      )}
      {/* si  el usuario es admitido muestra la UsersCard*/}
      {usersList.map((user) => (
        <UsersCard key={user.id} id={user.id} name={user.name} age={user.age} />
      ))}
    </main>
  );
};

export default Users;
