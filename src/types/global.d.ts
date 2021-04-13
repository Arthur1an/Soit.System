declare interface Fn<T = any> {
  (...arg: T[]): T;
}

declare type Nullable<T> = T | null;

declare interface IObj<T = any> {
  [key: string]: T;
  [key: number]: T;
}

declare type EmitType = (event: string, ...args: any[]) => void;

declare interface IRule {
  [key: string]: {
    message: string;
    required?: boolean;
    [attr: string]: any;
  }[];
}
declare interface IFormRef<T = IObj> {
  validate: () => Promise<T>;
  resetFields: () => void;
}

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}

declare type ComponentRef<
  T extends HTMLElement = HTMLDivElement
> = ComponentElRef<T> | null;

declare type Recordable<T extends any = any> = Record<string, T>;

declare interface IPage {
  current: number;
  pageSize: number;
  total: number;
  showTotal: (total: number, range: number[]) => string;
}
