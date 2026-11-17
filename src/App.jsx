import { useState } from 'react'
import BookCard from './components/BookCard.jsx'
import './App.css'

const initialBooks = [
  { id: 1, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', estDisponible: true },
  { id: 2, titre: 'L’Étranger', auteur: 'Albert Camus', estDisponible: false },
  { id: 3, titre: 'Les Misérables', auteur: 'Victor Hugo', estDisponible: true },
  { id: 4, titre: 'Madame Bovary', auteur: 'Gustave Flaubert', estDisponible: true },
]

function App() {
  const [books, setBooks] = useState(initialBooks)
  const [titre, setTitre] = useState('')
  const [auteur, setAuteur] = useState('')

  const livresDisponibles = books.filter((book) => book.estDisponible).length

  function onClickEmprunt(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? { ...book, estDisponible: !book.estDisponible }
          : book,
      ),
    )
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nouveauTitre = titre.trim()
    const nouvelAuteur = auteur.trim()
    if (!nouveauTitre || !nouvelAuteur) return

    setBooks((currentBooks) => [
      ...currentBooks,
      {
        id: Math.max(0, ...currentBooks.map((book) => book.id)) + 1,
        titre: nouveauTitre,
        auteur: nouvelAuteur,
        estDisponible: true,
      },
    ])
    setTitre('')
    setAuteur('')
  }

  return (
    <main className="library">
      <header className="page-header">
        <p className="eyebrow">Votre espace lecture</p>
        <h1>
          {livresDisponibles} livre{livresDisponibles > 1 ? 's' : ''}{' '}
          disponible{livresDisponibles > 1 ? 's' : ''}
        </h1>
        <p className="availability" aria-live="polite">
          <span className="availability-count">{books.length}</span>
          {' '}livre{books.length > 1 ? 's' : ''} au catalogue
        </p>
      </header>

      <section className="books-section" aria-labelledby="books-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">À découvrir</p>
            <h2 id="books-heading">Le catalogue</h2>
          </div>
          <span className="book-total">{books.length} livres</span>
        </div>
        <div className="book-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              titre={book.titre}
              auteur={book.auteur}
              estDisponible={book.estDisponible}
              onClickEmprunt={() => onClickEmprunt(book.id)}
            />
          ))}
        </div>
      </section>

      <section className="add-section" aria-labelledby="add-heading">
        <div className="add-intro">
          <p className="eyebrow">Un livre à partager ?</p>
          <h2 id="add-heading">Ajouter au catalogue</h2>
          <p>Enrichissez la bibliothèque avec votre prochaine lecture.</p>
        </div>
        <form className="add-form" onSubmit={handleSubmit}>
          <label>
            Titre du livre
            <input
              type="text"
              value={titre}
              onChange={(event) => setTitre(event.target.value)}
              placeholder="Ex. Le Grand Meaulnes"
              required
            />
          </label>
          <label>
            Auteur
            <input
              type="text"
              value={auteur}
              onChange={(event) => setAuteur(event.target.value)}
              placeholder="Ex. Alain-Fournier"
              required
            />
          </label>
          <button className="add-button" type="submit">Ajouter le livre</button>
        </form>
      </section>
    </main>
  )
}

export default App
