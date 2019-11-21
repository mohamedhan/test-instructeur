import React, { useState } from 'react';
import { Card, CardImg, CardBody, Col, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import './components.css'
import ShowPic from '../components/ShowPic';
import { deletePhoto } from '../redux/actions/Gallery';

const Photo = ({ title, path, id, userId }) => {
  const dispatch = useDispatch();
  const [pic, setpic] = useState({
    show: false,
    path: ''
  });
  const showPic = () => {
    setpic({
      show: true,
      path: path
    });
  };
  const deletePic = e => {
    dispatch(deletePhoto(e.target.id, userId));
  };

  return (
    <Col>
      <ShowPic
        show={pic.show}
        path={pic.path}
        toggle={() => setpic({ show: false, path: '' })}
      />
      <Card style={{ width: '20rem' }}>
        <CardImg top src={path} alt='...' style={{ height: '250px' }} />
        <CardBody>
          <Row>
            <Col>{title}</Col>
            <Col className='ml-auto'>
              <img
                src={require('../icons/eye.svg')}
                alt='eye '
                className='photo '
                onClick={showPic}
              />
              <img
                userId={userId}
                id={id}
                src={require('../icons/delete.svg')}
                alt='eye'
                className='photo'
                onClick={e => deletePic(e)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Photo;
