import './style.css';
export default function ErrorCart({ msg }) {
  return (
    <div className="msg-error-cart">
      <h1>{msg}</h1>
    </div>
  );
}
