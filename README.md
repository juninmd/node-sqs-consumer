```markdown
# node-sqs-consumer

## Description

A standard software project focused on reliably consuming SQS messages.

## Installation

1.  Clone the repository: `git clone https://github.com/your-username/node-sqs-consumer.git`
2.  Navigate to the project directory: `cd node-sqs-consumer`
3.  Install dependencies: `npm install`
4.  Configure environment variables (if needed - see .vscode)

## Usage

1.  **Define your SQS Queue:** Create a SQS queue in your AWS account.
2.  **Create a Consumer Application:**  Use `npm run consumer` to generate a consumer application.
3.  **Configure the Consumer:** Modify the `config.json` file to point to your queue and handle message processing.
4.  **Run the Application:** Execute `npm start` or `node index.js` to start the consumer.

**Key Files:**

*   `.eslintrc.js`: ESLint configuration for code linting.
*   `.gitignore`: Specifies files to ignore for Git.
*   `.prettierrc`: Prettier configuration for code formatting.
*   .vscode: VS Code settings.
*   `package.json`: Project metadata and dependencies.
*   `src/`: Contains the main application logic and data structures.
*   `tsconfig.build.json`: TypeScript configuration for compilation.
*   `tsconfig.json`: TypeScript configuration for compilation.
*   `yarn.lock`: Yarn lock file for dependency management.

```