import { useState } from "react";
import Form from "./Form";
import UsersCard from "./UsersCard";

const Users = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [show, setShow] = useState(false);

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
    e.target.reset();
    setShow(false);
    setAge("");
    setName("");
  };

  let usersList = [];

  const welcomeMessage = (name, age) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if (name === "" || age === "") {
      return "Ingrese nombre y edad para Verificar";
    }
    if (age <= 0) {
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

  const handleMsg = () => {
    welcomeMessage(name, age);
    setShow(!show);
  };

  return (
    <main className="Main">
      <header className="header">
        <h3>Formulario de Verificación</h3>
      </header>
      <Form
        handleAge={handleAge}
        handleName={handleName}
        handleSubmit={handleSubmit}
        name={name}
        age={age}
      />

      {
        !show && name && age && (
          <section className="verify">
            <button className="btn" onClick={handleMsg}>
              VERIFICAR
            </button>
          </section>
        )
      }

      {show &&
        (name && age > 18 ? (
          <p className="success">{welcomeMessage(name, age)}</p>
        ) : (
          <p className="error">{welcomeMessage(name, age)}</p>
        ))
      }

      {usersList.map((user) => (
        <UsersCard key={user.id} id={user.id} name={user.name} age={user.age} />
      ))}
    </main>
  );
};

export default Users;
