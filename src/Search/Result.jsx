export function ResultList({ items, error }) {
  if (error) {
    const errorHtml = `<span class="error">${error}</span>`;

    return (
      <div
        className="result-list"
        dangerouslySetInnerHTML={{ __html: errorHtml }}
      />
    );
  }

  return (
    <div className="result-list">
      {!items || (!items.length && <span>No results yet...</span>)}
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
        {ranking && <small>{ranking}</small>}
        <b className="title">{title}</b>
        <span>{description}</span>
      </div>
    </div>
  );
}
