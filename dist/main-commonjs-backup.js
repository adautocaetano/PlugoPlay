// src/main.tsx
function App(nube) {
  console.log("PlugoPlay iniciado!");
  nube.on("onFirstInteraction", () => {
    console.log("PlugoPlay: primeira intera\xE7\xE3o detectada");
  });
}
export {
  App
};
