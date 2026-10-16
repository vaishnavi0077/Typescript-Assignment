# Typed Task Manager

A simple console-based Task Manager built using TypeScript. It allows you to add, update, remove, and filter tasks.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile TypeScript:
   ```bash
   npx tsc
   ```

3. Run the project:
   ```bash
   node dist/index.js
   ```

## Project Structure

```text
src/
  models.ts
  repository.ts
  notifications.ts
  api.ts
  index.ts
```

## Concepts Used

- Interfaces and literal union types
- Generics
- Utility types like `Omit` and `Partial`
- Discriminated unions and type narrowing
- Promises and async/await
- Error handling using try/catch

## Features

- Add, update, search, remove, and filter tasks
- Generate task IDs automatically
- Display different task notifications
- Fetch sample tasks with a simulated delay
- Use TypeScript strict mode for type safety
- Added "cancelled" to the status type.
- Created a Transitions type to define allowed status changes.
- Implemented a generic moveStatus() function that prevents invalid status transitions at compile time