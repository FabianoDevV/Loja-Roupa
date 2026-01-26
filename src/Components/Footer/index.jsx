import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="about-footer">
          <div>
            <h5>DevShop</h5>
            <p>Sua loja de departamentos online com os melhores produtos.</p>
          </div>
          <div>
            <h6>Categorias</h6>
            <ul>
              <a href="#">Roupas</a>
              <a href="#">Eletrônicos</a>
              <a href="#">Móveis</a>
              <a href="#">Sapatos</a>
            </ul>
          </div>
          <div>
            <h6>Ajuda</h6>
            <ul>
              <a href="#">Contato</a>
              <a href="#">Entregas</a>
              <a href="#">Devoluções</a>
              <a href="#">FAQ</a>
            </ul>
          </div>
          <div>
            <h6>Sobre</h6>
            <ul>
              <a href="#">Empresa</a>
              <a href="#">Trabalhe Conosco</a>
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
            </ul>
          </div>
        </div>
        <hr className="divisao" />
        <div className="copy-footer">&copy; 2026 DevShop. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
