<div align="center">
  <h1>
    <br>
    <a href="https://fresh-produce-791ce.web.app/"><img src="./src/assets/logo_nav.png" alt="logo"></a>
    <br>
    Fresh Produce
    <br>
  </h1>
  <h4>
    <a href="#links">Links</a>
    •
    <a href="#versions">Versions</a>
    •
    <a href="#roadmap">Roadmap</a>
    •
    <a href="#development-guide">Development guide</a>
    •
    <a href="#deployment">Deployment</a>
    •
    <a href="#contact">Contact</a>
    •
    <a href="#copyright">Copyright</a>
  </h4>
  <h3>
    <a href="https://github.com/johndominicvillalino">
      <img src="https://img.shields.io/badge/maintainer-%40johndominicvillalino-teal">
    </a>
    <a href="https://github.com/grailwilly">
      <img src="https://img.shields.io/badge/maintainer-%40grailwilly-teal">
    </a>
    <a href="https://fresh-produce-791ce.web.app/">
      <img src="https://img.shields.io/website?url=http%3A%2F%2Ffresh-produce-791ce.web.app/%2F">
    </a>
  </h3>
</div>

### [![Website Screenshot](screenshot.png)](https://fresh-produce-791ce.web.app/)

<p>To organize the agri ecosystem in the Philippines through technology and data. Improve the lives of agri players involved in the agri value chain or agri ecosystem, which includes farmers, wholesalers, resellers, retailers, aggregators, and supply chain players.</p>

<p>The presence of middlemen resulted in farmer exploitation, forcing them to sell their produce at lower rates. This meant that farmers were experiencing unfair practices, a high food wastage due to supply-demand mismatch and lower income.</p>

<p>Also, due to lack of transparency and the absence of specialised equipment, there were issues such as delayed deliveries as well as undersupply of fresh produce to retail outlets.</p>

<p>This made the founders pivot to a B2B model to solve “one of the toughest agricultural supply chain problems”, build a reliable, cost-efficient, and high-speed infrastructure, and enable retailers and merchants to purchase fresh produce directly from farmers daily.</p>

## Table of contents

* [Links](#links)
* [Versions](#versions)
  * [Numbering](#numbering)
  * [Major releases](#major-releases)
* [Roadmap](#roadmap)
  * [Content](#content)
  * [Features](#features)
  * [Technical](#technical)
* [Development guide](#development-guide)
  * [Prerequisites](#prerequisites)
    * [Microsoft Windows](#microsoft-windows)
    * [Git for Windows](#git-for-windows)
    * [GitHub setup](#github-setup)
    * [Local repository](#local-repository)
      * [Clone](#clone)
      * [Configure](#configure)
    * [Jekyll](#jekyll)
  * [Running the website locally](#running-the-website-locally)
  * [Recommended tools](#recommended-tools)
    * [Chromium-based browser](#chromium-based-browser)
    * [Visual Studio Code](#visual-studio-code)
    * [Microsoft Word](#microsoft-word)
    * [Adobe Photoshop](#adobe-photoshop)
  * [Contributions](#contributions)
* [Deployment](#deployment)
* [Contact](#contact)
* [Copyright](#copyright)

## Links
The different hosted versions of the website can be found at the following locations, we used React for our frontend and API rails for our database, the staging area is a subdomain of the live website that we deploy to manually when we want to test-out new features and the production is currently being built:

* 🐥 **Frontend React:** https://github.com/grailwilly/fresh_produce_fe
* 🐥 **API Rails:** https://github.com/johndominicvillalino/fresh_produce
* 🧪 **Staging:** https://fresh-produce-791ce.web.app/
* 🌐 **Production:** Coming Soon

## Versions
The [GitHub Releases](https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository) system is used to increment the version of, tag and publish releases, and is the single source of truth for what the current version of the website is. No version numbers are explicitly held in the repo’s files.

Since this codebase is a website, there’s obviously no need to maintain any release branches to backport fixes to, as there’ll only ever be one live site which will always have the latest changes on it.

When a new version of the site is released via GitHub, the website will query a specific GitHub API endpoint at runtime to get both the latest release’s version number and publish date, which is then displayed to the end user in the footer of each page.

### Numbering
[SemVer](https://semver.org/) is used, albeit loosely, as a version numbering scheme for the website. The _major_, _minor_ and _patch_ parts are bumped for a release in accordance with the following types of change to the codebase:

* **Major:** Complete or significant rewrites of the website where the fundamental technology used has changed, for instance moving from a Jekyll-based static website to a declarative React.js web application, or even a move to a client-server architecture by introducing an ASP.NET Core server application into the mix. A major design refresh of the website’s visuals would also fall into this category.
* **Minor:** For major (i.e. newsworthy) feature update releases. I tend to work on a couple of major new features (either in terms of functionality or new sections of the website) between club AGMs, so the frequency of these updates is usually also annual.
* **Patch:** For everything else, including but not necessarily limited to: publishing news articles, new content, fixing typos, fixing bugs and broken links, fixing incorrect information and minor new features.

### Major releases

There have been two major releases published so far, which are listed below with their key changes, as well as which features are currently in progress for the next major update – every historical release ever published since going-live with this new site can be found on the [Releases](https://github.com/grailwilly/fresh_produce_fe/releases) page:

* **v1.0** – Minimum Viable Product:
  * Public pages includes homepage, products, farmers and wholesale.
  * Authenticated pages include dashboard of buyer and seller, create product, order history, and payment.
  * User sign in and sign up.
  * Add to cart features and order.

## Roadmap

This is a non-exhaustive list of the things I’d like to add in future development, in no particular order. This is obviously subject to change, but it should be a good indication of what’s to come. I’ll tick things off as and when they get done. I want to eventually get to a stage where I’ve provided enough tooling so that most of the content can be published by other people, so that I’m freed-up to work primarily on adding new features.

### Content



### Features



### Technical



## Development guide



### Prerequisites

.

#### Microsoft Windows


#### Git for Windows



#### GitHub setup


#### Local repository



##### Clone



##### Configure



#### Jekyll




### Running the website locally



### Recommended tools



#### Chromium-based browser



#### Visual Studio Code



#### Microsoft Word



#### Adobe Photoshop


### Contributions



## Deployment



## Contact

If you need to get in-touch with me ([Grail Willy](https://github.com/grailwilly) – developer), please do so at the following email address: [grailjwi11y@gmail.com](mailto:grailjwi11y@gmail.com?subject=fresh%20Produce%20Website)

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/johndominicvillalino"><img src="https://avatars.githubusercontent.com/u/52184404?v=4?s=100" width="100px;" alt=""/>
      <br />
        <sub><b>JD Villalino</b></sub></a>
      <br />
      <a href="" title="Code">💻</a> 
      <a href="" title="Tests">⚠️</a> 
      <a href="" title="Bug reports">🐛</a>
      <a href="" title="Content">🖋</a>
      <a href="" title="Documentation">📖</a> 
      <a href="" title="Design">🎨</a>
      <a href="" title="Examples">💡</a>
      <a href="" title="Ideas, Planning, & Feedback">🤔</a>
     </td>
     <td align="center"><a href="https://github.com/grailwilly"><img src="https://avatars.githubusercontent.com/u/84303898?v=4?s=100" width="100px;" alt=""/>
      <br />
        <sub><b>Grail Willy</b></sub></a>
      <br />
      <a href="" title="Code">💻</a> 
      <a href="" title="Tests">⚠️</a> 
      <a href="" title="Bug reports">🐛</a>
      <a href="" title="Content">🖋</a>
      <a href="" title="Documentation">📖</a> 
      <a href="" title="Design">🎨</a>
      <a href="" title="Examples">💡</a>
      <a href="" title="Ideas, Planning, & Feedback">🤔</a>
     </td>
   </tr>
</table>
