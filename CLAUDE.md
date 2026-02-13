# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Simple Design System (SDS) — a React + TypeScript design system with Figma Code Connect integration. Built on React Aria Components for accessibility, styled with CSS custom properties (design tokens), and documented via Storybook.

## Commands

```bash
npm run app:dev          # Dev server at localhost:8000
npm run app:build        # TypeScript check + Vite build
npm run app:lint         # ESLint (strict: max-warnings 0)
npm run storybook        # Storybook at localhost:6006
npm run storybook:build  # Build Storybook to dist/storybook

# Figma sync (requires FIGMA_ACCESS_TOKEN and FIGMA_FILE_KEY in .env)
npm run script:tokens:rest  # Sync design tokens from Figma REST API
npm run script:icons:rest   # Sync icons from Figma REST API
npm run script:tokens       # Generate tokens from local JSON (skip API)
npm run script:icons        # Generate icons from local JSON (skip API)
```

No test runner is configured. Storybook interaction tests via `@storybook/test` are the primary testing mechanism.

## Architecture

```
src/
├── ui/                    # Component library
│   ├── primitives/        # Atomic components (Button, Input, Text, etc.)
│   ├── compositions/      # Complex multi-component patterns (DashboardBarChart, Cards, etc.)
│   ├── layout/            # Structural components (Flex, Section)
│   ├── hooks/             # UI hooks (useMediaQuery)
│   ├── icons/             # Auto-generated SVG icon components
│   └── utils/             # Utility functions
├── data/                  # Data layer (separate from UI)
│   ├── contexts/          # React Context definitions
│   ├── providers/         # Context providers (Auth, Pricing, Products, AllProviders)
│   ├── services/          # Business logic and API calls
│   ├── hooks/             # Data hooks (useAuth, usePricing, useProducts)
│   └── types/             # TypeScript type definitions
├── figma/                 # Figma Code Connect mapping files (*.figma.tsx)
├── stories/               # Storybook stories organized by component category
├── theme.css              # Design tokens as CSS custom properties (auto-generated from Figma)
├── responsive.css         # Responsive grid utilities
└── reset.css              # CSS reset
scripts/                   # Figma sync scripts (tokens, icons, dev-resources)
```

## Critical Conventions

### Import Aliases (configured in vite.config.ts, tsconfig.json, .storybook/main.tsx)

Always use path aliases — never relative paths to `src/ui/*` or `src/data/*`:

```tsx
import { Button } from "primitives";
import { Flex, Section } from "layout";
import { useMediaQuery } from "hooks";
import { IconChevronLeft } from "icons";
import { useAuth, AllProviders } from "data";
import { Header, Footer } from "compositions";
```

### Design Tokens

All styling values come from CSS custom properties in `src/theme.css` with `--sds-*` prefix. Never hardcode colors, spacing, or typography.

- Colors: `var(--sds-color-*)`
- Spacing: `var(--sds-size-space-*)` (100-1600) — numeric values map directly to component props (e.g., `<Section padding="400">`)
- Typography: `var(--sds-typography-*)`, `var(--sds-font-*)`
- Border radius: `var(--sds-size-radius-*)`
- Shadows: `var(--sds-effects-shadows-*)`

### Layout Rules

Use `Flex` and `Section` components for all layout — never write custom CSS for positioning. The `Flex` component supports responsive `type` prop (`full`, `half`, `third`, `quarter`) and responsive direction via `useMediaQuery()`.

### Component Hierarchy

**Primitives** (atomic) → **Compositions** (complex patterns combining primitives). Prefer using existing SDS components over creating new ones. Components are built on `react-aria-components` internally, but never import from `@react-aria` or `@react-stately` directly.

### Figma Code Connect

Each UI component can have a corresponding `*.figma.tsx` file in `src/figma/` that maps the Figma component to React code using `@figma/code-connect`. Config is in `figma.config.json`. When Figma data includes `hidden={true}`, ignore that node. The `codeDependencies` field in Figma responses identifies which SDS components to use.

### Responsive Breakpoints

Via `useMediaQuery()` hook: Mobile (<600px), Tablet (600-1023px), Desktop (>=1024px).

## Figma Annotations

When working with Figma MCP tool responses, `data-content-annotations` and `data-interaction-annotations` attributes contain design intent and behavior requirements. Always read these carefully before implementing.
