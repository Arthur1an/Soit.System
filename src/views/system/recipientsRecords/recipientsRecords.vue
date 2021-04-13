<template>

  
  <div class="w100 h100">


  <div class="w100 pad10 pl0" style="background-color:#fff;border-radius:0.3rem;">
  

        <div style=" margin-left: 1rem ; ">
         <a-input  style="width: 200px;
                     height: 30px;
                     font-size: 14px;
                    border: 1px #1890ff solid;"></a-input> 
         <a-button
              style="width: 62px;
                     height: 30px;
                     color: rgb(255, 255, 255);
                     background-color: rgb(24, 144, 255);
                     font-size: 14px;
                     border: #fff;"
              @click="query"
              size="large"
              >查询
            </a-button>
        </div>
    <ATable
      ref="tableRef"
      rowKey="id"
      :columns="columns"
      :data-source="dataSource"
      row-key="id"
      :pagination="pagination"
      :rowSelection="rowSelection"
    >
 
    </ATable>
  </div>
    </div>
</template>


<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, unref } from "vue";
  import { FindEquipmentReply } from "@/api/protobuf/equipment_pb";
  import { useMessage } from "@/hooks/useMessage";
  //import RoleTree from "@/components/com-Tree/TreePanel.vue";

  export default defineComponent({
    name: "receipt",
    setup() {
 
      const tableRef = ref<{ openDialog: (roleInfo?: FindEquipmentReply.AsObject) => void }>();
        // reactive是可追踪变化的对象
      const pagination = reactive({
        current: 1,
        pageSize: 10,
        total: 10,
        showTotal: (total: number, range: number[]) =>
          `第${range[0]}~${range[1]}条，共${total}条`,
      });
      const dataSource = ref<FindEquipmentReply.AsObject[]>([]);
      const selectedRoles = ref<FindEquipmentReply.AsObject[]>([]);
      const columns = [
        { title: "员工", dataIndex: "name" },
        { title: "设备", dataIndex: "RolesName" },
        { title: "领用时间", dataIndex: "description" },
        { title: "状态", dataIndex: "state" },
        { title: "操作", slots: { customRender: "action" } },
      ];
      /*
        <RoleTree
          :treeData="treeData1"
          :expandedKeys="treeExpandedKeys"
          :checkedKeys="treeCheckedKeys"
          @change="onTreePanelChange"
  />
      const  treeData1= [
          {
            title: 'x-0',
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
            title: 'x-1',
            key: '0-1',
            children: [
              { title: '0-1-0-0', key: '0-1-0-0' },
              { title: '0-1-0-1', key: '0-1-0-1' },
              { title: '0-1-0-2', key: '0-1-0-2' }
            ]
          },
          {
            title: 'x-2',
            key: '0-2'
          }
        ];
        */
      const { createConfirmDel, createMessage } = useMessage();
      const rowSelection = {
        onChange: (selectedRowKeys: string[], selectedRows: FindEquipmentReply.AsObject[]) => {
          selectedRoles.value = selectedRows;
        },
      };
        // 查询
/*
      async function query() {
        const res = await queryRole(pagination);
        dataSource.value = res.itemsList;
        const { page, pageCount } = res.pageResult as PageResult.AsObject;
        pagination.total = pageCount;
        pagination.current = page;
            console.log(page);
        console.log(unref(dataSource));
      }
      
      */
      // 初始加载
      onMounted(() => {
        //query();
      });
      return {
        pagination,
        dataSource,
        columns,
        //query,
        rowSelection,
        tableRef,
        //treeData1
      };
    },
  });
</script>

<style scoped></style>
