// src/main.tsx
function App(nube) {
  console.log("PlugoPlay iniciado!");
  nube.on("onFirstInteraction", () => {
    console.log("PlugoPlay: primeira interação detectada");
  });
}
export {
  App
};
