<template>

  
  <div class="w100 h100">


  <div class="w100 pad10 pl0" style="background-color:#fff;border-radius:0.3rem;">
  

    <AButton class="mr10"  style="margin-right: 0;border: 0px none;" type="primary" @click="() => openDialog()">新增</AButton>
       <ADivider type="vertical" style="margin: 0" />
      <AButton type="danger" @click="removeList">删除</AButton>
        <div style=" margin-bottom: 0.5rem ; float:right">
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
      <template v-slot:action="{ record }">
        <AButton type="link" @click="() => openDialog(record)" style="color:red">停用</AButton>
        <ADivider type="vertical" style="margin: 0" />
        <AButton type="link" @click="() => openDialog(record)">编辑</AButton>
        <ADivider type="vertical" style="margin: 0" />
        <AButton type="link" @click="() => remove(record)">删除</AButton>
        <ADivider type="vertical" style="margin: 0" />
        <AButton type="link" @click="() => remove(record)">分配用户</AButton>
        <ADivider type="vertical" style="margin: 0" />
        <AButton type="link" @click="() => remove(record)">分配页面</AButton>
      </template>
    </ATable>
    <AccountEdit ref="editRef" @reload="query" />
  </div>
    </div>
</template>


<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, unref } from "vue";
  import { EquipmentService } from "@/api/services/equipment";
  import { FindEquipmentReply } from "@/api/protobuf/equipment_pb";
  import EquipmentEdit from "@/views/system/equipment/equipment-edit.vue";
  import { useMessage } from "@/hooks/useMessage";
  //import EquipmentTree from "@/components/com-Tree/TreePanel.vue";

  export default defineComponent({
    name: "equipment",
    components: { EquipmentEdit },
    setup() {
 
      const editRef = ref<{ openDialog: (equipmentInfo?: FindEquipmentReply.AsObject) => void }>();
      const tableRef = ref<{ openDialog: (equipmentInfo?: FindEquipmentReply.AsObject) => void }>();
        // reactive是可追踪变化的对象
      const pagination = reactive({
        current: 1,
        pageSize: 10,
        total: 10,
        showTotal: (total: number, range: number[]) =>
          `第${range[0]}~${range[1]}条，共${total}条`,
      });
      const dataSource = ref<FindEquipmentReply.AsObject[]>([]);
      const selectedEquipments = ref<FindEquipmentReply.AsObject[]>([]);
      const columns = [
        { title: "类型", dataIndex: "type" },
        { title: "数量", dataIndex: "number" },
        { title: "品牌", dataIndex: "brand" },
        { title: "型号", dataIndex: "model_name" },
        { title: "价格", dataIndex: "memory" },
        { title: "购买日期", dataIndex: "Purchase_date" },
        { title: "过保日期", dataIndex: "Eliminate_date" },
        { title: "状态", dataIndex: "state" },
        { title: "使用人", dataIndex: "user_id" },
        { title: "操作", slots: { customRender: "action" } },
      ];
      /*
        <EquipmentTree
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
          selectedEquipments.value = selectedRows;
        },
      };
        // 查询
     async function query() {
      var reply = await EquipmentService.query({
        contains: "",
        orderRequest: {
          orderBy: "",
          descending: true,
        },
        pageRequest: {
          page: 1,
          pageSize: 10,
        },
      });
      dataSource.value = reply.itemsList;
      console.log(reply.itemsList)
    }
      
      // 删除
      async function remove(equipment: FindEquipmentReply.AsObject) {
        const res = await createConfirmDel(`确认删除角色${equipment.modelName}么`, "删除角色");
        if (res) {
          const res = await EquipmentService.remove({
            idsList:[equipment.id]
          });
          console.log(res);
          createMessage.success(`删除角色${equipment.modelName}成功`);
          await query();
        }
      }
      async function removeList() {
        const equipment = unref(selectedEquipments).map((i) => i.modelName);
        const ids = unref(selectedEquipments).map((i) => i.id);
        const confirm = await createConfirmDel(
          `确认删除设备${equipment.join(",")}么`,
          "删除角色"
        );
        if (confirm) {
          const res = await EquipmentService.remove({
            idsList:ids
          });
          console.log(res);
          createMessage.success(`删除角色${equipment.join(",")}成功！`);
        }
      }
      
      // 打开新增修改弹框
      function openDialog(EquipmentInfo?: FindEquipmentReply.AsObject) {
        if (editRef.value) {
          editRef.value.openDialog(EquipmentInfo);
        }
      }
      // 初始加载
      onMounted(() => {
        query();
      });
      return {
        pagination,
        dataSource,
        columns,
        editRef,
        query,
        openDialog,
        rowSelection,
        tableRef,
        remove,
        removeList,
        //treeData1
      };
    },
  });
</script>

<style scoped></style>
