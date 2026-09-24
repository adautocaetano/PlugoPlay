import { Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: any) {
  console.log("PlugoPlay iniciado!");

  nube.render(
    "before_main_content",
    <Text>🚀 PlugoPlay funcionando!</Text>
  );
}