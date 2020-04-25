import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// deconstructing props
const SearchResults = ({ search: { results, loading, isError } }) => {
  return (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        paddingTop: '25px',
      }}
    >
      <ul>
        {results !== null && results.length !== 0
          ? results.map((item) => (
              <li
                key={
                  item.id.videoId !== undefined
                    ? item.id.videoId.toString()
                    : item.id.channelId.toString()
                }
              >
                {item.snippet.title}
              </li>
            ))
          : `nothing to show, search something`}
      </ul>
    </div>
  );
};

// this is for bringing in state from store
const mapStateToProps = (state) => ({
  search: state.search,
});

SearchResults.propTypes = {
  search: PropTypes.object.isRequired,
};

// takes in (incoming state, actions you brought in), and the (component)
export default connect(mapStateToProps, null)(SearchResults);
