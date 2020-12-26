import React, { useState, useCallback, useEffect, useRef } from 'react';
import { listMovie } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import ImageContainer from '../components/ImageContainer';
import Header from '../components/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import _ from 'lodash';





const HomePage = () => {
  const pageNumber = useRef(1);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.listMovie);
  const observer = useRef();

  const lastMovieElementRef = useCallback(node => {

    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !error) {

        getData();
      }
    });
    if (node) observer.current.observe(node)
  }, [loading, error]);


  const getData = () => {
    pageNumber.current++;
    dispatch(listMovie(pageNumber.current, search));
  };

  const renderMovie = () => {
    return data.map((movie, i) => {
      if (i + 1 === data.length) {
        return <ContentContainer  key={i} ref={lastMovieElementRef}>
          <ImageContainer image={movie.Poster} width='180px' height='240px' />
          <Link to={`detail/${movie.imdbID}`}>
            <div style={{ width: 180 }}>
              <h3 style={{ textAlign: 'center' }}>{movie.Title}</h3>
              <p style={{ textAlign: 'center' }}>{movie.Year}</p>
            </div>
          </Link>
        </ContentContainer>
      } else {
        return <ContentContainer key={i}>
          <ImageContainer image={movie.Poster} width='180px' height='240px' />
          <Link to={`detail/${movie.imdbID}`}>
            <div style={{ width: 180 }}>
              <h3 style={{ textAlign: 'center' }}>{movie.Title}</h3>
              <p style={{ textAlign: 'center' }}>{movie.Year}</p>
            </div>
          </Link>
        </ContentContainer>
      }
    })
  };

  useEffect(() => {  
    dispatch(listMovie(1));
  }, []);

  const Empty = ({ err }) => {
    if (data.length == 0) {
      return <div>{err}</div>
    } else return <div>SUdah habis</div>
  }

  const delayedQuery = _.debounce((value) => {
    setSearch(value);
    dispatch(listMovie(1, value));
    console.log('deobunce')
  }, 600);

  const handleSearch = (e) => {
    delayedQuery(e.target.value);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container>
        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', }}>
          {renderMovie()}
        </div>
        {loading && <h3 style={{ textAlign: 'center' }}>Loading ...</h3>}
        {error && data.length == 0 && <h3 style={{ textAlign: 'center' }}>{error}</h3>}
      </Container>
    </>
  )
}


const loadData = store => {
  return store.dispatch(listMovie(1));
};


export default { loadData, component: HomePage };

const Container = styled.div`
  padding: 20px;
  width: 100%; 
  max-width: 960px;
  margin: auto; 
  justify-content: center;

`;


const ContentContainer = styled.div`
  flex : 0 0 33.33333%;
  display : flex;
  flex-direction: column;
  align-items : center;
  padding: 40px 20px;
  @media(max-width: 800px){
    flex : 0 0 50%;
  }
  @media(max-width: 600px){
    flex : 0 0 100%;
  }
`;
