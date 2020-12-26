import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailMovie } from '../actions/index';
import styled from 'styled-components';
// import ImageNotAvalable from '../../assets/not_avalable.png'
import ImageContainer from '../components/ImageContainer';

const loadData = (store, param) => {
  let id = param.split('/')[2];
  return store.dispatch(detailMovie(id));
}

const UserListPage = (props) => {
  const dispatch = useDispatch();
  const { error, data, loading } = useSelector((state) => state.detailMovie);
  useEffect(() => {
    let id = props.match.params.id
    dispatch(detailMovie(id));
  }, [])
  return <div>
    <Background image={data.Poster}>
    </Background>
    <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>

      <Container>
        <ContentContainer style={{
          justifyContent: 'center',
          display: 'flex'
        }}>
          <ImageContainer image={data.Poster} width='300px' height='400px'></ImageContainer>
        </ContentContainer>

        <ContentContainer>
          <h1 style={{ fontSize: 42, margin: 0, lineHeight: 1 , wordBreak: 'break-word'}}>{data.Title && data.Title.toUpperCase()}</h1>
          <p style={{ marginTop: 20 }}>
            {data.Plot}
          </p>
          <table style={{ marginTop: 20 }}>
            <tr>
              <td width='120' style={{ display: 'flex', justifyContent: 'space-between' }}> <span>Released</span><span>:</span></td>
              <td>{data.Released}</td>
            </tr>
            <tr>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}> <span>Duration</span><span>:</span></td>

              <td>{data.Runtime}</td>
            </tr>
            <tr>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}> <span>IMDB Rating</span><span>:</span></td>

              <td>{data.imdbRating}</td>
            </tr>
            <tr>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}> <span>Rated</span><span>:</span></td>

              <td>{data.Rated}</td>
            </tr>
            <tr>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}> <span>Genre</span><span>:</span></td>
              <td> {data.Genre}</td>
            </tr>
            <tr>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}> <span>Writer</span><span>:</span></td>
              <td> {data.Writer}</td>
            </tr>
            <tr>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}> <span>Director</span><span>:</span></td>
              <td> {data.Director}</td>
            </tr>
            <tr>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}> <span>Actors</span><span>:</span></td>
              <td> {data.Actors}</td>
            </tr>
          </table>

        </ContentContainer>

      </Container>
    </div>



  </div >
}

export default { loadData, component: UserListPage };

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



const Container = styled.div`
  padding: 60px 20px;
  width: 100%; 
  max-width: 960px;
  margin: auto; 
  display : flex;
  flex-wrap: wrap;
`;

const ContentContainer = styled.div`
  flex : 0 0 50%; 
  padding: 20px;  
  position: relative;
  @media(max-width: 800px){
    flex : 0 0 100%;
  }
`;
 
