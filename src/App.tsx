import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import "./reset/reset.css";
import "./style.scss";
import Form from "./component/input";

function App() {
  const [Item, setItem] = useState("");
  const [Valordispo, setValordispo] = useState("");
  const [Valorsolici, setValorsolici] = useState("");
  const [Endereço, setEndereço] = useState("");
  const [Descrição_item, setDescrição_item] = useState("");
  const [Justificativa, setJustificativa] = useState("");
  const [UploadA, setUploadA] = useState<File[]>([]);
  // const [UploadB, setUploadB] = useState<File[]>([]);

  const dados = [
    {
      id: 0,
      item: Item,
      valordispo: Valordispo,
      valorsolici: Valorsolici,
      endereco: Endereço,
      descricao_item: Descrição_item,
      justificativa: Justificativa,
      uploadA: UploadA,
    },
  ];

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(JSON.stringify(dados));
    let url = "cadastro";
    fetch(url, {
      method: "post",
      body: JSON.stringify(dados),
    }).then(function (response) {
      // trate a resposta aqui
    });
  }

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);
    setUploadA(selectedImages);
  }

  return (
    <div className="container">
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
          <form id="form" onSubmit={handleSubmit} method="post">
            <Form
              tipo="input"
              name="item"
              type="text"
              label="Nome do Item"
              value={Item}
              onChange={event => setItem(event.target.value)}
              size={50}
              cor="#ccc"
            />
            <div className="dflex">
              <Form
                tipo="input"
                name="Valordispo"
                type="text"
                placeholder="aaaaa"
                label="Valor disponivel"
                value={Valordispo}
                onChange={event => setValordispo(event.target.value)}
                size={80}
                cor="#ccc"
              />
              <Form
                tipo="input"
                name="Valorsolici"
                type="text"
                label="Valor Solicitado"
                value={Valorsolici}
                onChange={event => setValorsolici(event.target.value)}
                size={80}
                cor="#ccc"
              />
            </div>
            <Form
              tipo="input"
              name="Endereço"
              type="text"
              label="Endereço de Entrega"
              value={Endereço}
              onChange={event => setEndereço(event.target.value)}
              size={100}
              cor="#ccc"
            />
            <div className="dflex">
              <Form
                tipo="textarea"
                name="Descrição_item"
                type="textarea"
                size={80}
                label="Descrição detalhada do item"
                value={Descrição_item}
                onChange={event => setDescrição_item(event.target.value)}
                cor="#ccc"
              />
              <Form
                tipo="textarea"
                name="Justificativa"
                type="textarea"
                size={80}
                label="Justificativa para aquisição"
                value={Justificativa}
                onChange={event => setJustificativa(event.target.value)}
                cor="#ccc"
              />
            </div>
            <div className="dflex">
              <Form
                tipo="input"
                name="UploadA"
                type="file"
                size={80}
                onChange={handleSelectImage}
                label="Upload de termo de referencia"
                cor="#ccc"
              />
              {/* <Form
                tipo="input"
                name="UploadB"
                type="file"
                size={80}
                onChange={handleSelectImage}
                label="Upload de respostas(Opcional)"
                cor="#ccc"
              /> */}
            </div>
            <div className="dflex inputButton">
              <Form
                tipo="button"
                name="btn"
                type="button"
                size={40}
                buttonTitle="Cancelar"
              />
              <Form tipo="button" name="aaa" size={40} buttonTitle="Salvar" />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
