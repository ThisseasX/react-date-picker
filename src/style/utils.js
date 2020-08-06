import { lineHeights } from './theme';

const fontStyle = (fontSize, color = 'black', fontWeight = 'normal') => ({
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: `${fontSize}px`,
  lineHeight: lineHeights[fontSize],
  color,
  fontWeight,
});

export { fontStyle };
