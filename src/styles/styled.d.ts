import 'styled-components';
import { themeDark } from './themes/darkmode';

declare module 'styled-components' {
  type Theme = typeof themeDark;
  export interface DefaultTheme extends Theme {}
}