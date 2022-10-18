import PropTypes from 'prop-types';
import { Notifications } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Notifications>{message}</Notifications>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
