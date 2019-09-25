import { connect } from 'react-redux';
import Home from './Home';
import { Dispatch } from 'redux';
import { fetchUsers } from 'redux/Users/actions';

const usersMock = [
  {
    username: 'Le grand Fargito',
    level: 1,
  },
  {
    username: 'Jojo la brute',
    level: 2,
  },
  {
    username: 'El gran Fargito',
    level: 3,
  },
];

const mapStateToProps = () => ({
  users: usersMock,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers.request({})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
