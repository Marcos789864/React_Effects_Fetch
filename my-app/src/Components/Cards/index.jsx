import React, { useState } from 'react';
import Modal from '../Modal';

const Card = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="card">
      <img src={user.picture.large} alt={user.name.first} />
      <h2>{user.name.first} {user.name.last}</h2>
      <p>Email: <a href={"mailto:" + user.email}>{user.email}</a></p>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <button className='modal-open-btn' onClick={toggleModal}>Mas informacion</button>
      {modalOpen && <Modal user={user} onClose={toggleModal} />}
    </div>
  );
};

export default Card;