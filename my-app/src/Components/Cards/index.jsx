const Card = ({ user }) => {
    return (
      <div className="card">
        <img src={user.picture.large} alt={user.name.first} />
        <h2>{user.name.first} {user.name.last}</h2>
        <p>Email: <a href={"mailto:" + user.email}> {user.email}</a></p>
        <p>Location: {user.location.city}, {user.location.country}</p>
      </div>
    );
  }
export default Card