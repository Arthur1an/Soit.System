<template>

  
  <div class="w100 h100">


  <div class="w100 pad10 pl0" style="background-color:#fff;border-radius:0.3rem;">
  <RoleTree
          :treeData="treeData1"
          :expandedKeys="treeExpandedKeys"
          :checkedKeys="treeCheckedKeys"
          @change="onTreePanelChange"
  />

      <AButton class="mr10"  style="margin-right: 0;border: 0px none;">角色</AButton>
      
      <AButton class="mr10" type="primary" @click="() => openDialog()">新增</AButton>
   
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
  import { RoleService } from "@/api/services/Authentication/role";
  import { FindRoleReply } from "@/api/protobuf/Authentication/role_pb";
  import { PageResult } from "@/api/protobuf/infrastructure_pb";
  import AccountEdit from "@/views/system/role/role-edit.vue";
  import { useMessage } from "@/hooks/useMessage";
  import RoleTree from "@/components/com-Tree/TreePanel.vue";

  export default defineComponent({
    name: "role",
    components: { AccountEdit,RoleTree },
    setup() {
 
      const editRef = ref<{ openDialog: (userInfo?: FindRoleReply.AsObject) => void }>();
      const tableRef = ref<{ openDialog: (roleInfo?: FindRoleReply.AsObject) => void }>();
        // reactive是可追踪变化的对象
      const pagination = reactive({
        current: 1,
        pageSize: 10,
        total: 10,
        showTotal: (total: number, range: number[]) =>
          `第${range[0]}~${range[1]}条，共${total}条`,
      });
      const dataSource = ref<FindRoleReply.AsObject[]>([]);
      const selectedRoles = ref<FindRoleReply.AsObject[]>([]);
      const columns = [
        { title: "角色名称", dataIndex: "name" },
        { title: "用户列表", dataIndex: "RolesName" },
        { title: "角色标签", dataIndex: "description" },
        { title: "状态", dataIndex: "state" },
        { title: "操作", slots: { customRender: "action" } },
      ];
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
      const { createConfirmDel, createMessage } = useMessage();
      const rowSelection = {
        onChange: (selectedRowKeys: string[], selectedRows: FindRoleReply.AsObject[]) => {
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
      
      // 删除
      async function remove(Role: FindRoleReply.AsObject) {
        const res = await createConfirmDel(`确认删除角色${Role.name}么`, "删除角色");
        if (res) {
          const res = await removeRole([Role.id]);
          console.log(res);
          createMessage.success(`删除角色${Role.name}成功`);
          await query();
        }
      }
      async function removeList() {
        const Role = unref(selectedRoles).map((i) => i.name);
        const ids = unref(selectedRoles).map((i) => i.id);
        const confirm = await createConfirmDel(
          `确认删除角色${Role.join(",")}么`,
          "删除角色"
        );
        if (confirm) {
          const res = await removeRole(ids);
          console.log(res);
          createMessage.success(`删除角色${Role.join(",")}成功！`);
        }
      }
      */
      // 打开新增修改弹框
      function openDialog(RoleInfo?: FindRoleReply.AsObject) {
        if (editRef.value) {
          editRef.value.openDialog(RoleInfo);
        }
      }
      // 初始加载
      onMounted(() => {
        //query();
      });
      return {
        pagination,
        dataSource,
        columns,
        editRef,
        //query,
        openDialog,
        rowSelection,
        tableRef,
        //remove,
        //removeList,
        treeData1
      };
    },
  });
</script>

<style scoped></style>
