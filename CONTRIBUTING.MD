# Contributing to Daylight

First off, thank you for considering contributing! It's people like you that make this tool a great resource for organizations managing remote development teams.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- Use a clear and descriptive title for the issue to identify the problem.
- Describe the exact steps that reproduce the problem in as much detail as possible.
- Provide specific examples to demonstrate the steps.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

- Use a clear and descriptive title for the issue to identify the suggestion.
- Provide a step-by-step description of the suggested enhancement in as many details as possible.
- Provide specific examples to demonstrate the steps.

### Pull Requests

- Fill in the required pull request template (see below).
- Do not include issue numbers in the PR title.
- Include screenshots and animated GIFs in your pull request whenever possible.
- Follow the TypeScript and JavaScript style guides.
- Include thoughtfully-worded, well-structured tests.
- Document new code following the Documentation Styleguide.
- End all files with a newline.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

### TypeScript Styleguide

- Use types whenever possible.
- Prefer `const` over `let`; never use `var`.
- Use async/await over callbacks.
- Use template literals over string concatenation.

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

### Documentation Styleguide

- Use [Markdown](https://daringfireball.net/projects/markdown).
- Reference methods and classes in markdown with the custom `{}` notation:
  - Reference classes with `{ClassName}`.
  - Reference instance methods with `{ClassName::methodName}`.
  - Reference class methods with `{ClassName.methodName}`.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

- `bug` - Issues that are bugs.
- `enhancement` - Issues that are feature requests.
- `documentation` - Issues or pull requests related to documentation.
- `good first issue` - Good for newcomers.

## Getting Started

For contributions larger than a one or two-line fix:

1. Create your own fork of the code.
2. Make changes in your fork.
3. If you like the change and think the project could use it:
   - Ensure the code style matches the project’s guidelines.
   - Submit a pull request.

Small contributions, such as fixing spelling errors, can be submitted by contributors as a patch without the need for a formal pull request.

### Obvious Fixes

Obvious fixes are minor contributions that do not introduce any new functionality or creative thinking. Examples include:

- Spelling / grammar fixes.
- Typo correction, white space and formatting changes.
- Comment clean up.
- Bug fixes that adjust return values or error codes stored in constants.
- Adding logging messages or debugging output.
- Metadata changes like `.gitignore` or build scripts.
- Moving source files between directories or packages.

## Branch Naming Guidelines

Please follow these conventions when creating new branches:

### Format


- **`type`**: The nature of the branch (`feature`, `bugfix`, `hotfix`, `docs`, `test`).
- **`issue-number`**: The related issue or task ID (if applicable).
- **`short-description`**: Brief summary of the branch’s purpose (use hyphens `-` between words).

### Examples

- `feature/123-add-login`
- `bugfix/456-fix-login-error`
- `docs/101-update-readme`
- `release/v1.0.0`

### Rules

1. Use lowercase letters only.
2. Separate words with hyphens (`-`).
3. Keep it concise (3-5 words).
4. Avoid special characters.


## Attribution

This Contributing Guide is adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md).

---

## Pull Request Template

```md
## Pull Request Checklist

- [ ] I have read the contributing guidelines.
- [ ] I have followed the TypeScript/JavaScript style guides.
- [ ] All new and existing tests passed.

## Description

(Briefly describe the changes made in this pull request.)

## Screenshots / GIFs (if applicable)

(Add relevant screenshots or GIFs to illustrate changes or UI enhancements.)

## Related Issues

(Provide issue numbers if applicable. e.g., fixes #123)

## Additional Notes

(Anything else you'd like to mention about this pull request?)
```
