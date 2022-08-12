import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({name, onTip}) => (
  <button
    name={name}
    className={s.button}
    onClick={(event) => {
      const name = event.currentTarget.name;

      onTip(name);
    }}
  >{name}
  </button>
)

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onTip: PropTypes.func.isRequired
}

export default Button;

