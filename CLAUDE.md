# Project Rules

## Tech Stack
- HTML, CSS, JavaScript
- Node.js (LTS)
- React (if needed later)

## Conventions
- Use Conventional Commits (feat:, fix:, docs:, chore:)
- Keep code clean and commented
- Follow ESLint rules when added

## Project Rules (Learned from Week 2)

1. **All forms must use inline validation** - Show error messages directly below each field, not in alerts or console. This improves user experience.

2. **Always include test coverage** - For every feature, write at least 3 test cases: success, failure, and edge case.

3. **Mobile-first responsive design** - All forms must work on screens 320px and above. Use media queries for desktop improvements.

4. **Use descriptive IDs** - Every form element needs an ID matching its purpose (e.g., `#name-input`, not `#field1`).

# On round 1 branch
git add .
git commit -m "feat: implement vague prompt version of settings form"
git push origin vague-prompt

# Switch to round 2 branch
git checkout -b precise-prompt
git add .
git commit -m "feat: implement precise prompt version with validation"
git push origin precise-prompt

# Push the workflow doc
git add WORKFLOW.md CLAUDE.md
git commit -m "docs: add workflow comparison and updated rules"
git push origin main