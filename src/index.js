import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@clayui/css/lib/css/atlas.css';
import App from "./App";
import DetailItem from './components/DetailItem';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DetailItem />
  </StrictMode>
);
  