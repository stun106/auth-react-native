import { Slot } from "expo-router";
import '../styles/global.css'
import { RegisterProviders } from "../data/context/Register";
export default function RootLayout() {
  return (
    <RegisterProviders>
      <Slot/>
    </RegisterProviders>
  );
}
