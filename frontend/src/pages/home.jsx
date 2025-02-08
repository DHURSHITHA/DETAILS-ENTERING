import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.jpeg"; 
import image2 from "../assets/rolex-2.jpeg";
import image3 from "../assets/rolex-3.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
        <br></br><br></br><br></br>
      <h1>Welcome to Rolex Collection</h1>

      {/* First Image - Rolex1 */}
      <div>
        <img src={image1} alt="Rolex 1" style={{ width: "300px", display: "block", margin: "auto" }} />
        <button 
          onClick={() => navigate("/rolex1")} 
          style={{
            marginTop: "10px", 
            backgroundColor: "#007BFF", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            cursor: "pointer", 
            borderRadius: "5px"
          }}
        >
          View
        </button>
      </div>
    <br></br><br></br>
      {/* Second Image - Rolex2 */}
      <div>
        <img src={image2} alt="Rolex 2" style={{ width: "300px", display: "block", margin: "auto" }} />
        <button 
          onClick={() => navigate("/rolex2")} 
          style={{
            marginTop: "10px", 
            backgroundColor: "#007BFF", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            cursor: "pointer", 
            borderRadius: "5px"
          }}
        >
          View
        </button>
      </div>
      <br></br><br></br>

      {/* Third Image - Rolex3 */}
      <div>
        <img src={image3} alt="Rolex 3" style={{ width: "300px", display: "block", margin: "auto" }} />
        <button 
          onClick={() => navigate("/rolex3")} 
          style={{
            marginTop: "10px", 
            backgroundColor: "#007BFF", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            cursor: "pointer", 
            borderRadius: "5px"
          }}
        >
          View
        </button>
      </div>
      <br></br><br></br>
    </div>
  );
};

export default Home;
