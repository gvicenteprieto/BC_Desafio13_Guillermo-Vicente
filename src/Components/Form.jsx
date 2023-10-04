const Form = (props) => {
  const { handleSubmit, handleName, handleAge, name, age} = props;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input type="text" id="name" onChange={handleName} />
      <label htmlFor="age">Edad</label>
      <input type="number" id="age" onChange={handleAge} />
      {name && age ? (
        <button type="submit"> RESETEAR</button>
      ) : (
        <input type="submit" class="button" disabled value="INGRESE SUS DATOS"/>
      )}

    </form>
  );
};

export default Form;
