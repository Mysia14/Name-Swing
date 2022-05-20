// Based on the Dribble shot by Chris Koch
// https://dribbble.com/shots/14078001-Pendulum

import { createApp } from "https://unpkg.com/petite-vue?module";

function BlockLines() {
  return {
    $template: "#block-lines",
    blocks: 24
  };
}
function BlockTitle() {
  return {
    $template: "#block-title",
    title: "Mysia",
    subtitle: "FrontEnd Developer"
  };
}

let app = createApp({
  BlockLines,
  BlockTitle
});

app.mount("#app");