import { notify } from 'react-notify-toast'

export function createNotification(message) {
  notify.show(message, 'success', 4000)
}

