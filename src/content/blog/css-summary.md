---
title: 我的 CSS 理解
author: Philopence
pubDate: Sun Jul 21 09:17:39 AM CST 2024
draft: false
---

# CSS

- CSS 作为样式表，与设计相关，在当今 web 越来越复杂。
- 它的复杂在于层叠性，杂糅。
- 尽管现在的前端框架可以将 CSS 限定在特定组件中。但是，不同组件组合在一起时，也会产生奇怪的问题。
- 太灵活了，怎样做到最小的副作用，以及后续的维护，都是需要思考的。
- 典型的易学难精类技术。
- 掌握默认行为，以便调整
- 做到能脑补出添加样式后，页面的变化
- 划定页面层次结构：pages - layouts - components - elements
  - 页面由一个或多个布局构成，布局间可以是并列或相邻关系
  - 布局主流的有：flex 和 grid
  - 组件，应该与布局无关
  - 元素，不影响其他元素
  - 容器：如果打算复用一个组件，嵌套一个容器设置布局相关的样式，即使组件支持传入 class 也不要用，后续重构时嵌套结构可能发生变化，不必修改组件
  - 将不同层次的样式拆分到不同的容器中

## 自定义约定

对于页面，有一下情况

body 通常添加字体，bg，fg 等可以被继承的默认样式

添加 Page 容器设置 container width margin display 等样式（Page 可以看作一个默认的 component，因为它不会与 layout 交互，而它本身可能需要设置）

如果需要布局也需要添加一个布局容器。比如 Dashboard，这个 Dashboard 可能放在其他页面，或者容器中。布局仅决定内部项目容器的排列方式。

Item 容器，它的负责与布局容器交互（位置，大小等）

此时 page>layout>item 页面布局已经完成。剩下的就是在 Item 容器中添加 Component

开发组件时，包裹在一个容器中，宽高设置为需要兼容的值（通常设置 max-width 和 min-width 高度由内容撑开）

组件容器负责内部元素的布局 (layout)

元素则设置只影响自身的属性，比如 margin 只设置 top 和 left 不能设置 right 和 bottom

page(layout) > item > component(layout) > item > component(layout)

## 具体实现

搭建 HTML 布局结构，添加组件，元素

CSS 从元素开始设置，基础样式。

再从内向外逐渐加入布局

示例：

```html
div.container.mx-auto.p-8
  div.grid.grid-cols-[auto_1fr]
    div.span-2.header
    div.aside
      div.navbar.flex.flex-col.gap-4
        nav
        nav
        nav
    div.main
    div.span-2.footer
```


