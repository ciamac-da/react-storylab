import PropTypes from 'prop-types'
import { AlertContainer } from './Alert.styles'

export const Alert = ({ type = 'info', message, ...props }) => {
  return (
    <AlertContainer $variant={type} {...props}>
      {message}
    </AlertContainer>
  )
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string.isRequired,
}
