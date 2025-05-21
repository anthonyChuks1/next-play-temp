import { Url } from "next/dist/shared/lib/router/router";

export default async function Page() {
  const response = await fetch ("http://localhost:3000/api/books");
  const books = await response.json();

  return (
     <div className="fade-in">
        <div className="banner">
          <div className="slider" style={{ "--quantity": books.length } as React.CSSProperties}>
            {books.map((book: { id: number; title: string; author : string; year: number; imageUrl : string }, index: number) => (
                      <div key={book.id} className="item crt" style={{ "--position": index } as React.CSSProperties}>
                        <div className="image-container">{book.id}
                          <img src={book.imageUrl ? book.imageUrl : "/images/1"} alt={''} />
                          <div className="image-text">{book.title}</div>
                        </div>
                      </div>
                    ))}
          </div>
          <div className="content crt">
            <h1 data-content="BOOKS"><b>BOOKS</b></h1>
            <p><b>GET YOUR BOOKS</b></p>
          </div>
        </div>
      </div>
  )
}