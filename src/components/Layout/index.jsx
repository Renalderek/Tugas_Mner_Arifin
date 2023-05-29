import Navbar from "../Navbar";
export default function Layout({ children }) {
  return (
    <div className="mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
