module.exports = {
  disableEmoji: false,
  format: '{emoji}{type}{scope}: {subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf', 'build', 'revert'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '🤖',
      value: 'chore'
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix'
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '💡',
      value: 'refactor'
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release'
    },
    style: {
      description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      emoji: '💄',
      value: 'style'
    },
    feat: {
      description: 'A new feature',
      value: 'feat',
      emoji: '✨',
    },
    docs: {
      description: 'Documentation only changes',
      value: 'docs',
      emoji: '📚',
    },
    perf: {
      description: 'A code change that improves performance',
      value: 'perf',
      emoji: '🚀',
    },
    test: {
      description: 'Adding missing tests or correcting existing tests',
      value: 'test',
      emoji: '🚨',
    },
    build: {
      description:
        ' Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      value: ' build',
      emoji: '🛠',
    },
    ci: {
      description:
        ' Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
      value: ' ci',
      emoji: '⚙️',
    },
    revert: {
      description: ' Reverts a previous commit',
      value: ' revert',
      emoji: '🗑',
    },
    messages: {
      type: 'Select the type of change that you\'re committing:',
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  }
};