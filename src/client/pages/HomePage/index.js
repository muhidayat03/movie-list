import React, { useState, useCallback, useEffect, useRef } from 'react';
import { listMovie } from '../../store/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import ImageContainer from '../../components/ImageContainer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Col, Row } from '../../components/Grid';
import Layout from '../../components/Layout';


const HomePage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.listMovie);
  const pageNumber = useRef(1);
  const observer = useRef();
  const [search, setSearch] = useState('');

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

  const delayedQuery = _.debounce((value) => {
    setSearch(value);
    dispatch(listMovie(1, value));
  }, 600);

  const handleSearch = (e) => {
    delayedQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(listMovie(1));
  }, []);

  return (
    <Layout>
      <Header handleSearch={handleSearch} />
      <Row>
        {data.map((movie, i) => (
          <Col
            ref={i == data.length - 1 ? lastMovieElementRef : undefined}
            key={i}
            lg='3'
            md='2'
            sm='1'
            direction='column'
            justify='flex-start'
            padding='40px 20px'
            align='center'
          >
            <ImageContainer image={movie.Poster} width='180px' height='240px' />
            <Link to={`detail/${movie.imdbID}`}>
              <div style={{ width: 180 }}>
                <h3 style={{ textAlign: 'center' }}>{movie.Title}</h3>
                <p style={{ textAlign: 'center' }}>{movie.Year}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      {loading && <h3 style={{ textAlign: 'center' }}>Loading ...</h3>}
      {error && data.length == 0 && <h3 style={{ textAlign: 'center' }}>{error}</h3>}
    </Layout>
  )
}


const loadData = store => {
  return store.dispatch(listMovie(1));
};

export default { loadData, component: HomePage };