import "./reset/reset.css";
import "./style.scss";
import Form from "./component/input";
function App() {
  return (
    <body className="container">
      <header>
        <div className="logo">
          <div className="logoRadial">S</div>
          SIPPI
        </div>
      </header>
      <nav>
        <ul>
          <li>Inicios</li>
          <li>Propostas</li>
          <li>Projetos</li>
          <li>Pessoal</li>
          <li>Homologação</li>
        </ul>
      </nav>
      <main>
        <h2>Gerar pedido</h2>
        <div className="gerarpedido">
          <Form
            tipo="input"
            name="aaa"
            type="text"
            label="Nome do Item"
            size={50}
            cor="#ccc"
          />
          <div className="dflex">
            <Form
              tipo="input"
              name="aaa"
              type="text"
              placeholder="aaaaa"
              label="Valor disponivel"
              size={80}
              cor="#ccc"
            />
            <Form
              tipo="input"
              name="aaa"
              type="text"
              label="Valor Solicitado"
              size={80}
              cor="#ccc"
            />
          </div>
          <Form
            tipo="input"
            name="aaa"
            type="text"
            label="Endereço de Entrega"
            size={100}
            cor="#ccc"
          />
          <div className="dflex">
            <Form
              tipo="textarea"
              name="aaa"
              type="textarea"
              size={80}
              label="Descrição detalhada do item"
              cor="#ccc"
            />
            <Form
              tipo="textarea"
              name="aaa"
              type="textarea"
              size={80}
              label="Justificativa para aquisição"
              cor="#ccc"
            />
          </div>
          <div className="dflex">
            <Form
              tipo="input"
              name="aaa"
              type="file"
              size={80}
              label="Upload de termo de referencia"
              cor="#ccc"
            />
            <Form
              tipo="input"
              name="aaa"
              type="file"
              size={80}
              label="Upload de respostas(Opcional)"
              cor="#ccc"
            />
          </div>
          <div className="dflex inputButton">
            <Form
              tipo="button"
              name="aaa"
              type="button"
              size={40}
              buttonTitle="Cancelar"
            />
            <Form
              tipo="button"
              name="aaa"
              type="button"
              size={40}
              buttonTitle="Salvar"
            />
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
