import React, { useEffect,useState } from 'react';
import { Row, Col, Spinner,Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './GalleryPhoto.css'
import { getgallery } from '../../redux/actions/Gallery';
import Photo from '../../components/Photo';
import AddPhoto from '../../components/AddPhoto'

const GalleryPhoto = ({ match }) => {
  const [show, setshow] = useState(false);
  const userId = match.params.id;
  const dispatch = useDispatch();
  const loading = useSelector(state => state.gallery.loading);
  const gallery = useSelector(state => state.gallery.gallery);
  useEffect(() => {
    dispatch(getgallery(userId));
    // eslint-disable-next-line
  },[]);

  return loading ? (
    <Spinner color='danger' />
  ) : (
    <Container>
      <Row>
        <Col md={2} className='mt-4'>
          <Link to='/'>
            <img
              src={require('../../icons/back.svg')}
              className='img-gallery'
              alt='back'
            />
          </Link>
        </Col>
        <Col md={10}>
          <h1 className='title'>USER’S PHOTO GALLERY:</h1>
        </Col>
      </Row>
      <Row>
        <Col className='md-form my-3'>
          <Row>
            <Col md={4}>
              <i className='icon-search'></i>
              <input
                className='form-control'
                type='text'
                placeholder='Search'
                aria-label='Search'
              />
            </Col>
            <Col md={4} className='ml-auto'>
              <Row>
                <Col>
                  <img
                    src={require('../../icons/add.svg')}
                    className='img-gallery-add'
                    alt='add user'
                    onClick={() => setshow(true)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        {gallery.map(photo => (
          <Photo
            title={photo.title}
            path={photo.path}
            key={photo._id}
            id={photo._id}
            userId={userId}
          />
        ))}
      </Row>
      <AddPhoto isOpen={show} toggle={() => setshow(false)} />
    </Container>
    
  );
};

export default GalleryPhoto;
