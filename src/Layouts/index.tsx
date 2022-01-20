export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="page-x">{children}</div>
      <div className="rotLeft rotBottom pageBack" />
      <div className="rotRight rotBottom pageBack" />
    </div>
  );
}
