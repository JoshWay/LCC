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
├── LICENSE                           # MIT License
├── CLAUDE.md                         # AI assistant guidelines (this file)
├── .claude/
│   └── commands/
│       └── agent-os/                 # Agent OS slash commands
│           ├── plan-product.md       # /plan-product - Product planning workflow
│           ├── shape-spec.md         # /shape-spec - Shape feature specifications
│           ├── write-spec.md         # /write-spec - Write detailed specifications
│           ├── create-tasks.md       # /create-tasks - Break specs into tasks
│           └── implement-tasks.md    # /implement-tasks - Execute implementation
├── agent-os/
│   ├── planning/                     # Product planning documents (generated)
│   ├── specs/                        # Feature specifications (generated)
│   │   └── [spec-name]/
│   │       ├── requirements.md
│   │       ├── spec.md
│   │       ├── tasks.md
│   │       └── verification/
│   └── standards/                    # Project coding standards
│       ├── coding-style.md
│       ├── conventions.md
│       ├── error-handling.md
│       └── testing.md
└── [source files]                    # Application source code
```

## Agent OS Integration

This project uses [Agent OS](https://github.com/buildermethods/agent-os) for spec-driven development.

### Available Commands

Use these slash commands for structured development workflows:

| Command | Description |
|---------|-------------|
| `/plan-product` | Plan product vision, mission, roadmap, and tech stack |
| `/shape-spec` | Shape feature specifications through structured conversation |
| `/write-spec` | Write detailed specification documents |
| `/create-tasks` | Break specifications into implementation tasks |
| `/implement-tasks` | Execute and verify implementation tasks |

### Workflow

The recommended development workflow is:

1. **Plan** - Use `/plan-product` for new products or major features
2. **Shape** - Use `/shape-spec` to refine requirements through dialogue
3. **Write** - Use `/write-spec` to create detailed specifications
4. **Tasks** - Use `/create-tasks` to break work into actionable items
5. **Implement** - Use `/implement-tasks` to execute and verify

### Standards

Always check `agent-os/standards/` before implementing:
- `coding-style.md` - Naming, formatting, code organization
- `conventions.md` - Version control, dependencies, code review
- `error-handling.md` - Error messages, validation, logging
- `testing.md` - Test coverage, organization, naming

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
3. **Check standards** - Review `agent-os/standards/` for project conventions
4. **Check for existing patterns** - Follow established conventions in the codebase

### When Implementing

1. **Make minimal changes** - Only modify what's necessary to complete the task
2. **Avoid over-engineering** - Don't add features or abstractions not requested
3. **Preserve existing functionality** - Ensure changes don't break working code
4. **Test your changes** - Verify implementation works correctly
5. **Update task tracking** - Mark completed tasks in `agent-os/specs/*/tasks.md`

### Using Agent OS Commands

- Use slash commands for structured development work
- Follow the spec-driven workflow for new features
- Keep specifications and tasks updated as work progresses
- Store verification evidence in appropriate directories

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

- This project uses Agent OS for spec-driven development
- Conventions may evolve as the project grows
- Update this document when new patterns are established
- Keep specifications in sync with implementation

## Getting Started

1. Clone the repository
2. Review this document and `agent-os/standards/`
3. Set up development environment (instructions TBD)
4. Create a feature branch for your changes
5. Use Agent OS commands for structured development
6. Follow the coding standards above

---

*Last updated: 2025-11-28*
