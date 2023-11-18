import Link from "next/link";

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Mengisi tinggi seluruh layar
};

const linkStyle = {
  padding: "20px",
  fontSize: "24px",
  color: "#182237",
  background: "lime",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  textDecoration: "none",
};

const Page = () => {
  return (
    <div style={buttonStyle}>
      <Link href="/dashboard">
        <div style={linkStyle}>CLICK ME TO GO TO DASHBOARD</div>
      </Link>
    </div>
  );
};

export default Page;
