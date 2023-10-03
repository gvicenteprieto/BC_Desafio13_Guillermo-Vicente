const Form = (props) => {
  const { handleSubmit, handleName, handleAge} = props;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input type="text" id="name" onChange={handleName} />
      <label htmlFor="age">Edad</label>
      <input type="number" id="age" onChange={handleAge} />
      <button type="submit">RESET</button>
    </form>
  );
};

export default Form;
