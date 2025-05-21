import Hello from "../../components/Hello";

export default async function page() {
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="fade-in">
      <div className = "banner">
        <div className="content">
          <h1 data-content = "ABOUT PAGE"><b>ABOUT PAGE</b></h1>
          <p><b>Welcome to our website</b></p>
        </div>
      </div>
      
    </div>
  );
}

