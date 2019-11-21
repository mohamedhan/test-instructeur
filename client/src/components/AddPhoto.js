import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormGroup, Input, Modal } from 'reactstrap';

import { addPhoto } from '../redux/actions/Gallery';

const AddPhoto = ({ isOpen, toggle, alterUser }) => {
  const [photoInfo, setphotoInfo] = useState({
    title: '',
    path: ''
  });

  const onChangeHandler = e => {
    setphotoInfo({
      ...photoInfo,
      [e.target.name]: e.target.value
    });
  };
  const dispatch = useDispatch();
  const addNewPhoto = () => {
    dispatch(addPhoto(photoInfo));
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className='modal-header'>
        <h5 className='modal-title' >
          {alterUser ? 'Modify Photo' : ' Add new Photo'}
        </h5>
        <button
          aria-label='Close'
          className='close'
          data-dismiss='modal'
          type='button'
          onClick={toggle}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className='modal-body'>
        <FormGroup>
          <label>Name:</label>
          <Input
            defaultValue={photoInfo.name}
            placeholder='Name'
            type='text'
            name='name'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>Path</label>
          <Input
            defaultValue={photoInfo.path}
            placeholder='SurName'
            type='text'
            name='surName'
            onChange={onChangeHandler}
          />
        </FormGroup>
      </div>
      <div className='modal-footer'>
        <div className='left-side'>
          <Button
            className='btn-link'
            color='default'
            onClick={() => addNewPhoto()}
            type='button'
          >
            {alterUser ? 'Save' : 'Add New Photo'}
          </Button>
        </div>
        <div className='divider' />
        <div className='right-side'>
          <Button
            className='btn-link'
            color='danger'
            type='button'
            onClick={toggle}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddPhoto;
