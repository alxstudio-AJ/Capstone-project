# Workflow Comparison: Vague vs Precise Prompting

## Round 1: Vague Prompt
- **Prompt:** "Build me a study preferences form"
- **What I got:** Basic HTML form with no validation, no styling
- **Time spent:** 30 minutes (prompt + debugging missing features)
- **Issues:** No error messages, no validation, ugly design

## Round 2: Precise Prompt
- **Prompt:** [copy your detailed prompt]
- **What I got:** Complete form with validation, styling, error messages
- **Time spent:** 25 minutes (detailed prompt + verification)
- **AI mistake caught:** AI initially used `alert()` instead of inline errors, I had to correct it

## Comparison
- **Correctness:** Round 2 passed all tests, Round 1 failed validation
- **Accessibility:** Round 2 had proper labels, Round 1 didn't
- **Edge Cases:** Round 2 handled empty inputs, Round 1 crashed
- **Review Effort:** Round 1 needed major fixes, Round 2 needed minor tweaks

## Key Lesson
Better prompts = better code. The detailed prompt took slightly longer to write but saved time fixing bugs. The AI caught edge cases I hadn't even thought of.