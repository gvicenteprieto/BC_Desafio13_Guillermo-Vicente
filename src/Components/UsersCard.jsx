
const UsersCard = (props) => {

  const { name, age } = props;

  return (
    <div className="card">
      <h2>Usuario Permitido</h2>
         <h2>Nombre: {name}</h2>
         <h3>Edad: {age}</h3>
    </div>
  )
}

export default UsersCard