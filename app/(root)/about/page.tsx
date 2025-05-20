import Hello from "../../components/Hello";

export default async function page() {
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="fade-in">
      <div className = "banner">
        {/* <div className="slider" style={{ "--quantity": 10} as React.CSSProperties}>
          <div className="item" style={{ "--position": 1 } as React.CSSProperties}><img src="/images/1.jpg" alt="Davida Martinez" /></div>
          <div className="item" style={{ "--position": 2 } as React.CSSProperties}><img src="/images/2.jpg" alt="Ghost in the shell" /></div>
          <div className="item" style={{ "--position": 3 } as React.CSSProperties}><img src="/images/2.jpg" alt="Ghost in the shell" /></div>
          <div className="item" style={{ "--position": 4 } as React.CSSProperties}><img src="/images/1.jpg" alt="Ghost in the shell" /></div>
          <div className="item" style={{ "--position": 5 } as React.CSSProperties}><img src="/images/2.jpg" alt="Ghost in the shell" /></div>
          <div className="item" style={{ "--position": 6 } as React.CSSProperties}><img src="/images/2.jpg" alt="Ghost in the shell" /></div>
          <div className="item" style={{ "--position": 7 } as React.CSSProperties}><img src="/images/1.jpg" alt="Ghost in the shell" /></div>
          <div className="item" style={{ "--position": 8 } as React.CSSProperties}><img src="/images/2.jpg" alt="Ghost in the shell" /></div>
          <div className="item" style={{ "--position": 9 } as React.CSSProperties}><img src="/images/1.jpg" alt="Ghost in the shell" /></div>
          <div className="item" style={{ "--position": 10 } as React.CSSProperties}><img src="/images/1.jpg" alt="Ghost in the shell" /></div>
        </div>  */}
        <div className="content">
          <h1 data-content = "ABOUT PAGE"><b>ABOUT PAGE</b></h1>
          <p><b>Welcome to our website</b></p>
        </div>
      </div>
      
    </div>
  );
}

