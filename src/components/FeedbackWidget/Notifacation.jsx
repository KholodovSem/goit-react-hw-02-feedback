import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.h3`
text-align: center;
`

const Notifacation = ({message}) => (
  <Header>{message}</Header>
)

Notifacation.propTypes = {
  message: PropTypes.string.isRequired
}

export default Notifacation;

