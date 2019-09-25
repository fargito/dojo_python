import { connect } from 'react-redux';
import Home from './Home';

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

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
