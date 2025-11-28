# Testing Standards

Guidelines for writing and maintaining tests.

## Test Coverage

- Write tests for all new functionality
- Cover happy paths and error cases
- Test edge cases and boundary conditions
- Aim for meaningful coverage, not just high percentages

## Test Organization

- Keep tests close to the code they test
- Use descriptive test names that explain the scenario
- Group related tests logically
- Separate unit tests from integration tests

## Unit Tests

- Test one thing per test
- Keep tests fast and isolated
- Mock external dependencies
- Focus on behavior, not implementation

## Integration Tests

- Test component interactions
- Use realistic test data
- Clean up after tests
- Handle async operations properly

## Test Naming

Use descriptive names that explain:
- What is being tested
- Under what conditions
- Expected outcome

Example: `shouldReturnErrorWhenUserNotFound`

## Test Data

- Use factories or builders for test objects
- Avoid sharing mutable state between tests
- Clean up test data after runs
- Use realistic but anonymized data

## Mocking

- Mock external services and APIs
- Don't mock what you don't own excessively
- Verify mock interactions when relevant
- Keep mocks simple and focused

## Running Tests

- Run tests before every commit
- Keep the test suite fast
- Fix flaky tests immediately
- Maintain CI/CD test automation
