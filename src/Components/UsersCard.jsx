const UsersCard = (props) => {
  const { name, age } = props;

  return (
    <div className="card">
      <h3>Usuario Permitido</h3>
      <div className="card-user">
        <h3>Nombre: {name}</h3>
        <h3>Edad: {age}</h3>
      </div>
    </div>
  );
};

export default UsersCard;
