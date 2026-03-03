# AGENTS.md - Developer Guide for rsts-ui

## Project Overview

This is a Vue 3 + TypeScript + Vite project with Element Plus UI framework. It uses Pinia for state management and Vue Router for routing.

## Build/Lint/Test Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 9999)
npm run dev

# Type-check, compile and minify for production
npm run build

# Type-check only (vue-tsc)
npm run type-check

# Lint with ESLint (auto-fix)
npm run lint

# Format code with Prettier
npm run format

# Compress images
npm run compress-images
```

**Note:** No test framework is currently configured. Do not add tests unless explicitly requested.

## Code Style Guidelines

### Formatting

- **Indent:** 2 spaces (enforced by `.editorconfig`)
- **Line length:** Max 100 characters
- **Quotes:** Single quotes (configured in `.prettierrc.json`)
- **Semicolons:** No semicolons
- **Line endings:** LF (Unix)
- **File encoding:** UTF-8
- **Trailing whitespace:** Trimmed
- **Final newline:** Required

### Naming Conventions

- **Vue Components:** PascalCase (e.g., `MyPagination.vue`, `HomeView.vue`)
- **TypeScript files:** camelCase (e.g., `userApi.ts`, `token.ts`)
- **Directories:** camelCase (e.g., `views/home`, `stores/token`)
- **Variables/functions:** camelCase
- **Interfaces/Types:** PascalCase (e.g., `BaseDTO`, `PageResult`)
- **Constants:** camelCase with uppercase values where appropriate

### TypeScript Guidelines

- Use explicit types rather than `any` when possible
- Use `.d.ts` files for type declarations (see `src/types/`)
- Use Vue 3 composition API with `<script setup lang="ts">`
- Path alias `@` maps to `src/` (use instead of relative imports)

### Vue 3 Composition API

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const count = ref(0)

const doubled = computed(() => count.value * 2)
</script>

<template>
  <div>{{ doubled }}</div>
</template>
```

### Import Order

1. Vue/Vue Router/Pinia imports
2. Third-party library imports
3. Internal imports (from `@/` alias)
4. Type imports

### Error Handling

- Use `ElMessage` from Element Plus for user notifications
- Use `Promise.reject()` with proper error types for API errors
- Validate response status using the `validateStatus` utility

### API/Request Patterns

- Use the centralized `http` wrapper in `src/utils/request.ts`
- API files go in `src/apis/` with camelCase naming
- Use Pinia stores for state management (in `src/stores/`)
- Store persistence uses `pinia-plugin-persistedstate`

### Directory Structure

```
src/
├── apis/          # API definitions
├── assets/        # Static assets (images, styles)
├── components/    # Reusable Vue components
├── constants/     # App constants
├── router/        # Vue Router configuration
├── stores/        # Pinia stores
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── views/         # Page-level components
```

### Element Plus Usage

- Use Element Plus components with `El` prefix (e.g., `ElButton`, `ElTable`)
- Icons from `@element-plus/icons-vue` and `@fortawesome`
- Component auto-imports are configured

### Linting

- Run `npm run lint` before committing
- ESLint uses `eslint.config.ts` with Vue 3 and TypeScript configs
- Prettier formatting is integrated with ESLint

### Commit Guidelines

- Do not commit without running lint first
- Do not commit generated files in `dist/`
- Do not commit `node_modules/`

### Working with this Project

1. Create new components in appropriate directories under `src/components/`
2. Create new views under `src/views/`
3. Add API methods in `src/apis/`
4. Use Pinia stores in `src/stores/` for shared state
5. Define types in `src/types/` for API responses and data models

### Common Issues

- If type errors occur, run `npm run type-check` to see details
- The dev server runs on port 9999 (configured in `vite.config.ts`)
- API proxy is configured for `/rsts-api` to `http://206.245.134.237:18080`
