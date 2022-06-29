import index from "./routes/index.svelte";

import "toastify-js/src/toastify.css"
import "bootswatch/dist/lux/bootstrap.min.css";
import './main.css'

const app = new index({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;