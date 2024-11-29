<div align="left">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="40%" align="left" style="margin-right: 15px"/>
    <div style="display: inline-block;">
        <h2 style="display: inline-block; vertical-align: middle; margin-top: 0;">TEMPLATE-AUTH</h2>
        <p>
	<em>Securely Empowering Your Digital Identity</em>
</p>
        <p>
	<img src="https://img.shields.io/github/license/dornelles08/template-auth?style=flat-square&logo=opensourceinitiative&logoColor=white&color=A931EC" alt="license">
	<img src="https://img.shields.io/github/last-commit/dornelles08/template-auth?style=flat-square&logo=git&logoColor=white&color=A931EC" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/dornelles08/template-auth?style=flat-square&color=A931EC" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/dornelles08/template-auth?style=flat-square&color=A931EC" alt="repo-language-count">
</p>
        <p>Built with the tools and technologies:</p>
        <p>
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=flat-square&logo=Vitest&logoColor=white" alt="Vitest">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat-square&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat-square&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=flat-square&logo=Zod&logoColor=white" alt="Zod">
</p>
    </div>
</div>
<br clear="left"/>

<details><summary>Table of Contents</summary>

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

</details>
<hr>

## 📍 Overview

**Secure Authentication and Authorization System**

This project is designed to provide a robust and secure authentication mechanism for applications, ensuring that only authorized users have access to protected resources. By leveraging JSON Web Tokens (JWT) and a secret key, this system encrypts sensitive data and provides a high level of confidentiality and integrity.

The implementation adheres to a consistent interface, making it easy to integrate with other components within the application's infrastructure layer. It also includes features such as authentication guards, token validation, and user context decorators, which work together to provide a seamless and secure experience for users.

**Key Features:**

Secure authentication using JWT
Encrypted data storage
Consistent interface for easy integration
Authentication guards and token validation
User context decorators for seamless access control

**Testing and Development Support:**

The project also includes various testing tools and mock implementations, such as fake encrypters and hashers, to facilitate secure testing and development. These features enable developers to simulate encryption and hashing without exposing sensitive information, making it easier to test and integrate cryptographic components.

Overall, this project provides a reliable and efficient authentication system that prioritizes user security and confidentiality. Its modular design and consistent interface make it easy to integrate with other components within the application's infrastructure layer, ensuring a seamless and secure experience for users.

---

## 👾 Features

|     |      Feature      | Summary                                                                                                                                                                                                             |
| :-- | :---------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**  | <ul><li>Based on NestJS framework</li><li>Uses Prisma for database management</li><li>Configured with TypeScript and tsconfig.json</li></ul>                                                                        |
| 🔩  | **Code Quality**  | <ul><li>Maintains high code quality through use of TypeScript and strict type checking</li><li>Utilizes Zod validation for robust input validation</li><li>Follows best practices in software development</li></ul> |
| 📄  | **Documentation** | <ul><li>Primary language is TypeScript</li><li>Package managers: npm</li></ul>                                                                                                                                      |
| 🔌  | **Integrations**  | <ul><li>Integrated with Prisma for database management</li><li>Uses Passport-JWT for authentication and authorization</li><li>Deploys using npm and Vite</li></ul>                                                  |
| 🧩  |  **Modularity**   | <ul><li>Configured to maintain a clean project structure </li><li>Utilizes tsconfig.json and tsconfig.build.json for efficient build process</li></ul>                                                              |
| 🧪  |    **Testing**    | <ul><li>Uses Vitest for testing, with coverage-v8 plugin enabled</li><li>Includes Supertest for API testing</li></ul>                                                                                               |
| ⚡️ |  **Performance**  | <ul><li>Optimized for performance through use of TypeScript and tsconfig.json configuration</li><li>Utilizes SWC compiler for efficient code compilation</li></ul>                                                  |
| 🛡️  |   **Security**    | <ul><li>Ensures secure authentication and authorization using Passport-JWT</li><li>Validates input data using Zod validation</li></ul>                                                                              |
| 📦  | **Dependencies**  | <ul><li>Depends on a wide range of packages, including Prisma, NestJS, TypeScript, and more (see CONTEXT DETAILS for full list)</li></ul>                                                                           |
| 🚀  |  **Scalability**  | <ul><li>Designed to scale with the project's growth through use of modular architecture and efficient build process</li><li>Utilizes Prisma for database management, ensuring seamless scaling</li></ul>            |

---

## 📁 Project Structure

```sh
└── template-auth/
    ├── README.md
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   ├── migrations
    │   └── schema.prisma
    ├── src
    │   ├── app.module.ts
    │   ├── core
    │   ├── domain
    │   ├── infra
    │   └── main.ts
    ├── test
    │   ├── cryptography
    │   ├── factories
    │   ├── repositories
    │   └── setup-e2e.ts
    ├── tsconfig.build.json
    ├── tsconfig.json
    ├── vitest.config.e2e.ts
    └── vitest.config.ts
```

### 📂 Project Index

<details open>
	<summary><b><code>TEMPLATE-AUTH/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/nest-cli.json'>nest-cli.json</a></b></td>
				<td>- Configures NestJS project settings by defining the source root directory and compiler options, enabling deletion of the output directory during compilation<br>- This setup is crucial for maintaining a clean project structure and efficient build process, aligning with best practices in software development.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- Here's a succinct summary of the code file:

**Summary:**

The `package-lock.json` file is a critical component of our project's architecture, serving as a dependency management tool that ensures consistent and reproducible builds across all environments<br>- This file contains metadata about the project's dependencies, including their versions and licenses, allowing us to maintain a stable and up-to-date set of packages.

**Key Achievements:**

- Ensures accurate and reliable tracking of dependencies
- Facilitates consistent builds across different environments
- Provides visibility into package versions and licenses

By having this file in place, we can confidently manage our project's dependencies, avoid version conflicts, and ensure that our codebase remains stable and maintainable.</td>

</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/tsconfig.build.json'>tsconfig.build.json</a></b></td>
<td>- Configures the build process by extending the base configuration and excluding unnecessary files and directories, ensuring efficient compilation of the project's TypeScript codebase<br>- This setup enables streamlined builds and minimizes compilation overhead, aligning with the project's structure and requirements.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/vitest.config.e2e.ts'>vitest.config.e2e.ts</a></b></td>
<td>- Configures end-to-end testing setup for the project, specifying test files to run, global variables, and plugin integrations with TypeScript and SWC compilation<br>- This configuration enables Vitest to execute e2e tests written in TypeScript, utilizing a custom setup file and leveraging tsconfig paths for efficient code resolution.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/package.json'>package.json</a></b></td>
<td>- The package.json file serves as the central configuration hub, defining project metadata, dependencies, and scripts that drive various development workflows, including building, testing, and debugging<br>- It orchestrates the entire codebase architecture by managing dependencies, setting up environments, and facilitating continuous integration and delivery processes.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/vitest.config.ts'>vitest.config.ts</a></b></td>
<td>- Configures test environment settings for the project, enabling global variables and specifying a root directory<br>- Additionally, it integrates TypeScript configuration paths and enables SWC compilation with ES6 module type<br>- This setup is essential for efficient testing and code execution within the project's structure.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
<td>- Configures the TypeScript compiler to generate CommonJS modules with type declarations, emitting source maps and metadata for decorators<br>- It sets the target environment to ES2022, enables incremental compilation, and specifies the output directory as dist<br>- The configuration also enables strict null checks and disables implicit any types<br>- This setup is crucial for maintaining consistency in file naming conventions and ensuring accurate type checking throughout the project.</td>
</tr>
</table>
</blockquote>
</details>
<details> <!-- src Submodule -->
<summary><b>src</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/app.module.ts'>app.module.ts</a></b></td>
<td>- Configures the application's core settings and modules, enabling environment variable validation through a predefined schema, and integrating essential features such as authentication, HTTP requests, and environment configuration<br>- This setup serves as the foundation for the entire project architecture, providing a structured base for further development and customization.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/main.ts'>main.ts</a></b></td>
<td>- Bootstraps the NestJS application by creating an instance of the AppModule and configuring it to listen on a dynamically determined port based on environment variables<br>- This file serves as the entry point for the project, initializing the application and setting up its core infrastructure.</td>
</tr>
</table>
<details>
<summary><b>domain</b></summary>
<blockquote>
<details>
<summary><b>application</b></summary>
<blockquote>
<details>
<summary><b>cryptography</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/cryptography/hash-comparator.ts'>hash-comparator.ts</a></b></td>
<td>- Hashing and verification of user credentials is facilitated by the HashComparator abstract class, which enables comparison between plain text and hashed values<br>- This abstraction layer ensures consistency across different hashing algorithms, allowing for seamless integration with various authentication mechanisms within the application.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/cryptography/hash-generator.ts'>hash-generator.ts</a></b></td>
<td>- Hashes are generated through the HashGenerator class, enabling secure data transformation within the project's domain layer<br>- This abstraction facilitates consistent and standardized hashing across various applications, ensuring integrity and confidentiality of sensitive information<br>- By providing a unified interface for hash generation, this component contributes to maintaining a robust and secure overall architecture.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/cryptography/encrypter.ts'>encrypter.ts</a></b></td>
<td>- Encrypts sensitive data by providing an abstraction layer for encryption operations, allowing developers to implement various encryption algorithms without modifying the application's core logic<br>- This abstract class serves as a foundation for creating concrete encrypters, enabling seamless integration of different encryption strategies throughout the system.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>use-cases</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/use-cases/authenticate-user.ts'>authenticate-user.ts</a></b></td>
<td>- Authenticates users by verifying their credentials and generates an access token upon successful authentication.

This use case is a critical component of the overall application architecture, enabling secure user login and session management<br>- It integrates with other modules to ensure robust security and seamless user experience.</td>

</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/use-cases/authenticate-user.spec.ts'>authenticate-user.spec.ts</a></b></td>
<td>- Authenticates users by verifying credentials against an in-memory user repository, utilizing a fake hasher and encrypter to simulate real-world authentication processes<br>- This code ensures correct access token generation upon successful login and raises a WrongCredentialsError for invalid email or password combinations.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/use-cases/create-account.spec.ts'>create-account.spec.ts</a></b></td>
<td>- Validate User Creation Logic
This file provides test cases for the Create Account use case, ensuring that a new account can be successfully created and that duplicate email addresses are handled correctly<br>- It also verifies password hashing upon account creation, providing confidence in the overall user management functionality.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/use-cases/create-account.ts'>create-account.ts</a></b></td>
<td>- Creates a new user account by validating the input data, checking for existing users with the same email address, hashing and storing the password securely, and returning the newly created user object<br>- This use case is part of the larger application architecture, which aims to provide a robust and secure user management system.</td>
</tr>
</table>
<details>
<summary><b>errors</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/use-cases/errors/user-already-exists.error.ts'>user-already-exists.error.ts</a></b></td>
<td>- Handles user registration errors by throwing an exception when a duplicate email is detected, preventing account creation<br>- This custom error class provides a clear and concise message to the application, enabling robust error handling and user experience management within the project's domain logic.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>repositories</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/application/repositories/user.repository.ts'>user.repository.ts</a></b></td>
<td>- Defines the interface for user data storage and retrieval operations, encapsulating business logic related to users within the application domain<br>- This abstract class serves as a contract for concrete implementations of user repositories, enabling decoupling from specific data storage mechanisms while enforcing consistent behavior across different repository instances.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>enterprise</b></summary>
<blockquote>
<details>
<summary><b>entities</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/domain/enterprise/entities/User.ts'>User.ts</a></b></td>
<td>Generates user entities with unique IDs and defines their properties, including email, name, password, and two-factor authentication details, providing a foundational component for managing users within the system architecture.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>core</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/core/either.ts'>either.ts</a></b></td>
<td>- Creates and manipulates values using the Either monad, which represents a value that can be either successful (Right) or failed (Left), allowing for error handling and type-safe computations in the codebase architecture<br>- This implementation enables developers to elegantly handle errors and successes within the project's structure.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/core/either.spec.ts'>either.spec.ts</a></b></td>
<td>- Validate Either Type Implementation

---

This file provides a test suite for the Either type implementation, ensuring it correctly handles success and error scenarios<br>- The code tests the doSomething function, which returns an Either instance based on input parameters<br>- The tests verify that the function produces expected results when called with different inputs, demonstrating correct behavior of the Either type in the project's core logic.</td>

</tr>
</table>
<details>
<summary><b>types</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/core/types/optional.ts'>optional.ts</a></b></td>
<td>- Defines the Optional type, allowing for selective omission of specific properties from a given type, enabling more flexible and dynamic data modeling within the project's core structure<br>- This feature facilitates the creation of types with optional fields, enhancing the overall expressiveness and maintainability of the codebase.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>infra</b></summary>
<blockquote>
<details>
<summary><b>http</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/http/http.module.ts'>http.module.ts</a></b></td>
<td>Establishes the HTTP infrastructure layer by importing essential modules and providing core functionality through use cases and controllers, enabling secure authentication and account creation processes within the project structure.</td>
</tr>
</table>
<details>
<summary><b>pipes</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/http/pipes/zod-validation-pipe.ts'>zod-validation-pipe.ts</a></b></td>
<td>- Validates incoming requests against predefined schemas, ensuring data consistency and integrity throughout the application's infrastructure<br>- This pipe transforms raw input into structured data, catching errors and returning informative responses to clients upon validation failures.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>controllers</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/http/controllers/create-account.controller.e2e-spec.ts'>create-account.controller.e2e-spec.ts</a></b></td>
<td>- Validate Account Creation End-to-End (E2E) functionality by sending a POST request to create an account and verifying the user's existence in the database with a unique email address, ensuring successful account creation<br>- This test case covers the entire flow from API call to database persistence.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/http/controllers/create-account.controller.ts'>create-account.controller.ts</a></b></td>
<td>- Validate user account creation requests by enforcing schema constraints on incoming data, ensuring consistency with business rules and user experience expectations within the application's infrastructure layer<br>- This controller facilitates secure account creation through standardized input validation, aligning with the project's overall goal of providing a robust and scalable authentication system.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/http/controllers/authenticate-user.controller.e2e-spec.ts'>authenticate-user.controller.e2e-spec.ts</a></b></td>
<td>- Establishes end-to-end authentication flow by creating a user with a hashed password and verifying credentials through the /authenticate API endpoint, resulting in a successful authentication response with an access token<br>- This test ensures the authentication mechanism is functioning correctly within the application's infrastructure.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/http/controllers/authenticate-user.controller.ts'>authenticate-user.controller.ts</a></b></td>
<td>- Authenticate user functionality is provided by this controller, enabling users to authenticate via email and password<br>- It leverages the AuthenticateUserUseCase application logic to validate credentials and generate an access token upon successful authentication<br>- This component plays a crucial role in securing user access to protected resources within the system.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>env</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/env/env.module.ts'>env.module.ts</a></b></td>
<td>- Configures and provides environment-related services through the EnvService instance, making it accessible to other modules within the application<br>- This module serves as a central hub for managing environmental variables, enabling them to be injected into various components of the system<br>- Its purpose is to facilitate a clean separation of concerns between infrastructure and business logic.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/env/env.ts'>env.ts</a></b></td>
<td>- Validates and infers environment variables for the application, ensuring consistency and correctness of configuration settings across different deployment scenarios<br>- This module provides a standardized way to handle sensitive data such as database connections and authentication keys, promoting code reliability and maintainability within the project's infrastructure layer.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/env/env.service.ts'>env.service.ts</a></b></td>
<td>Configures and retrieves environment variables from the application's configuration.

Provides a centralized service to access and manage environment-specific settings, ensuring consistency across the project.

This module plays a crucial role in maintaining a clean and organized architecture by encapsulating environment variable logic.</td>

</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>database</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/database/database.module.ts'>database.module.ts</a></b></td>
<td>- Establishes database connectivity and provides data access through the UserRepository interface, leveraging PrismaService and PrismaUserRepository to manage interactions with the underlying database<br>- This module serves as a central point for database-related functionality, enabling other parts of the application to interact with the database in a standardized way.</td>
</tr>
</table>
<details>
<summary><b>prisma</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/database/prisma/prisma.service.ts'>prisma.service.ts</a></b></td>
<td>- Establishes database connections using PrismaClient, ensuring seamless communication between the application and its underlying database<br>- This service manages the lifecycle of database connections, connecting on module initialization and disconnecting on destruction, thereby maintaining a stable and efficient data access layer within the project's infrastructure.</td>
</tr>
</table>
<details>
<summary><b>mappers</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/database/prisma/mappers/prisma-user.mapper.ts'>prisma-user.mapper.ts</a></b></td>
<td>- Transforms user data between Prisma database schema and domain model, enabling seamless interaction between the two<br>- This mapper class facilitates the conversion of raw user data from the Prisma client to a User object in the application's domain layer, and vice versa<br>- By bridging these two representations, it ensures consistent and accurate handling of user information throughout the system.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>repositories</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/database/prisma/repositories/prisma-user.repository.ts'>prisma-user.repository.ts</a></b></td>
<td>- Provides data access and manipulation functionality for user entities, enabling the creation and retrieval of users based on email addresses through a Prisma database interface<br>- This component serves as a bridge between the application's domain logic and the underlying database storage system.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>cryptography</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/cryptography/bcrypt-hasher.ts'>bcrypt-hasher.ts</a></b></td>
<td>- Hashes passwords securely using the Bcrypt algorithm, providing a robust way to compare and generate hashes for authentication purposes within the project's infrastructure layer<br>- This implementation adheres to established security standards, ensuring confidentiality and integrity of user credentials<br>- It integrates seamlessly with other cryptography-related components in the codebase.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/cryptography/cryptography.module.ts'>cryptography.module.ts</a></b></td>
<td>- Provides cryptographic services to the application through the CryptographyModule, enabling secure data encryption and hashing<br>- This module exports three key providers: Encrypter, HashComparator, and HashGenerator, which are used throughout the project to ensure confidentiality and integrity of sensitive information<br>- By leveraging industry-standard algorithms, it ensures robust security practices in the overall architecture.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/cryptography/jwt-encrypter.ts'>jwt-encrypter.ts</a></b></td>
<td>- Encrypts sensitive data using JSON Web Tokens (JWT) by signing payloads with a secret key, providing secure authentication and authorization capabilities within the application's infrastructure layer<br>- This implementation adheres to the Encrypter interface, ensuring consistency across the system while maintaining confidentiality and integrity of user information.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>auth</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/auth/auth.module.ts'>auth.module.ts</a></b></td>
<td>- Configures authentication infrastructure by registering JWT module with environment variables and setting up a global guard using the JwtAuthGuard class<br>- This module provides a centralized authentication mechanism for the entire application, ensuring secure access to protected resources.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/auth/jwt-auth.guard.ts'>jwt-auth.guard.ts</a></b></td>
<td>- Enforces authentication using JSON Web Tokens (JWT) across the application, ensuring only authorized users access protected routes and resources<br>- This implementation integrates with NestJS's built-in Passport strategy to validate JWTs, providing a secure layer of protection against unauthorized access.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/auth/jwt.strategy.ts'>jwt.strategy.ts</a></b></td>
<td>- Validates user authentication by parsing JWT token payload against a predefined schema, ensuring the integrity of user data and enforcing access control within the application architecture<br>- This component plays a crucial role in maintaining security and consistency across the system.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/auth/currentUser-decorartor.ts'>currentUser-decorartor.ts</a></b></td>
<td>- Provides user authentication context by retrieving the authenticated user from the HTTP request and returning it as a decorated parameter<br>- This decorator is used to inject the current user into routes and controllers, enabling access control and authorization logic throughout the application.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/src/infra/auth/public.ts'>public.ts</a></b></td>
<td>- Defines authentication boundaries by setting metadata indicating whether an endpoint is public or not, enabling access control and routing decisions throughout the application architecture<br>- This implementation aligns with the project's structure, which emphasizes modularity and separation of concerns in its infrastructure layer.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
</blockquote>
</details>
<details> <!-- test Submodule -->
<summary><b>test</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/test/setup-e2e.ts'>setup-e2e.ts</a></b></td>
<td>- Establishes a unique database connection for end-to-end testing by generating a new schema ID and setting the DATABASE_URL environment variable accordingly<br>- This setup allows for isolated testing of the application's interactions with the Prisma database, ensuring a clean slate between test runs<br>- The process also deploys any pending migrations to ensure a consistent database state.</td>
</tr>
</table>
<details>
<summary><b>factories</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/test/factories/make-user.ts'>make-user.ts</a></b></td>
<td>- Creates mock users for testing purposes by generating random user data and persisting it to the Prisma database using a factory pattern<br>- This enables efficient and consistent test setup, ensuring reliable results across various test scenarios within the project's architecture.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>cryptography</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/test/cryptography/fake-encrypter.ts'>fake-encrypter.ts</a></b></td>
<td>- Encrypts sensitive data by converting payloads into JSON strings, providing a mock encryption implementation for testing purposes within the project's cryptography module<br>- This fake encrypter allows developers to simulate encryption without actually modifying or exposing sensitive information, facilitating secure testing and integration of cryptographic features in the application.</td>
</tr>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/test/cryptography/fake-hasher.ts'>fake-hasher.ts</a></b></td>
<td>- The FakeHasher class enables mock hashing functionality for testing purposes within the project's cryptography module<br>- It allows developers to simulate hash comparisons and generation without relying on actual cryptographic algorithms, facilitating unit testing and integration with other components in the system<br>- This implementation supports the project's overall goal of providing a robust and secure authentication mechanism.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>repositories</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/test/repositories/in-memory-user.repository.ts'>in-memory-user.repository.ts</a></b></td>
<td>- Provides an in-memory user data store that allows for efficient retrieval and creation of users based on email addresses, enabling the application to function independently without relying on external data sources<br>- This implementation is a crucial component of the overall project architecture, facilitating seamless integration with other modules and services.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details> <!-- prisma Submodule -->
<summary><b>prisma</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/prisma/schema.prisma'>schema.prisma</a></b></td>
<td>- Generates Prisma client schema for the project, defining database structure and relationships between models such as User, List, and Item<br>- The schema establishes a PostgreSQL data source with environment variable-driven connection URL and specifies unique fields, default values, and mapping to existing tables in the database<br>- This setup enables efficient interaction with the database through Prisma's auto-generated client code.</td>
</tr>
</table>
<details>
<summary><b>migrations</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/prisma/migrations/migration_lock.toml'>migration_lock.toml</a></b></td>
<td>- Ensures database migration consistency by locking the current migration state, preventing concurrent changes to the PostgreSQL database schema<br>- This mechanism maintains data integrity and prevents potential conflicts during development or deployment<br>- It is a crucial component of the project's infrastructure, supporting reliable and efficient database operations.</td>
</tr>
</table>
<details>
<summary><b>20241128012703_adding_two_factor_fields</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/prisma/migrations/20241128012703_adding_two_factor_fields/migration.sql'>migration.sql</a></b></td>
<td>- Enables two-factor authentication by adding recovery code, enabled flag, and secret fields to the users table, while dropping the Item table and replacing it with a new items table with enhanced schema<br>- This change enhances security and data organization within the project's database structure.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>20241127014956_create_user_list_and_item</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/dornelles08/template-auth/blob/master/prisma/migrations/20241127014956_create_user_list_and_item/migration.sql'>migration.sql</a></b></td>
<td>- Establishes database schema by creating three tables: users, lists, and Item<br>- Defines relationships between these entities through foreign keys, ensuring data consistency and integrity<br>- This migration enables the storage of user information, list management, and item tracking within the application.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
</blockquote>
</details>

</details>

---

## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with template-auth, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### ⚙️ Installation

Install template-auth using one of the following methods:

**Build from source:**

1. Clone the template-auth repository:

```sh
❯ git clone https://github.com/dornelles08/template-auth
```

2. Navigate to the project directory:

```sh
❯ cd template-auth
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

3. Generate Private Key and Public Key:

   - Private Key

```sh
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```

- Public Key

```sh
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

- Convert to base64

```sh
# Linux
base64 -w 0 -i input_file > output_file

# MacOs
base64 --i input_file -o output_file
```

### 🤖 Usage

Run template-auth using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

### 🧪 Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

### 🧪 Bulding

Build the application using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm build
```

Run builded apllication using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run strat:prod
```

---

## 📌 Project Roadmap

- [x] **`Task 1`**: <strike>Basic authentication with JWT</strike>
- [ ] **`Task 2`**: Refresh token implementation.
- [ ] **`Task 3`**: 2FA Implementation.

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/dornelles08/template-auth/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/dornelles08/template-auth/issues)**: Submit bugs found or log feature requests for the `template-auth` project.
- **💡 [Submit Pull Requests](https://github.com/dornelles08/template-auth/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/dornelles08/template-auth
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com/dornelles08/template-auth/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=dornelles08/template-auth">
   </a>
</p>
</details>

---
