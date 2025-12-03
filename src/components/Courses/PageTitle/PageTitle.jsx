import './PageTitle.css'
import Books  from './assets/books.svg'
export function PageTitle() { 
    return (
        <>
            <div className="page-title">
                <img src={Books} alt="books" />
                <h1>Kurslar</h1>
            </div>
        </>
    )
}