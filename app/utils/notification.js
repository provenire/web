export default function notification(message, options = {}) {
  return $('body').pgNotification({
    style:    options.style || 'bar',
    position: options.position || 'top',
    type:     options.type || 'success',
    message:  message
  });
}
