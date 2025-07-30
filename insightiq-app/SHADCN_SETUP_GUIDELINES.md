# shadcn/ui Setup Guidelines

## Overview
This document outlines the setup and configuration of shadcn/ui in the InsightIQ React application.

## Installation Summary

### 1. Dependencies Installed
```bash
npm install class-variance-authority clsx tailwind-merge
```

### 2. Configuration Files Created/Modified

#### `vite.config.js`
- Added path alias configuration for `@` pointing to `./src`
- Import path resolver for absolute imports

#### `jsconfig.json`
- Created with baseUrl and path mapping for `@/*` to `./src/*`

#### `components.json`
- shadcn/ui configuration file
- Style: New York (Recommended)
- Base color: Neutral
- CSS variables enabled
- No prefix used

#### `tailwind.config.js`
- Added dark mode support with class strategy
- Extended theme with shadcn/ui color system
- Added border radius variables
- Color palette using HSL CSS variables

#### `src/index.css`
- Added CSS custom properties for light/dark themes
- Base layer styles for consistent theming

#### `src/lib/utils.js`
- Utility function `cn()` for merging Tailwind classes
- Uses `clsx` and `tailwind-merge` for optimal class handling

## Usage Guidelines

### Adding Components
```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### Importing Components
```javascript
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
```

### Using the cn() Utility
```javascript
import { cn } from "@/lib/utils"

// Merge classes conditionally
const className = cn(
  "base-classes",
  condition && "conditional-classes",
  props.className
)
```

### Dark Mode Support
- Dark mode is configured with class strategy
- Toggle dark mode by adding/removing `dark` class to document root
- All components automatically support dark mode

### File Structure
```
src/
├── components/
│   └── ui/           # shadcn/ui components go here
├── lib/
│   └── utils.js      # Utility functions
└── ...
```

## Best Practices

1. **Always use the `cn()` utility** when combining Tailwind classes
2. **Import from `@/` paths** for clean imports
3. **Customize components** by modifying files in `src/components/ui/`
4. **Follow naming conventions** established by shadcn/ui
5. **Use CSS variables** for consistent theming across components

## Troubleshooting

### CSS Warnings
- CSS warnings about `@tailwind` and `@apply` directives are normal in IDEs
- These are resolved during the build process

### Import Issues
- Ensure `jsconfig.json` is properly configured
- Verify Vite alias configuration in `vite.config.js`

### Component Not Found
- Run `npx shadcn@latest add [component]` to install missing components
- Check component name spelling and import path

## Available Components
Visit [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components) for a full list of available components.

## Next Steps
1. Install specific components as needed: `npx shadcn@latest add button card input`
2. Replace existing UI components with shadcn/ui equivalents
3. Implement dark mode toggle if required
4. Customize theme colors in `tailwind.config.js` if needed