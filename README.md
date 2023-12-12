# wodetian-ui

[![NPM version](https://img.shields.io/npm/v/wodetian-ui?color=a1b858&label=)](https://www.npmjs.com/package/wodetian-ui)

## Usage

- Search and replace all `wodetian-ui` to `what-you-want-package-name`
- Update [\_theme.tsx](./docs/pages/_theme.tsx) package href, remove useless navs
- Update or remove test cases
- Add description to [package.json](./package.json)
- Add some keywords to [package.json](./package.json)
- Update the author information, like name, link, etc.

Finally, you can remove the [usage section](#usage) completely.

## Build & Publish

- `npm run build`
- `npx changeset`
- `npx changeset version`
- `git commit`
- `npx changeset publish`
- `git push --follow-tags`

> [`changeset` prerelease doc](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)

