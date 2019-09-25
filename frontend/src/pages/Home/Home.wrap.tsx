import { connect } from 'react-redux';
import Home from './Home';
import { Dispatch } from 'redux';
import { fetchUsers } from 'redux/Users/actions';
import { RootState } from 'redux/types';

const mapStateToProps = (state: RootState) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers.request({})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
