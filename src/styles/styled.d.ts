import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      custom1: string;
      custom2: string;
      custom3: string;

      background: string;
      text: string;
    };
  }
}
