module.exports = {
    "dataSource": "issues",
    "prefix": "",
    "ignoreLabels": ["duplicate", "help wanted"],
    "ignoreIssuesWith": ["help wanted", "good first issue", "invalid", "question", "wontfix", "spike"],
    "onlyMilestones": false,
    "groupBy": {},
    "changelogFilename": "CHANGELOG.md",
    "groupBy": {
        "BREAKING CHANGES": ["breaking change"],
        "FEATURES ⭐️": ["enhancement", "feature", "ig profiling"],
        "BUG FIXES 🐞": ["bug", "bug fix", "typo"],
        "DOCUMENTATION 📚": ["documentation"]    
    },
    "template": {
        commit: ({ message, url, author, name }) => `- [${message}](${url}) - ${author ? `@${author}` : name}`,
        issue: "- {{name}} [{{text}}]({{url}})",
        label: "[**{{label}}**]",
        noLabel: "bug",
        group: "\n#### {{heading}}\n",
        changelogTitle: "# Release Notes\n\n",
        release: "## {{release}} ({{date}})\n{{body}}",
        releaseSeparator: "\n---\n\n"
    }    
}