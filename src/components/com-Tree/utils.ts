/**
 * @param arr 数组对象
 * @param parent 是否只获取父一层的属性
 * @description 递归获取需要的数据
 */
 export function getTreeKey(arr: any, parent = false) {
    const dataList: { key: any; title: any; }[] = [];
    const generateList = (data: string | any[]) => {
      for (let i = 0; i < data.length; i++) {
        const { key, title, children } = data[i];
        if (!parent) dataList.push({ key, title });
        if (Array.isArray(children) && children.length > 0) {
          if (parent) dataList.push({ key, title });
          generateList(children);
        }
      }
    };
    generateList(arr);
    return dataList.map(item => item.key);
  }

  import { ITree } from './Tree-model'
  /*
  import type { TreeDataItem } from 'ant-design-vue/es/tree/Tree';

  const treeArr: ITree[] = [];
  export function getTreeFromRole( treeList: ITree[]) {

  treeList.forEach((i) => {
      const temp: ITree = {
        title: i.title,
        key: i.key,
      };
      treeArr.push(temp);
      if (i.children) {
        getTreeFromRole(i.children);
      }
  });
}
export type Keys = (string | number)[];
export type CheckKeys =
  | (string | number)[]
  | { checked: (string | number)[]; halfChecked: (string | number)[] };
export interface TreeActionType {
  checkAll: (checkAll: boolean) => void;
  expandAll: (expandAll: boolean) => void;
  setExpandedKeys: (keys: Keys) => void;
  getExpandedKeys: () => Keys;
  setSelectedKeys: (keys: Keys) => void;
  getSelectedKeys: () => Keys;
  setCheckedKeys: (keys: CheckKeys) => void;
  getCheckedKeys: () => CheckKeys;
  filterByLevel: (level: number) => void;
  insertNodeByKey: (opt: InsertNodeParams) => void;
  deleteNodeByKey: (key: string) => void;
  updateNodeByKey: (key: string, node: Omit<TreeDataItem, 'key'>) => void;
}
export interface InsertNodeParams {
  parentKey: string | null;
  node: TreeDataItem;
  list?: TreeDataItem[];
  push?: 'push' | 'unshift';
}
*/

  