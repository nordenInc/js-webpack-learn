import img from "./assets/image.jpg";
import {
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
  TextBlock,
} from "./classes/Block";

export const model = [
  new TitleBlock("This site is built on pure JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ffd208, #717500)",
      color: "#fff",
      "text-align": "center",
      padding: "1rem",
    },
  }),
  new ImageBlock(img, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "this is a picture",
  }),
  new ColumnsBlock(
    [
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
  ipsum ipsa provident nostrum quis distinctio nesciunt nobis illum
  eius aperiam harum veniam, ipsam optio dolor aliquid pariatur vero
  saepe earum?`,
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
  ipsum ipsa provident nostrum quis distinctio nesciunt nobis illum
  eius aperiam harum veniam, ipsam optio dolor aliquid pariatur vero
  saepe earum?`,
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
  ipsum ipsa provident nostrum quis distinctio nesciunt nobis illum
  eius aperiam harum veniam, ipsam optio dolor aliquid pariatur vero
  saepe earum?`,
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock(
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
  ipsum ipsa provident nostrum quis distinctio nesciunt nobis illum
  eius aperiam harum veniam, ipsam optio dolor aliquid pariatur vero
  saepe earum?`,
    {
      styles: {
        background: "linear-gradient(to left, #f2994a, #f2c94c)",
        padding: "1rem",
        "font-weight": "bold",
      },
    }
  ),
];
