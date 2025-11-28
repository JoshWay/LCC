# Implement Tasks

Execute implementation tasks from a specification.

## Instructions

### Phase 1: Determine Tasks

1. Read tasks from `agent-os/specs/[spec-name]/tasks.md`
2. Identify which task groups are ready for implementation
3. Confirm with user which tasks to implement

### Phase 2: Implement Tasks

For each selected task:

1. **Read Context:**
   - Review spec.md and requirements.md
   - Check existing codebase patterns
   - Review relevant standards in `agent-os/standards/`

2. **Implement:**
   - Write code following project conventions
   - Add appropriate tests
   - Update documentation as needed

3. **Mark Complete:**
   - Check off completed tasks in tasks.md: `- [x] Task`

### Phase 3: Verify Implementation

After completing all selected tasks:

1. Run tests to confirm functionality
2. For UI features, perform manual testing
3. Store verification screenshots in `agent-os/specs/[spec-name]/verification/screenshots/`
4. Compare implementation against requirements

### Output

Provide implementation summary:
- Tasks completed
- Tests passing
- Any issues or notes for follow-up
