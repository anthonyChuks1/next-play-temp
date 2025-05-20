import React from 'react'

export default async function page() {
  
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if(!response.ok) throw new Error ("Failed to fetch data");
  const albums = await response.json();
  const selectedAlbums: { id: number; title: string }[] = []
  const randomizeAlbums = () => {
  selectedAlbums.length = 0;
  const usedIndices = new Set<number>();
  while (selectedAlbums.length < 11) {
    const randomIndex = Math.floor(Math.random() * albums.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      selectedAlbums.push({ id: albums[randomIndex].id, title: albums[randomIndex].title });
    }
  }
};

randomizeAlbums();

return (
  <div className="fade-in">
    <div className="banner">
      <div className="slider" style={{ "--quantity": selectedAlbums.length } as React.CSSProperties}>
        {selectedAlbums.map((album: { id: number; title: string }, index: number) => (
                  <div key={album.id} className="item crt" style={{ "--position": index } as React.CSSProperties}>
                    <div className="image-container">{album.id}
                      <img src={`/images/${album.id % 2 + 1}.jpg`} alt={album.title} />
                      <div className="image-text">{album.title}</div>
                    </div>
                  </div>
                ))}
      </div>
      <div className="content crt">
        <h1 data-content="HOME"><b>HOME</b></h1>
        <p><b>Welcome to our website</b></p>
      </div>
    </div>
  </div>
);
}


