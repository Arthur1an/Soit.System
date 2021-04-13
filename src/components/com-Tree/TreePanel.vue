<template>
  <div :bordered="false" :bodyStyle="{ padding: 0 }">
    
    <a-row type="flex" justify="space-between" align="middle">
      <a-col :span="20">
        <a-radio-group :size="size" @change="onCheckedBtnGroupChange" v-model="allChecked" buttonStyle="solid">
          <a-radio-button value="2" :disabled="true" style="display:none">局部选中</a-radio-button>
          <a-radio-button value="1">全选</a-radio-button>
          <a-radio-button value="0">全不选</a-radio-button> 
        </a-radio-group>
        <a-divider type="vertical" />
        <a-radio-group :size="size" @change="onExpandedBtnGroupChange" v-model="allExpanded" buttonStyle="solid">
          <a-radio-button value="2" :disabled="true" style="display:none">局部展开</a-radio-button>
          <a-radio-button value="1">展开所有</a-radio-button>
          <a-radio-button value="0">折叠所有</a-radio-button>
        </a-radio-group>
           <a-divider type="vertical" />
        <a-radio-group :size="size" @change="onExpandedBtnGroupChange" v-model="allExpanded" buttonStyle="solid">
           <a-button @click="appendNodeByKey(getTree.getSelectedKeys())" class="mr-2"> 添加根节点 </a-button>
           <a-button @click="deleteNodeByKey(getTree.getSelectedKeys())" class="mr-2"> 删除parent3节点 </a-button>
           <a-button @click="updateNodeByKey(getTree.getSelectedKeys())" class="mr-2"> 更新parent2节点 </a-button>
        </a-radio-group>
  
      </a-col>

      <a-col>
        <a-button type="primary" :size="size" href="javascript:;" @click="callBackData">
          <span>提交改动</span>
        </a-button>
      </a-col>
    </a-row>
    <a-tree
      :expandedKeys="innerExpandedKeys"
      :treeData="treeData"
      checkable
      :checkedKeys="innerCheckedKeys"
      @expand="onExpand"
      @check="onCheck"
    />
  </div>
</template>
<script>
import { getTreeKey} from './utils';
export default {
  props: {
    size: {
      // 控件规格
      type: String,
      default: 'small'
    },
    checkedKeys: {
      // 传递选中的key
      type: Array,
      default: function() {
        return [];
      }
    },
    expandedKeys: {
      // 传递需要展开的key
      type: Array,
      default: function() {
        return [];
      }
    },
    treeData: {
      type: Array,
      default: function() {
        return [
          {
            title: '0-0',
            key: '0-0',
            children: [
              {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                  { title: '0-0-0-0', key: '0-0-0-0' },
                  { title: '0-0-0-1', key: '0-0-0-1' },
                  { title: '0-0-0-2', key: '0-0-0-2' }
                ]
              },
              {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                  { title: '0-0-1-0', key: '0-0-1-0' },
                  { title: '0-0-1-1', key: '0-0-1-1' },
                  { title: '0-0-1-2', key: '0-0-1-2' }
                ]
              },
              {
                title: '0-0-2',
                key: '0-0-2'
              }
            ]
          },
          {
            title: '0-1',
            key: '0-1',
            children: [
              { title: '0-1-0-0', key: '0-1-0-0' },
              { title: '0-1-0-1', key: '0-1-0-1' },
              { title: '0-1-0-2', key: '0-1-0-2' }
            ]
          },
          {
            title: '0-2',
            key: '0-2'
          }
        ];
      }
    }
  },
  data() {
    return {
      allChecked: '', // 全选按钮组
      allExpanded: '', // 全部展开按钮组
      innerCheckedKeys: [], // 选中的值
      innerExpandedKeys: [] //  展开的值
    };
  },
  watch: {
    checkedKeys: {
      // 复制props
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue) {
          if (newValue.length === this.getTreeAllKey.length) {
            this.allChecked = '1';
          } else if (newValue.length === 0) {
            this.allChecked = '0';
          } else {
            this.allChecked = '2';
          }
          this.innerCheckedKeys = newValue;
        }
      }
    },
    expandedKeys: {
      // 复制props
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue) {
          if (newValue.length === this.getTreeAllGroupKey.length) {
            this.allExpanded = '1';
          } else if (newValue.length === 0) {
            this.allExpanded = '0';
          } else {
            this.allExpanded = '2';
          }
          this.innerExpandedKeys = newValue;
        }
      }
    }
  },
  computed: {
    switchDataSource() {
      // 勾选数据源
      return [
        {
          type: 'ALL_CHECKED',
          labelText: this.isAllChecked ? '全不选' : '全选',
          checked: this.isAllChecked
        },
        {
          type: 'ALL_EXPAND',
          labelText: this.isAllExpanded ? '折叠所有' : '展开所有',
          checked: this.isAllExpanded
        }
      ];
    },
    cacheEmitValue() {
      // 缓存响应的值
      return {
        checkedKeys: this.innerCheckedKeys,
        expandedKeys: this.innerExpandedKeys
      };
    },
    getTreeAllKey() {
      // 获取树的所有key
      return getTreeKey(this.treeData);
    },
    getTreeAllGroupKey() {
      // 获取树的所有组key
      return getTreeKey(this.treeData, true);
    },
    isAllChecked() {
      // 是否全部勾选
      return this.innerCheckedKeys.length === this.getTreeAllKey.length;
    },
    isAllExpanded() {
      // 是否全部展开
      return this.innerExpandedKeys.length === this.getTreeAllGroupKey.length;
    }
  },

  methods: {
    onExpandedBtnGroupChange({ target: { value: expanedBtnGroupValue } }) {
      console.log('expanedBtnGroupValue: ', expanedBtnGroupValue);
      switch (expanedBtnGroupValue) {
        case '0':
          this.innerExpandedKeys = [];
          break;
        case '1':
          this.innerExpandedKeys = this.getTreeAllGroupKey;
          break;
        default:
          break;
      }
    },
    onCheckedBtnGroupChange({ target: { value: checkedBtnGroupValue } }) {
      console.log('checkedBtnGroupValue: ', checkedBtnGroupValue);
      switch (checkedBtnGroupValue) {
        case '0':
          this.innerCheckedKeys = [];
          break;
        case '1':
          this.innerCheckedKeys = this.getTreeAllKey;
          break;
        default:
          break;
      }
    },
    callBackData(emit) {
      // 响应改动的值
      if (emit) {
        this.$emit('change', this.cacheEmitValue);
      }
      return false;
    },
    onExpand(expandedKeys) {
      if (expandedKeys.length === this.getTreeAllGroupKey.length) {
        this.allExpanded = '1';
      } else {
        this.allExpanded = '2';
      }
      this.innerExpandedKeys = expandedKeys;
    },
    onCheck(checkedKeys) {
      if (checkedKeys.length === this.getTreeAllKey.length) {
        this.allChecked = '1';
      } else {
        this.allChecked = '2';
      }
      this.innerCheckedKeys = checkedKeys;
      
    }
  }
};
</script>
