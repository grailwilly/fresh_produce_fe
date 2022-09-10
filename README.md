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
    * [Reactjs](#microsoft-windows)
    * [Ruby on Rails](#git-for-windows)
    * [Local repository](#local-repository)
  * [Running the website locally](#running-the-website-locally)
  * [Recommended tools](#recommended-tools)
    * [Visual Studio Code](#visual-studio-code)
    * [Canva](#canva)
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

* A comprehensive technical documentation and guides.
* Library of high quality photos.
* Plenty of members' photos to be added.

### Features

* User registration and login page redirecting to dashboard.
* Add to cart 
* Order history
* Payment

### Technical

* React for frontend
* Api rails for backend
* Design using tailwind
* Markdown documentation

## Development guide
We've tried to write this readme in such a way that those who aren’t necessarily familiar with coding have a fighting chance of contributing to the website’s development if they’re so inclined. As such, if you’re already a developer, some of these instructions may seem a little overly-verbose, so you can probably skip some elements. Conversely, if you’re not too tech-savvy, I recommend reading everything if you want to be able to help us out with the site – incidentally, you’re absolutely welcome here whatever level of experience (if any), hence why I’ve tried to be as explicit as possible with instructions, so please don’t feel put-off if it looks overwhelming! [Send me an email](#contact) if you’d like to get involved but could do with a hand getting started, and I’d be happy to get you going.

### Prerequisites
For the most part, these are the bare-minimum requirements for getting up-and-running.

#### Reactjs
1. install node and npm version
2. git clone git@github.com:grailwilly/fresh_produce_fe.git
3. npm install

#### Ruby on rails
1. install ruby and rails version
2. git clone https://github.com/johndominicvillalino/fresh_produce
3. bundle install

#### Local repository
For those unfamiliar, a Git [_“repository”_](https://en.wikipedia.org/wiki/Repository_(version_control)), or _“repo”_ for short, is a set of source code files (usually stored on a centralised _“remote”_ server somewhere) alongside specific Git-managed metadata files which contain information about where the remote server can be found on the internet (or local network), various pieces of configuration information and, **most importantly**, a _complete_ history tree of all changes made to the codebase – what specific changes were made at each stage, when they were made, who made them and how they were integrated back into the primary flow of code from temporary _“branches”_ where developers can work on isolated copies of the code without interfering with other devs working on the same codebase.

### Running the website locally

Once clone, open two terminal for the react and rails.

1. rails s -p 5000 for the API rails
2. npm start for the front end

### Recommended tools

I’ve recommended some tools you may want to use for development. None of these are required, they just might make working on the site easier.

#### Visual Studio Code

If you’re going to be modifying the website’s source code, you’ll need a good [text editor](https://en.wikipedia.org/wiki/Text_editor). I recommend using Visual Studio Code as it’s modern, lightweight, cross-platform and has many features that you’d usually find in a fully-fledged [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) such as [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting), [code completion, IntelliSense](https://en.wikipedia.org/wiki/Intelligent_code_completion) and a large ecosystem of plugins. For simple website development using vanilla HTML, CSS and very occasional JavaScript, it should work extremely well out of the box without any configuration changes or additional plugins:

1. Download and run the Visual Studio Code installer from their website:
   * https://code.visualstudio.com/
2. Continue through the installation wizard until the end. The default options are fine.

#### Canva
We use for photo editing, but most editors should do a good job of simple editing tasks.

### Contributions

My vision for this project, as it evolves, is that it will start to attract a small core team of developers and non-technical contributors, such that it becomes a great place where those wanting to get their hands dirty with some open-source website development can do so. Having more team members will also free me up to work on feature additions, major refactors and integrating new technologies.

Eventually, it would be great if I had time to develop a simple, bespoke set of CMS-style authoring tools that would let non-technical club members author and submit news articles and other content for inclusion on the site with minimal or even zero technical intervention. As it stands, the site will need manually updating by technically-minded folk for the foreseeable future, but hopefully we’ll get to this stage someday.

## Deployment

1. Firebase - [https://fresh-produce-791ce.web.app/](https://fresh-produce-791ce.web.app/)
2. Heroku - [API Rails](https://heroku.com)

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
