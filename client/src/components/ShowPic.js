import React from 'react';
import { Modal, CardImg } from 'reactstrap';
import './components.css'

const showPic = ({ show, toggle, path }) => {
  return (
    <Modal isOpen={show} className='modal-lg photo-modal' toggle={toggle}>
      <CardImg top src={path} alt='...' />
    </Modal>
  );
};

export default showPic;
