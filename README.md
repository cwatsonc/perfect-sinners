# Project - Julio Breakout

A web application implemented in Nextjs with an eye towards hexagonal architecture.  

## Installation

Clone the project and run npm installations.

```bash
npm i #install dependencies

npx prisma init #flesh out configurations.

npx prisma migrate dev #generate client and populate db

```

## Getting Started

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```text
src/
├── core/                   # The "Hexagon" (Inside)
│   ├── domain/
│   │   ├── models/         # Business entities
│   │   └── ports/          # Interfaces (Driven Ports)
│   │       └── IUserRepository.ts
│   └── application/        # Use cases / services
└── infrastructure/         # Adapters (Outside)
    └── adapters/
        ├── persistence/    # Repository implementations (Driven Adapters)
        │   └── SqlUserRepository.ts
        └── web/            # Controllers (Driving Adapters)
            └── UserController.ts 
            
```

## Roadmap

the highest priority is to provide a hexagonal approach to yoking and wiring persistence level facilities -- to that end I'm evaluating patterns of use with:

```text
InversifyJS: A powerful, lightweight IoC container for TypeScript and JavaScript apps. It uses decorators to define dependencies and is widely used when a robust, framework-agnostic solution is needed.
tsyringe: A lightweight DI container for TypeScript maintained by Microsoft. It is often preferred for its simplicity and support for constructor injection.
Awilix: An extremely powerful DI container for Node.js and the browser that doesn't rely on decorators, making it compatible with standard JavaScript.
xInjection: A newer library specifically designed to bring Angular-style DI modules into React, built on top of InversifyJS.
Obsidian: A DI framework for React and React Native developed by Wix, aimed at large-scale enterprise projects.
```

## Contributing

fork this repository and provide a pull request with proposed changes. Favor small changes to simplify pulls.
