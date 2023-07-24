# Getting Started With Vanilla Javascript.

Dark mode theme websites have gained significant popularity due to their sleek and visually appealing design. Dark mode refers to a color scheme that uses predominantly dark colors, often black or dark gray, as the background, with lighter text and elements for improved contrast. This design choice provides a host of benefits, including reduced eye strain, increased battery life for devices with OLED screens, and a modern, stylish aesthetic.

## Setup dark mode on your website with set attribute method.

Your website theme change with a stunning transition effect. It's lightweight and compact file size.

```
input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("theme", "dark");
  } else {
    document.documentElement.setAttribute("theme", "light");
  }
});

```

**Light Mode Screenshot**

![alt text](./images/Light%20Mode.jpg)

**Dark Mode Screenshot**

![alt text](./images/Dark%20Mode.jpg)

[View Live Demo](https://hossainpalin.github.io/Easy-Dark-Mode/) - Easy Dark Mode.
