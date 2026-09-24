// src/main.tsx
function App(nube) {
  console.log("PlugoPlay iniciado!");
  let clicado = false;
  const renderizar = () => {
    const componente = {
      type: "button",
      children: clicado ? "\u2705 PlugoPlay executado!" : "\u{1F680} PlugoPlay",
      onClick: () => {
        console.log("[PlugoPlay] BOT\xC3O CLICADO!");
        clicado = true;
        renderizar();
        console.log(
          "[PlugoPlay] BOT\xC3O ATUALIZADO!"
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
export {
  App
};
