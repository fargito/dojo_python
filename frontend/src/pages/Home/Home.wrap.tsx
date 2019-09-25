import { connect } from 'react-redux';
import Home from './Home';

const usersMock = [
  {
    username: 'Le grand Fargito',
    score: 1,
  },
  {
    username: 'Jojo la brute',
    score: 2,
  },
  {
    username: 'El gran Fargito',
    score: 3,
  },
];

const mapStateToProps = () => ({
  users: usersMock,
});

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
