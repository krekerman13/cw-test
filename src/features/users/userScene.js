import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { fetchUsers } from './actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserTable from './components/userTable';
import UserFilter from './components/userFilter';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
  },
}));

function UserScene({ fetchUsers }) {
  const [filter, setFilter] = useState('');
  const users = useSelector((state) => state.users.users);
  const error = useSelector((state) => state.users.error);
  const isFetching = useSelector((state) => state.users.isFetching);
  const classes = useStyles();

  function filterHandler(value) {
    setFilter(value);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return isFetching ? (
    <CircularProgress className={classes.root} disableShrink />
  ) : users && users.length > 0 ? (
    <>
      <UserFilter placeholder="Enter part of last name" value={filter} onChange={filterHandler} />
      <UserTable
        users={
          filter
            ? users.filter((user) => user.last_name.toLowerCase().includes(filter.toLowerCase()))
            : users
        }
      />
    </>
  ) : error ? (
    <p>Data fetching error, please reload page</p>
  ) : (
    <></>
  );
}

UserScene.propTypes = {
  fetchUsers: PropTypes.func,
};

const mapDispatchToProps = {
  fetchUsers: fetchUsers,
};

export default connect(null, mapDispatchToProps)(UserScene);
