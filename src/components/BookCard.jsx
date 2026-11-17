function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <article className={`book-card ${estDisponible ? '' : 'is-borrowed'}`}>
      <div className="book-card-top">
        <span className="book-mark" aria-hidden="true">L</span>
        <span className={`book-status ${estDisponible ? 'available' : 'borrowed'}`}>
          <span className="status-dot" aria-hidden="true" />
          {estDisponible ? 'Disponible' : 'Emprunté'}
        </span>
      </div>
      <div className="book-info">
        <h3>{titre}</h3>
        <p>{auteur}</p>
      </div>
      <button
        className={`borrow-button ${estDisponible ? '' : 'return-button'}`}
        type="button"
        onClick={onClickEmprunt}
      >
        {estDisponible ? 'Emprunter' : 'Rendre'}
        <span aria-hidden="true">↗</span>
      </button>
    </article>
  )
}

export default BookCard
