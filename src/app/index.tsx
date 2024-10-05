import { Text, View } from "react-native";
import { Initial } from "./components/Initial";
import { RegisterProviders } from "../data/context/Register";

export default function Index() {
  return (
      <View
        style={{ flex: 1 }}
        className="w-full justify-center items-center bg-black"
      >
        <Initial />
      </View>
  );
}
