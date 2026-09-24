function App(nube: any) {
  console.log("PlugoPlay iniciado!");

  let clicado = false;

  const renderizar = () => {
    const componente = {
      type: "button",
      children: clicado
        ? "✅ PlugoPlay executado!"
        : "🚀 PlugoPlay",

      onClick: () => {
        console.log("[PlugoPlay] BOTÃO CLICADO!");

        clicado = true;

        renderizar();

        console.log(
          "[PlugoPlay] BOTÃO ATUALIZADO!"
        );
      }
    };

    console.log(
      "[PlugoPlay] Renderizando:",
      componente
    );

    nube.render(
      "before_main_content",
      componente
    );
  };

  renderizar();
}

export { App };