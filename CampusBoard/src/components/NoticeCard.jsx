import { formatDate } from '../utils/formatDate'

export default function NoticeCard({ notice, currentUserId, onDelete }) {
  const isOwner = notice.user_id === currentUserId

  return (
    <div className="notice-card">
      <div className="notice-card-header">
        <span className="notice-pin-indicator"></span>
        <h3>{notice.title}</h3>
      </div>
      {notice.content && <p>{notice.content}</p>}
      <div className="notice-meta">
        <small>{formatDate(notice.created_at)}</small>
        {isOwner && (
          <button className="link-button" onClick={() => onDelete(notice.id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  )
}
