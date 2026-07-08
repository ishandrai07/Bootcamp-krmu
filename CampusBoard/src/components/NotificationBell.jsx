import { useState } from 'react'
import { useNotifications } from '../hooks/useNotifications'
import { formatDate } from '../utils/formatDate'

export default function NotificationBell({ userId }) {
  const { notifications, unreadCount, markAllRead } = useNotifications(userId)
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((prev) => !prev)
    if (!open && unreadCount > 0) markAllRead()
  }

  return (
    <div className="bell-wrapper">
      <button className="bell-button" onClick={toggleOpen} aria-label="Notifications">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        {unreadCount > 0 && <span className="bell-badge">{unreadCount}</span>}
      </button>

      {open && (
        <div className="bell-dropdown">
          {notifications.length === 0 && <p>No notifications yet.</p>}
          {notifications.map((n) => (
            <div key={n.id} className="bell-item">
              <p>{n.message}</p>
              <small>{formatDate(n.created_at)}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
