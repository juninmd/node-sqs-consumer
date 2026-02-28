# AGENTS.md Guidelines

These guidelines are designed to ensure the quality, maintainability, and efficiency of all AGENTS.md files within this repository. Adherence to these principles is mandatory for all development efforts.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each file should have a single, well-defined purpose. Avoid creating multiple files with overlapping functionality.
*   **Abstraction:**  Define abstract interfaces for reusable components.  Avoid implementing functionality directly within the main class or module – create separate interfaces and classes that define the behavior.
*   **Code Reuse:**  Prioritize the creation of reusable components and functions.  Document these components clearly.

## 2. KISS (Keep It Simple, Stupid)

*   **Simplicity:** Strive for the simplest possible solution.  Avoid unnecessary complexity.
*   **Readability:**  Code should be easy to understand.  Use meaningful variable and function names.
*   **Minimalism:**  Only include the essential elements for a given task.  Don’t introduce code just for the sake of it.

## 3. SOLID Principles

*   **Single Responsibility Principle (SRP):**  A class/module should have one reason to change.
*   **Open/Closed Principle:**  A class/module should be open for extension but closed for modification.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:**  Clients shouldn’t be forced to use methods they don’t need.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules; they should depend on abstractions.

## 4. YAGNI (You Aren’t Gonna Need It)

*   **Avoid Unnecessary Code:**  Don’t write code that is not currently required.
*   **Focus on the Core Task:**  Prioritize completing the essential functionality.  Don’t add features that are not essential to the current stage of development.

## 5. File Size & Structure

*   **Maximum Length:** Each file must be no more than 180 lines of code.
*   **Directory Structure:**  Maintain a consistent directory structure.  Files should be grouped logically.
*   **Naming Conventions:** Use descriptive and consistent file names.  Follow a clear naming scheme (e.g., snake_case).

## 6. Testing

*   **All Development Must Be Productive:**  Code must be written to be tested.
*   **Mocking ONLY for Tests:**  Use mocks and stubs exclusively for unit testing. No real dependencies or state should be introduced in test cases.
*   **Test Coverage:**  Achieve a minimum of 80% test coverage.  Automated testing (unit tests) will be implemented.

## 7. Code Quality & Style

*   **Consistent Formatting:**  Use a consistent code style (e.g., PEP 8 for Python).
*   **Comments:**  Add concise and informative comments where necessary, but avoid excessive commenting.
*   **Error Handling:**  Implement basic error handling to make the code more robust.

## 8.  Specific Considerations (Future Expansion - Adjust as Needed)

*   **Data Structures:** Define data structures clearly and efficiently.
*   **Error Handling:** Implement robust error handling.
*   **Logging:** Add logging functionality for debugging and monitoring.


These guidelines will be enforced during the development process.  Violation of these rules may result in review and potential rework.