function LogCard({ logtitle, content, timestamp }) {
  return (
    <div className="log-card">
      <h3>Log Title: {logtitle}</h3>
      <div className="log-content">
        {content}
      </div>
      <small>{timestamp}</small>
    </div>
  );
}

export default LogCard;