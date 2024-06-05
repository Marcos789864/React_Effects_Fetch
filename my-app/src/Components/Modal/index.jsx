
const Modal = ({ user, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-dialog">
        <div>
          <p>{user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
          <button className="modal-close-btn" onClick={onClose}>Close Modal</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;