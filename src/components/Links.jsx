import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export const Links = ({
  to ,
  name,
  style
}) => {
  return (
    <Link
    className={`${style}`}
    to={to}
  >
   {name ? name : 'Back'}
  </Link>
  )
}

Links.propTypes = {
	to : PropTypes.string , 
  name : PropTypes.string,
  style : PropTypes.string,
};
  