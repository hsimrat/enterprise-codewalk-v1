const UserCard = ({ user: { name, email }, settings: { preferences: { theme } = {} } = {} }) => {
  return (
    <div className={`card theme-${theme}`}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
