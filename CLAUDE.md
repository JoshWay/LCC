# CLAUDE.md - AI Assistant Guide for LCC

This document provides context and guidelines for AI assistants working on the LCC project.

## Project Overview

**Repository:** LCC
**Owner:** Josh Way
**License:** MIT
**Status:** Initial development phase

## Codebase Structure

```
LCC/
├── LICENSE          # MIT License
├── CLAUDE.md        # AI assistant guidelines (this file)
└── [future source files]
```

*Note: This is a new project. The structure will be updated as the codebase develops.*

## Development Workflow

### Git Conventions

- **Main Branch:** Use for stable, production-ready code
- **Feature Branches:** Use the naming pattern `feature/<description>` or `claude/<description>-<session-id>` for AI-assisted development
- **Commit Messages:** Use clear, descriptive messages following conventional commits:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `refactor:` for code refactoring
  - `test:` for adding/updating tests
  - `chore:` for maintenance tasks

### Pull Requests

- Provide a clear description of changes
- Reference any related issues
- Ensure all tests pass before merging

## Coding Standards

### General Principles

1. **Keep it simple** - Prefer straightforward solutions over clever ones
2. **Be consistent** - Follow existing patterns in the codebase
3. **Document when necessary** - Add comments for complex logic, not obvious code
4. **Test your changes** - Ensure code works as expected before committing

### Code Quality

- Avoid introducing security vulnerabilities (OWASP Top 10)
- Handle errors appropriately at system boundaries
- Keep functions focused and single-purpose
- Prefer readability over brevity

## AI Assistant Guidelines

### Before Making Changes

1. **Read existing code first** - Never propose changes without understanding context
2. **Understand the scope** - Clarify requirements before implementing
3. **Check for existing patterns** - Follow established conventions in the codebase

### When Implementing

1. **Make minimal changes** - Only modify what's necessary to complete the task
2. **Avoid over-engineering** - Don't add features or abstractions not requested
3. **Preserve existing functionality** - Ensure changes don't break working code
4. **Test your changes** - Verify implementation works correctly

### Communication

- Ask clarifying questions when requirements are ambiguous
- Explain technical decisions when relevant
- Report any issues or blockers encountered

## Build & Test Commands

*Commands will be added as the project develops.*

```bash
# Placeholder for future commands
# npm install        # Install dependencies
# npm test           # Run tests
# npm run build      # Build the project
# npm run lint       # Run linter
```

## Project-Specific Notes

- This project is in early development
- Conventions may evolve as the project grows
- Update this document when new patterns are established

## Getting Started

1. Clone the repository
2. Review existing code and documentation
3. Set up development environment (instructions TBD)
4. Create a feature branch for your changes
5. Follow the coding standards above

---

*Last updated: 2025-11-28*
