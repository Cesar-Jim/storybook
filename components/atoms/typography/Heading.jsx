import PropTypes from 'prop-types';

import './heading.css';

/**
 * Mobile first approach
 */
const Heading = ({ text, size, weight = 'bold', color, ...props }) => {
  return (
    <h1
      className={['heading', `heading--${size}`].join(' ')}
      style={{
        color,
        fontWeight: weight === 'semiBold' ? 400 : 700,
        fontSize: size,
      }}
      {...props}
    >
      {text}
    </h1>
  );
};

Heading.propTypes = {
  /**
   * Text is a required parameter
   */
  text: PropTypes.string.isRequired,
  /**
   * How large should the heading be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /**
   * 400 and 700 are accepted weights
   */
  weight: PropTypes.oneOf(['semiBold', 'bold']),
  /**
   * What font color to use?
   */
  color: PropTypes.string,
};

Heading.defaultProps = {
  text: 'Heading',
  size: 'sm',
  weight: 'bold',
  color: '#151b23',
};

export default Heading;
