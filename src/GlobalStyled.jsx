import { createGlobalStyle } from 'styled-components'
import colors from './utils/colors'

export const GlobalStyled = createGlobalStyle`
  :root {
    --color-bg: ${colors.terminal.bg};
    --color-window: ${colors.terminal.window};
    --color-window-bar: ${colors.terminal.windowBar};
    --color-border: ${colors.terminal.border};
    --color-prompt: ${colors.terminal.prompt};
    --color-command: ${colors.terminal.command};
    --color-left-border: ${colors.terminal.leftBorder};
    --color-dots: ${colors.terminal.dots};
    --color-text: ${colors.terminal.text};
    --color-text-dim: ${colors.terminal.textDim};
    --color-name: ${colors.terminal.name};
    --color-subtitle: ${colors.terminal.subtitle};
    --color-label: ${colors.terminal.label};
    --color-link: ${colors.terminal.link};
    --color-chevron: ${colors.terminal.chevron};
    --color-button-border: ${colors.terminal.buttonBorder};
    --color-button-active-bg: ${colors.terminal.buttonActiveBg};
    --color-button-active-text: ${colors.terminal.buttonActiveText};
    --color-dot-red: ${colors.terminal.dot.red};
    --color-dot-yellow: ${colors.terminal.dot.yellow};
    --color-dot-green: ${colors.terminal.dot.green};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--color-bg);
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    color: var(--color-text);
    min-height: 100vh;
  }
`
