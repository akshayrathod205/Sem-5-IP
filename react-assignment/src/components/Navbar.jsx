import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <div className="nav-list">
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "10px 30px",
                listStyle: "none",
              }}
            >
              <li>
                <Link
                  to="/"
                  className="link"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    backgroundColor: "#f2f2f2",
                    padding: "10px 20px",
                    borderRadius: "20px",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="link"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    backgroundColor: "#f2f2f2",
                    padding: "10px 20px",
                    borderRadius: "20px",
                  }}
                >
                  Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/time"
                  className="link"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    backgroundColor: "#f2f2f2",
                    padding: "10px 20px",
                    borderRadius: "20px",
                  }}
                >
                  Date
                </Link>
              </li>
              <li>
                <Link
                  to="/quotes"
                  className="link"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    backgroundColor: "#f2f2f2",
                    padding: "10px 20px",
                    borderRadius: "20px",
                  }}
                >
                  Quotes
                </Link>
              </li>
              <button
                style={{
                  padding: "10px",
                  width: "100px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                <Link
                  to="/login"
                  className="btn"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
