// src/main.tsx
import { Text } from "@tiendanube/nube-sdk-jsx";
import { jsx } from "@tiendanube/nube-sdk-jsx/jsx-runtime";
function App(nube) {
  console.log("PlugoPlay iniciado!");
  const events = [
    "page:loaded",
    "cart:add:success",
    "cart:update",
    "cart:view",
    "shipping:update"
  ];
  for (const eventName of events) {
    nube.on(eventName, (data) => {
      console.log(`[PlugoPlay] Evento: ${eventName}`, data);
      if (data?.cart?.items?.length) {
        console.log(
          "[PlugoPlay] Produto no carrinho:",
          JSON.stringify(data.cart.items[0], null, 2)
        );
      }
    });
  }
  nube.on("onFirstInteraction", () => {
    console.log("[PlugoPlay] Primeira intera\xE7\xE3o detectada!");
  });
  nube.render(
    "before_main_content",
    /* @__PURE__ */ jsx(Text, { children: "PlugoPlay funcionando!" })
  );
}
export {
  App
};
