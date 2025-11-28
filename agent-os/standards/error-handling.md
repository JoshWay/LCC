# Error Handling Standards

Guidelines for handling errors consistently across the codebase.

## General Principles

- Fail fast: detect errors early and handle them immediately
- Be explicit: don't silently swallow errors
- Provide context: include helpful information in error messages
- Log appropriately: errors should be visible for debugging

## Error Messages

- Write clear, actionable error messages
- Include what went wrong and potential fixes
- Avoid exposing internal implementation details to users
- Use consistent error message formatting

## Exception Handling

- Catch specific exceptions, not generic ones
- Don't use exceptions for flow control
- Re-throw with additional context when appropriate
- Clean up resources in finally blocks

## Validation

- Validate inputs at system boundaries
- Fail early with clear error messages
- Trust internal code (avoid redundant validation)
- Use type systems where available

## Logging

- Log errors with full context for debugging
- Use appropriate log levels (error, warn, info, debug)
- Don't log sensitive information
- Include correlation IDs for distributed systems

## User-Facing Errors

- Show user-friendly messages, not stack traces
- Provide recovery options when possible
- Maintain error state visibility (forms, UI feedback)
- Track errors for improvement

## API Errors

- Use appropriate HTTP status codes
- Return consistent error response format
- Include error codes for programmatic handling
- Document all possible error responses
