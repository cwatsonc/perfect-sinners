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

## Contributing

fork this repository and provide a pull request with proposed changes. Favor small changes to simplify pulls.
