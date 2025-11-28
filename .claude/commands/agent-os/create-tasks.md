# Create Tasks

Break down a specification into actionable implementation tasks.

## Instructions

### Phase 1: Analyze Specification

1. Read the specification from `agent-os/specs/[spec-name]/spec.md`
2. Identify all implementation requirements
3. Group related work into logical task groups

### Phase 2: Create Tasks List

Create `agent-os/specs/[spec-name]/tasks.md` with:

```markdown
# Tasks for [Spec Name]

## Task Group 1: [Group Name]
- [ ] Task 1.1: Description
- [ ] Task 1.2: Description

## Task Group 2: [Group Name]
- [ ] Task 2.1: Description
- [ ] Task 2.2: Description
```

### Guidelines

- Make tasks atomic and testable
- Include acceptance criteria for each task
- Order tasks by dependencies
- Estimate complexity (S/M/L) if helpful
- Include testing tasks for each feature

### Output

Confirm the tasks file is created and provide a summary:
- Total number of task groups
- Total number of tasks
- Recommended implementation order

Tasks are ready for implementation with `implement-tasks`.
