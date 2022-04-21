<div id="top"></div>

<!-- PROJECT LOGO -->
<br />

  <h3 align="center">cross-functional-test-api</h3>

  <p align="center">
    A project build with nodejs, expressJs, MongoDb and clean code architecture.
    <br />
    <br />
    <!-- <a href="https://todo.api.cryptobros.site/api/ping">View Demo</a> -->
    ·
    <a href="https://github.com/kaleemullahdev/cross-functional-test-api.git/issues">Report Bug</a>
    ·
    <a href="https://github.com/kaleemullahdev/cross-functional-test-api.git/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

These are the services based on the clean code architecture. The reason i prefer to use this architecture is because it makes change easier and in world of software only change is constant.

![](https://fullstackroyhome.files.wordpress.com/2019/03/cleanarchitecture.jpg)

Few words about the above architecture:

-   Inner Layer
    Models. Handles the creation, validation and reading of our entities (account). Note that this should be custom logic and not include the DB implementation of models (e.g. in Mongoose DB ORM, their models should be encapsulated in the DB layer below). Our model schemas live here.
    DB. Our choice of DB (in memory, MongoDB, SQL), this is independent of the model. Note that in Clean Architecture this is considered an outer layer framework, but for practical applications I find it easier to place it inner and have the data-access layer depend on it rather than injecting it in.

-   Middle Layer
    Data-Access. Handles transfer between the DB (like an ORM). Depends on the model to validate and create the entity in DB. The key is to have a consistent & custom API that all outer layers communicate with. Testing here will ensure that replacing or using multiple DBs doesn't break anything further upstream.

-   Outer Layer
    Drivers. Represents the UI or interface (Web or CLI). It communicates only with the data-access layer.

For Deployment

-   Husky pre-push to trigger tests
<!-- -   CircleCI pipeline to trigger deployment on push
-   Digital Ocean Droplet -->

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [Express.js](https://expressjs.com/)
-   [Nodejs](https://nodejs.org/en/)
-   [MongoDb](https://www.mongodb.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

-   [Nodejs](https://nodejs.org/en/download/)

-   yarn
    ```sh
    npm install -g yarn
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/kaleemullahdev/cross-functional-test-api.git
    ```
2. Install NPM packages
    ```sh
    yarn install
    ```
3. Enter your Port, mongo user and password in `.env`
    ```js
    PORT=4000
    DATABASE_SERVICE=
    DATABASE_USER=
    DATABASE_PASSWORD=
    DATABASE_PORT=
    CRYPTO_SECRET=
    ```
4. To seed database run
    ```js
    yarn seed
    ```
5. To run

    ```js

    docker-compose -f server.yaml up

    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This repository has been used with a [test app]() and it's [repository.](https://github.com/kaleemullahdev/cross-functional-test-api.git)

<p align="right">(<a href="#top">back to top</a>)</p>

## Testing

-   Unit testing
    Unit Tests tests are exported from postman application are in the directory tests/unit.
    Can be invoked with:

    ```js
      yarn test:unit
    ```

Libraries used for testing:

-   [Jest](https://www.npmjs.com/package/jest) for assertion.
-   [Supertest](https://www.npmjs.com/package/supertest) for http requests.

Note: To invoke all kind of tests use:

```js
 yarn test
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions of any kind are  
**greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [Kaleem Ullah]() - kaleemullah786.ku61@gmail.com

Project Link: [https://github.com/kaleemullahdev/cross-functional-test-api.git]()

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [Clean code architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
-   [Docker](https://www.docker.com/)
-   [Mongoose](https://mongoosejs.com/docs/)
-   [Faker](https://www.npmjs.com/package/faker)
-   [Joi](https://www.npmjs.com/package/joi)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-   [Nodemon](https://www.npmjs.com/package/nodemon)
-   [Husky](https://www.npmjs.com/package/husky)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
