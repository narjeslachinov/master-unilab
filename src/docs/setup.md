# Project Setup

Documentation Mapping Next.js Project

---

## Base Packages

### clsx

Class Management

``bash
npm install clsx

```

---

### tailwind-merge

Resolving Tailwind Class Conflicts

``bash
npm install tailwind-merge
```

---

### class-variance-authority

Creating Variants for Components

``bash
npm install class-variance-authority

```

---

#prettier

Install:

``bash
npm install -D prettier prettier-plugin-tailwindcss
```

File:

«.prettierrc».

``json
{
"half": true,
"singleQuote": false,
"tabWidth": 2,
"trailingComma": "all",
"plugins": [
"prettier-plugin-tailwindcss"
]
}

````

---

## package.json

```json
{
"scripts": {
"format": "prettier --write."

}
}
````

Execution format:

``bash
npm execution format

```

---

# ESLint plugin

``bash
npm install -D eslint-plugin-import eslint-plugin-unused-imports
```

---

# husky

Install:

``bash
npm install -D husky

```

Enable:

``bash
npx husky init
```

Create file:

````
husky/precommit
```

Content:

``bash
npm execution lint
npm execution format
```

---

# linter

Install:

``bash
npm install -D lint-staged
```

``bash
npx linter
```

---

#commit

Install:

``bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

File:

"commitlint.config.js".

js
module.exports = {
expands: ["@commitlint/config-conventional"],
};
```

---

# Font

- Persian font added to the project.

- Font used globally in the project.

---

# Status

✅ Base packages installed

✅ Tailwind configured

✅ Prettier configured

✅ ESLint plugins installed

✅ Husky configured

✅ lint-staged installed

✅ Commitlint configured

✅ Persian font added
````
