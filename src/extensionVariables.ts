
import { Menu } from './menu';


export interface TreeMenu {
  path?: string;
  icon?: string;
  divider?: boolean;
  children?: Array<TreeMenu>;
  name: string;
}
/**
  * Namespace for common variables used throughout the extension.They must be initialized in the activate() method of extension.ts
  */
export namespace ext {
  export let Menu: Menu;
}
