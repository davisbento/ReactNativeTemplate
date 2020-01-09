/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationScreenConfig, NavigationScreenProp } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack/lib/typescript/types';

declare module 'react' {
  interface NamedExoticComponent<P = {}> {
    navigationOptions: NavigationScreenConfig<NavigationStackOptions, NavigationScreenProp<any>>;
    defaultProps: Partial<P>;
  }
}
