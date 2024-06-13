export function ResultList({ items }) {
  return (
    <div className="result-list">
      {items.map((item, index) => (
        <ResultCard key={index} {...item} />
      ))}
    </div>
  );
}

export function ResultCard({ title, description, cover, ranking }) {
  return (
    <div className="result-card">
      <div>
        <img src={cover} width={50} />
      </div>
      <div className="result-card-info">
        {ranking && <small>#{ranking}</small>}
        <b>{title}</b>
        <span>{description}</span>
      </div>
    </div>
  );
}
