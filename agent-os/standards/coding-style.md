# Coding Style Standards

Follow these coding style guidelines for all code in this project.

## Naming Conventions

- Use clear, descriptive names for variables, functions, classes, and files
- Follow language-specific naming conventions (camelCase for JS/TS, snake_case for Python, etc.)
- Avoid abbreviations unless they are widely understood
- Single-letter variables are only acceptable in short loops or lambda expressions

## Code Formatting

- Use consistent indentation (spaces or tabs, but not both)
- Configure your editor to enforce formatting automatically
- Keep lines to a reasonable length (80-120 characters)
- Use blank lines to separate logical sections

## Functions and Methods

- Keep functions focused on a single responsibility
- Functions should be short enough to understand at a glance
- Limit function parameters (prefer objects for multiple related values)
- Return early to avoid deep nesting

## Code Organization

- Remove unused code, imports, and commented-out sections
- Keep related code close together
- Order imports consistently
- Group public methods before private methods

## DRY Principle

- Extract common logic into reusable functions or modules
- Avoid copy-paste coding
- But don't over-abstract - duplication is better than the wrong abstraction

## Backward Compatibility

- Only implement backward compatibility measures when explicitly required
- Prefer clean breaks over accumulated technical debt
- Document any compatibility requirements clearly
