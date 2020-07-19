---
title: "👋🏻 Hello, world!"
date: "July 17, 2020"
---

Hello everyone, this my blog page on Aman ki baat. Created this blog webpage template while learning NextJS. I Will cover details about NextJS in the next blog.

This is a nice NextJS blog starter that you can use for your personal blog too. There are lots of [blog starter](https://next-learn-starter.now.sh/) available already. But here I tried extending the basic template to a more advanced blog page.

when I create a new markdown file it creates a new page and automatically adds it just like

For example, I have added some design support for different markdown commands like different heading, `For code sharing`, listing, etc.

Yeah, I know syntax highlighting is not there.
Will improve this over time.

```js
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
export default (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
```

📝 Improvements to be added :-

- Syntax highlighting
- Blog Sort according to date
- UI color change button

When this will be completed, will create a `nextjs-blog-starter`

👋🏻 Bye

![Image](https://i.pinimg.com/originals/c0/53/67/c053673f3712b2fab0b100885ada628c.gif)
