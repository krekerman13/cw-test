import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
});

export const UserFilter = ({ value, onChange, placeholder }) => {
  const classes = useStyles();

  function handleChange(event) {
    onChange(event.target.value);
  }
  return (
    <Input
      className={classes.input}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

UserFilter.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default UserFilter;
