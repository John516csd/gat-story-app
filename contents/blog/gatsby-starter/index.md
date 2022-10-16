---
title: Gatsby
date: "2022-08-30"
description: "This is a about gatsby blog."
author: "yanchenhao"
---

# Gatsby
> Gatsby是react和GraphQL的结合品，GraphQL是一种数据库的查询操，是一种创建静态网站的框架
> 

## 术语表

| 术语 | 解释说明 |
| --- | --- |
| CMS | comment management system(文件管理系统) |
| data layer | 数据层，可以将各中数据来源的数据组合在你的项目中使用 |

## 添加Plugins

1. 在npm上安装你需要的plugin
    
    ```bash
    npm install plugin-name
    ```
    
2. 在gatsby-config.js中添加配置
    
    ```jsx
    module.exports = {
      siteMetadata: {
        title: "My First Gatsby Site",
      },
      plugins: ["plugin-name"],
      // or 
      // plugins: [
      //    {
      //      resolve: "plugin-name",
      //      options: {
      //        // Check the plugin README for what options go in here
      //      }
      //    },
      // ]
    };
    ```
    
3. 在项目中按照npm上文档的要求使用对应的plugin。

## 用GraphQL来查询数据并将数据放到react组件中

- 你的一些数据可能存在数据库中或者是wordpress等一些CMS中。
- 通过向site中添加一些plugin来解析不同的数据源，不同的plugin用来处理其对应的数据源数据。
- 当我们构建site时，每个plugin都会从其特定的源中提取数据，并将数据放到你的data layer中。
- 通过写GraphQL queries来查询你需要在组件中显示的数据

![https://www.gatsbyjs.com/static/e45422900475b86807bc002fb6863b85/10d53/data-layer.png](https://www.gatsbyjs.com/static/e45422900475b86807bc002fb6863b85/10d53/data-layer.png)

## **GraphiQL Interface**

每当运行一个Gatsby项目后，你都可以在[http://localhost:8000/___graphql](http://localhost:8000/___graphql)看到一个界面，你可以在这里用GraphQL来查询项目中的数据。

页面主要有三个模块

1. Explorer
    
    可以展示你在GraphQL查询中查询到的所有数据。
    
2. Query editor
    
    可以通过Explorer勾选一些项来添加查询语句，也可以直接写
    
3. Result Window
    
    结果显示的模块
    

## 在组件中使用GraphQL查询到的数据

```jsx
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
```

## 将本地的文件推到data layer

安装plugin gatsby-source-filesystem 来处理本地文件，配置：

```jsx
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
```

## 动态路由

Gatsby定义了特定的语法用来方便用户在/src/pages中创建动态路由页面，命名规则为{xxx.xxx}.js

注意名称要相同

Gatsby会根据你query的数据来生成页面，当你404的时候，就会展示现在网站现有的页面路由

![Untitled](https://i.postimg.cc/3w386gVh/Wechat-IMG42.png)

## 切换主题

1. 使用Chakra的useColorMode来实现主题的切换
    
    ```jsx
    const { toggleColorMode } = useColorMode();
    ```
    
2. 使用useColorModeValue来定义light，dark主题下的样式
    
    ```jsx
    const bg = useColorModeValue('rgba(255, 255, 255, 0.75)', 'gray.800');
    ```