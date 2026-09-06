# 2oodleSpace · Frontend

A further SpoodleSpace frontend iteration, with the React application inside spoodle-space-pp5/.

**React · JavaScript**

[Getting started](#getting-started) · [Repository guide](#repository-guide) · [Checks](#checks-and-review) · [Credits](#credits-and-reuse)

## What you can explore

- Registration and sign-in screens.
- Posts, comments, likes and member profiles.
- Dog-profile, dog-health and dog-danger pages.
- Paginated feeds and API-backed interaction.

> **Project notes:** These features require a compatible SpoodleSpace API. Configure the Axios base URL and matching backend origin/cookie settings before testing sign-in or data changes.

## Getting started

Requires Git, Node.js and npm. Declared versions: `node 16.20.0`, `npm 8.19.4`.

```bash
git clone https://github.com/SamOBrienOlinger/2oodleSpace-Frontend.git
cd 2oodleSpace-Frontend
cd spoodle-space-pp5
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000), or the alternative address printed by the development server.

The project retains its original Create React App toolchain. If installation reports an engine or dependency conflict, compare your Node/npm versions with the manifest and lockfile before changing either. An install command is not evidence that this older dependency set has been modernised.

For API-backed features, configure [spoodle-space-pp5/src/api/axiosDefaults.js](spoodle-space-pp5/src/api/axiosDefaults.js). The backend must allow the frontend origin and use compatible authentication/cookie settings.

## Repository guide

| Path | Purpose |
| --- | --- |
| [spoodle-space-pp5/package.json](spoodle-space-pp5/package.json) | Package dependencies and available commands |

## Checks and review

Run the commands below from the **repository root**, `2oodleSpace-Frontend/`. If you are still inside `spoodle-space-pp5/` after the quick start, run `cd ..` first. Alternatively, stay in that application directory and omit `--prefix spoodle-space-pp5` from each command.

Use Node.js `16.20.0` and npm for the package commands below. Install the package dependencies first when the command uses a local build or test tool.

| Command | Purpose |
| --- | --- |
| `npm --prefix spoodle-space-pp5 run build` | Create the configured application build |
| `npm --prefix spoodle-space-pp5 test -- --watchAll=false` | Run the existing test suite |

For a manual review, follow the main user journey, check keyboard navigation and narrow-screen layouts, and inspect the browser console for missing assets or failed requests.

Generate fresh results from the revision you are working on; historical test reports describe earlier runs.

## Further reading

- [Documentation for spoodle-space-pp5](spoodle-space-pp5/README.md)

## Credits and reuse

Design decisions, original feature notes, historical testing evidence and detailed acknowledgements remain available in the preserved project record:

- [spoodle-space-pp5/README.md · original project record](https://github.com/SamOBrienOlinger/2oodleSpace-Frontend/blob/e6fb2395b3337eb12f208df2ba8eea1cd65f259b/spoodle-space-pp5/README.md)

Learning resources and starter material: [Code Institute](https://codeinstitute.net/).

No repository-level licence file is present in this snapshot. This README does not grant additional reuse permissions. Check with the relevant rights holders before reusing code, written content or assets.

## Support

Repository maintained in [Sam O’Brien-Olinger’s GitHub account](https://github.com/SamOBrienOlinger). For a problem or suggested improvement, [open an issue](https://github.com/SamOBrienOlinger/2oodleSpace-Frontend/issues) with the affected page or command, steps to reproduce, and expected behaviour.

[Back to top](#2oodlespace--frontend)
