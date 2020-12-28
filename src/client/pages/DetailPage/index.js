import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailMovie } from '../../store/actions/movieAction';
import styled from 'styled-components';
import ImageContainer from '../../components/ImageContainer';
import PropTypes from 'prop-types';
import { Col, Row } from '../../components/Grid';
import { useHistory } from 'react-router-dom';


const loadData = (store, param) => {
  let id = param.split('/')[2];
  return store.dispatch(detailMovie(id));
}

const UserListPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, data, loading } = useSelector((state) => state.detailMovie);
  useEffect(() => {
    window.scrollTo(0, 0);
    let id = props.match.params.id;
    dispatch(detailMovie(id));
  }, [])
  return <div>
    <Background image={data.Poster}>
    </Background>
    <BlurWrapper
      testing={loading || error}
      style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
      <Container>
        <Row>
          <Col sm='1' md='2' lg='2'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Button onClick={() => history.push('/')}> &#8592; Back To Home</Button>
              <ImageContainer image={data.Poster} width='300px' height='400px'></ImageContainer>
            </div>
          </Col>
          <Col sm='1' md='2' lg='2' direction='column' align='flex-start'>
            <h1 style={{ fontSize: 42, margin: 0, lineHeight: 1, wordBreak: 'break-word' }}>{data.Title && data.Title.toUpperCase()}</h1>
            <p style={{ marginTop: 20 }}>
              {data.Plot}
            </p>
            <table style={{ marginTop: 20 }}>
              <tr>
                <td className='left'> <span>Released</span><span>:</span></td>
                <td>{data.Released}</td>
              </tr>
              <tr>
                <td className='left'> <span>Duration</span><span>:</span></td>
                <td>{data.Runtime}</td>
              </tr>
              <tr>
                <td className='left'> <span>IMDB Rating</span><span>:</span></td>
                <td>{data.imdbRating}</td>
              </tr>
              <tr>
                <td className='left'> <span>Rated</span><span>:</span></td>
                <td>{data.Rated}</td>
              </tr>
              <tr>
                <td className='left'> <span>Genre</span><span>:</span></td>
                <td> {data.Genre}</td>
              </tr>
              <tr>
                <td className='left'> <span>Writer</span><span>:</span></td>
                <td> {data.Writer}</td>
              </tr>
              <tr>
                <td className='left'> <span>Director</span><span>:</span></td>
                <td> {data.Director}</td>
              </tr>
              <tr>
                <td className='left'> <span>Actors</span><span>:</span></td>
                <td> {data.Actors}</td>
              </tr>
            </table>
          </Col>

        </Row>
      </Container>
    </BlurWrapper>
    {error &&
      <div style={{ position: 'fixed', top: '50%', left: "50%", transform: 'translate(-50%, -50%)' }}>
        <h1>OPPS ERROR</h1>
        <p style={{ textAlign: 'center' }}>{error}</p>
      </div>
    }
  </div >
}

const Background = styled.div`
  position: fixed;
  min-height :100vh;
  width: 100%;  
  opacity: 1; 
  background-color: black;
  ::after{
    content: ""; 
    background-image : ${({ image }) => `url(${image})`}; 
    background-repeat: no-repeat;
    filter: blur(12px);
    background-size: cover;
    opacity: 0.25;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  }
`;

const BlurWrapper = styled.div`
  filter: blur(${({ testing }) => testing ? '30px' : '0px'});
  transition : 0.5s;
`;

const Container = styled.div`
  padding: 60px 20px;
  width: 100%; 
  max-width: 960px;
  margin: auto;   
`;

const Button = styled.button`
  border: 2px solid white; 
  color: white;
  padding: 14px 28px;
  font-size: 20px;
  cursor: pointer;
  margin: 10px 0 40px;
  border-radius: 40px;
  background-color: transparent;
  :focus{
  outline: 0; 
  }
`;

UserListPage.propTypes = {
  match: PropTypes.object,
};




export default { loadData, component: UserListPage };
