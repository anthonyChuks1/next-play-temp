import books from "@/app/api/db"


export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request){
  const book = await request.json();
  const updatedBooks = [...books, book];
  return Response.json(updatedBooks);
}