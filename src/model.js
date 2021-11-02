import img from "./assets/image.jpg";

export const model = [
  {
    type: "title",
    value: "This site is built on pure JS",
    options: {
      tag: "h2",
      styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff`,
    },
  },
  {
    type: "text",
    value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
		ipsum ipsa provident nostrum quis distinctio nesciunt nobis illum
		eius aperiam harum veniam, ipsam optio dolor aliquid pariatur vero
		saepe earum?`,
  },
  {
    type: "columns",
    value: [
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
  },
  { type: "image", value: img },
];
