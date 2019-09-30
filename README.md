# Southeast Data Librarian Symposium 2019

Website for the 2019 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.

Built with **[Gatsby](https://www.gatsbyjs.org)**

## 🚀 Develop

To make edits to the 2019 Southeast Data Librarian Symposium website you must install Gatsby using Node and npm (Node and npm can be installed from https://nodejs.org/en/download/) and follow the directions below. After making edits the site must be deployed using the directions under **Deploy**.

1. **Install the Gatsby command line interface (CLI)**

    ```sh
    # install the Gatsby CLI globally using npm
    npm install -g gatsby-cli
    ```

1.  **Clone the existing SEDLS 2019 website.**

    Use git to clone the site from GitHub, located at https://github.com/se-datalibrarian/2019.

    ```sh
    # clone the existing SEDLS 2019 website
    git clone https://github.com/se-datalibrarian/2019.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd 2019/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `sedls-website-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 💫 Deploy

- The website for the 2019 Southeast Data Librarian Symposium is hosted on Github Pages (https://se-datalibrarian.github.io/2019/). This project was setup to be deployed to GitHub Pages using the following instructions **[Deploy to GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)**

- To deploy this site to the se-datalibrarian.github.io/2019 URL run the command:

    ```sh
    npm run deploy
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Create a Gatsby site using SEDLS 2019 website as a starter template.

1. Use the Gatsby CLI to create a new site, specifying the sedls-website-starter.

    ```sh
    # create a new Gatsby site using the sedls-website starter
    gatsby new sedls-website-starter https://github.com/se-datalibrarian/2019
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd sedls-website-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `sedls-website-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!