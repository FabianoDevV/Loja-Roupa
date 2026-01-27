import './style-btn.css';
export default function BtnPrimary({ children, onClick }) {
  return (
    <button className="catalogo" onClick={onClick}>
      {children}
    </button>
  );
}
