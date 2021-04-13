export interface IMenu {
  path: string;
  realPath?: string;
  meta: {
    name: string;
    icon?: string;
  };
  children?: IMenu[];
}
