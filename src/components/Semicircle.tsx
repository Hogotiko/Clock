import { Link } from "react-router-dom";

export const Semicircle = () => {
  return (
    <>
      <Link to="/" style={{ display: "block", textDecoration: "none" }}>
        <p style={{ margin: "20px", fontSize: "20px", color: "lime" }}>Back</p>
      </Link>
      <h1
        style={{ marginTop: "100px", color: "limegreen", textAlign: "center" }}
      >
        This is a Semicircle
      </h1>
      <div
        style={{
          margin: "150px auto",
          width: "500px",
          height: "250px",
          border: "2px solid white",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          background: "violet",
        }}
      />
    </>
  );
};
