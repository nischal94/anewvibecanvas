# Claude Code Guidelines for anewvibecanvas

## Project Overview
This is a React application built with Vite, featuring modern React patterns and ESLint for code quality.

## Tech Stack
- **React**: 19.2.0
- **Vite**: 7.2.4 (build tool and dev server)
- **ESLint**: Code linting and quality
- **Node.js**: Modern ES modules

## Project Structure
```
src/
├── components/     # Reusable React components
├── assets/        # Static assets (images, fonts, etc.)
├── App.jsx        # Main application component
├── main.jsx       # Application entry point
├── App.css        # Application styles
└── index.css      # Global styles
```

## Code Style Guidelines

### General Principles
- Write clean, readable, and maintainable code
- Follow existing patterns in the codebase
- Prioritize simplicity over complexity
- Keep components small and focused

### JavaScript/React Conventions
- Use `.jsx` extension for React components
- Use functional components with hooks (no class components)
- Use ES6+ syntax (arrow functions, destructuring, etc.)
- Prefer `const` and `let` over `var`
- Use modern ES modules (`import/export`)

### Component Guidelines
- **One component per file** - Each component should have its own file
- **Naming**: Use PascalCase for component names (e.g., `UserProfile.jsx`)
- **Props**: Destructure props in function parameters
- **Hooks**: Follow React Hooks rules (use at top level, call in order)
- **State**: Use `useState` for local state, keep state minimal
- **Effects**: Use `useEffect` for side effects, include proper dependencies

### File Organization
- Place new components in `src/components/`
- Keep related styles close to components (e.g., `Component.css` next to `Component.jsx`)
- Import order: React imports → third-party → local components → styles

### Example Component Structure
```jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ComponentName.css';

function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects here
  }, [dependencies]);

  return (
    <div className="component-name">
      {/* JSX here */}
    </div>
  );
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default ComponentName;
```

## ESLint Compliance
- **Always run ESLint** before committing: `npm run lint`
- Fix all ESLint errors and warnings
- Follow React Hooks ESLint rules
- No unused variables or imports
- Proper dependency arrays in `useEffect`

## CSS/Styling
- Use regular CSS files (not CSS-in-JS or modules)
- Use meaningful class names (kebab-case: `user-profile-card`)
- Keep styles scoped to components
- Use CSS custom properties for theming when appropriate

## Common Tasks

### Adding a New Component
1. Create `src/components/ComponentName.jsx`
2. Create `src/components/ComponentName.css` if needed
3. Import and use in parent component
4. Run `npm run lint` to check for issues

### Making Changes
1. Understand the existing code patterns first
2. Make minimal, focused changes
3. Test in dev mode: `npm run dev`
4. Check ESLint: `npm run lint`
5. Build to verify: `npm run build`

### Bug Fixes
1. Identify the root cause before making changes
2. Fix the issue at its source
3. Verify the fix doesn't break existing functionality
4. Run linting and build checks

## Build and Development

### Available Scripts
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Development Workflow
1. Make changes to source files
2. Hot reload will update the browser automatically
3. Check browser console for errors
4. Run `npm run lint` before committing

## Important Notes

### What to Avoid
- Don't use class components (use functional components)
- Don't bypass ESLint rules without good reason
- Don't create deeply nested component hierarchies
- Don't put business logic in CSS or HTML
- Avoid inline styles (use CSS files)
- Don't commit commented-out code

### Best Practices
- Keep components pure and predictable
- Extract reusable logic into custom hooks
- Use semantic HTML elements
- Handle errors gracefully
- Consider accessibility (use proper ARIA labels when needed)
- Write self-documenting code with clear variable names

## React 19 Specific Features
- Take advantage of React 19 improvements
- Use built-in hooks effectively
- Follow React 19 best practices for concurrent features

## Questions or Clarifications
If implementation details are unclear:
- Check existing components for patterns
- Refer to official React documentation
- Ask for clarification before making assumptions
- Follow the principle of least surprise

---

**Remember**: The goal is to write code that is easy to read, maintain, and extend. When in doubt, favor simplicity and consistency with existing patterns.
