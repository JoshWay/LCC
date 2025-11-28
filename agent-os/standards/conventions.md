# Development Conventions

General conventions for development workflow and project organization.

## Project Structure

- Organize files in a logical, predictable structure
- Keep related files close together
- Use consistent directory naming
- Separate concerns (src, tests, docs, config)

## Documentation

- Maintain an up-to-date README
- Document setup and installation steps
- Include architecture overview for complex projects
- Keep inline documentation minimal but meaningful

## Version Control

- Write clear, descriptive commit messages
- Use feature branches for new work
- Keep commits atomic and focused
- Write meaningful pull request descriptions

## Configuration

- Store configuration in environment variables
- Never commit secrets, API keys, or credentials
- Use .env files for local development
- Document all required environment variables

## Dependencies

- Keep dependencies minimal and current
- Document why each dependency is needed
- Regularly update for security patches
- Lock versions for reproducible builds

## Code Review

- All code should be reviewed before merging
- Focus on logic, not style (use linters for style)
- Be constructive and specific in feedback
- Respond to all review comments

## Testing

- Write tests for new functionality
- Maintain existing test coverage
- Run tests before committing
- Fix broken tests promptly

## Change Tracking

- Keep a changelog for significant changes
- Use semantic versioning when applicable
- Document breaking changes clearly
