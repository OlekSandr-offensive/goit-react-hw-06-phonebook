import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Filter.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className="Filter">
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

const mapDispatchToProps = dispatch => ({
  // value: () => dispatch(filterAction(event.currentTarget.value))
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filter);
