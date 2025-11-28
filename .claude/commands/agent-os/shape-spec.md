# Shape Specification

Shape and refine a feature specification through structured conversation.

## Instructions

### Phase 1: Initialize Specification

1. Ask the user what feature or capability they want to specify
2. Clarify the scope and boundaries of the feature
3. Create initial spec structure at `agent-os/specs/[spec-name]/`

### Phase 2: Shape the Specification

Engage in structured dialogue to refine:

**Functional Requirements:**
- What should this feature do?
- What are the user interactions?
- What are the inputs and outputs?

**Non-Functional Requirements:**
- Performance expectations
- Security considerations
- Accessibility requirements

**Edge Cases:**
- Error handling
- Boundary conditions
- Fallback behaviors

**Dependencies:**
- Required APIs or services
- Database changes
- UI/UX components

### Output

Save the shaped specification to `agent-os/specs/[spec-name]/requirements.md`.

Confirm the specification is ready for detailed writing with the `write-spec` command.
