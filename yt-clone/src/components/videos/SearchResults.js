import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideos } from '../../actions/searchActions';
import PropTypes from 'prop-types';

// deconstructing props
const SearchResults = ({
  search: { results, loading, isError },
  getVideos,
}) => {
  useEffect(() => {
    console.log(`Testing`);
    console.log(results);
    console.log(loading);
    console.log(isError);
    getVideos();
    // eslint-disable-next-line
  }, []);

  return <div style={{ color: 'white' }}>{!loading && `hi`}</div>;
};

// this is for bringing in state from store
const mapStateToProps = (state) => ({
  search: state.search,
});

SearchResults.propTypes = {
  search: PropTypes.object.isRequired,
  getVideos: PropTypes.func.isRequired,
};

// takes in incoming state, actions you brought in, and the component
export default connect(mapStateToProps, { getVideos })(SearchResults);
