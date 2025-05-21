import books from "@/app/api/db";

export async function GET(request: Request, context: { params: { id: string } }) {
  console.log("Context params:", context.params);

  const id = +context.params.id;
  console.log("Converted ID:", id);

  const book = books.find((book) => book.id === id);
  console.log("Found book:", book);

  if (!book) {
    return new Response("Book not found", { status: 404 });
  }

  return Response.json(book);
}
export async function PUT(
  request: Request,
  context: {params: { id: string } },
){
  const id = +context.params.id;
  const book = await request.json();

  const index = books.findIndex((b)=> b.id === id);
  books[index] = book;
  return Response.json(books);
}


export async function DELETE(
  request: Request,
  context: {params: { id: string } },
){
  const id = +context.params.id;
  const index = books.findIndex((b)=> b.id === id);
  books.splice(index, 1);
  return Response.json(books);
}