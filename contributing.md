# Contribution Guidelines

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Adding to the List

If you have a free service or resource for nonprofits that you'd like to add to this awesome list, please follow these guidelines:

### Requirements

- The service must offer a **free** or significantly discounted program specifically for nonprofit organizations
- The offer should be clearly documented on the service provider's official website
- Include a direct link to the nonprofit program page
- Provide a brief, clear description of what's offered
- Ensure the service is currently active and available

### Submission Process

If you have something awesome to contribute to this list, this is how you do it.

You'll need a [GitHub account](https://github.com/join)!

1. Access this repository's GitHub page: https://github.com/athman3/awesome-free-nonprofits
2. Click on the `README.md` file
3. Now click on the edit icon
4. You can start editing the text of the file in the in-browser editor. Make sure you follow the guidelines below. You can use [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/).
5. Say why you're proposing the changes, and then click on "Propose file change"
6. Submit the [pull request](https://help.github.com/articles/using-pull-requests/)!

### Format Requirements

When adding a service, use the awesome list standard format:

```markdown
- [Service Name](https://link-to-nonprofit-program) - Description.
```

The description should:
- Start with an uppercase character
- End with a period
- Be concise but informative
- Use factual, objective language (no promotional content)

- Find the appropriate category or create a new one if needed
- Add your service in alphabetical order within the category
- Update the Table of Contents if you added a new category

### How the Parser Extracts "About" and "Offer"

The web application automatically parses your description to extract two parts: **About** (what the service is) and **Offer** (what's available for nonprofits). Here's how it works:

**Structure your description with multiple sentences:**

1. **First sentence** = "About" section
   - Describes what the service/company is
   - Should be a brief, general description
   - Example: "Cloud computing platform offering over 200 services including compute, storage, databases, machine learning, and analytics."

2. **Remaining sentences** = "Offer" section
   - Describes what's specifically offered for nonprofits
   - Should include details about the nonprofit program, features, and benefits
   - Example: "Comprehensive cloud computing program for eligible nonprofits providing promotional credits for AWS services. Access to compute, storage, databases, machine learning, analytics, IoT, and 200+ AWS services..."

**Important:**
- Use periods (`.`) to separate sentences - the parser splits on `. ` (period followed by space)
- If you only provide one sentence, it will be used for both "About" and "Offer"
- For best results, always include at least 2 sentences: one describing the service, and one or more describing the nonprofit offer

**Example of proper structure:**

```markdown
- [AWS for Nonprofits](url) - Cloud computing platform offering over 200 services including compute, storage, databases, machine learning, and analytics. Comprehensive cloud computing program for eligible nonprofits providing promotional credits for AWS services. Access to compute, storage, databases, machine learning, analytics, IoT, and 200+ AWS services. Credits can be used for website hosting, data analysis, application development, backup solutions, and scaling operations.
```

This will be parsed as:
- **About:** "Cloud computing platform offering over 200 services including compute, storage, databases, machine learning, and analytics."
- **Offer:** "Comprehensive cloud computing program for eligible nonprofits providing promotional credits for AWS services. Access to compute, storage, databases, machine learning, analytics, IoT, and 200+ AWS services. Credits can be used for website hosting, data analysis, application development, backup solutions, and scaling operations."

### Quality Standards

- Links must be direct and working (link to the nonprofit program page, not the main website)
- No promotional language - be factual and objective
- Check for duplicates before submitting
- Verify the service is still active and available

## Updating Your Pull Request

Sometimes, a maintainer will ask you to edit your Pull Request before it is included. This is normally due to spelling errors or because your PR didn't match the awesome list guidelines.

[Here](https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md) is a write up on how to change a Pull Request and the different ways you can do that.

## Reporting Issues

If you find:
- Broken links
- Services that are no longer available
- Incorrect information
- Services that should be added

Please [open an issue](../../issues) with details.

## Questions?

If you have any questions about contributing, feel free to [open an issue](../../issues) and we'll be happy to help!

## Thank You

Your contributions to this project help nonprofit organizations discover valuable free resources. Thank you for taking the time to contribute!

