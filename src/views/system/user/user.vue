<template>
  <div class="w100 h100">
    <div class="w100 pad10 pl0" style="background-color: #fff; border-radius: 0.3rem">
      <AButton
        class="mr10"
        style="margin-right: 0; border: 0px none"
        type="primary"
        @click="() => openDialog()"
        >新增</AButton
      >
      <ADivider type="vertical" style="margin: 0" />
      <AButton type="danger" @click="removeList">删除</AButton>
      <div style="margin-bottom: 0.5rem; float: right">
        <a-input
          style="width: 200px; height: 30px; font-size: 14px; border: 1px #1890ff solid"
        ></a-input>
        <a-button
          style="
            width: 62px;
            height: 30px;
            color: rgb(255, 255, 255);
            background-color: rgb(24, 144, 255);
            font-size: 14px;
            border: #fff;
          "
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
          <AButton type="link" @click="() => openDialog(record)" style="color: red"
            >停用</AButton
          >
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
      <UserEdit ref="editRef" @reload="query" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, unref } from "vue";
import { UserService } from "@/api/services/user";
import { FindUserReply } from "@/api/protobuf/user_pb";
import { PageResult } from "@/api/protobuf/infrastructure_pb";
import UserEdit from "@/views/system/user/user-edit.vue";
import { useMessage } from "@/hooks/useMessage";
//import UserTree from "@/components/com-Tree/TreePanel.vue";

export default defineComponent({
  name: "user",
  components: { UserEdit },
  setup() {
    const editRef = ref<{ openDialog: (userInfo?: FindUserReply.AsObject) => void }>();
    const tableRef = ref<{ openDialog: (userInfo?: FindUserReply.AsObject) => void }>();
    // reactive是可追踪变化的对象
    const pagination = reactive({
      current: 1,
      pageSize: 10,
      total: 10,
      showTotal: (total: number, range: number[]) =>
        `第${range[0]}~${range[1]}条，共${total}条`,
    });
    const dataSource = ref<FindUserReply.AsObject[]>([]);
    const selectedUsers = ref<FindUserReply.AsObject[]>([]);
    const columns = [
      { title: "姓名", dataIndex: "name" },
      { title: "职位", dataIndex: "UsersName" },
      { title: "电话", dataIndex: "description" },
      { title: "邮箱", dataIndex: "state" },
      { title: "操作", slots: { customRender: "action" } },
    ];

    const { createConfirmDel, createMessage } = useMessage();
    const rowSelection = {
      onChange: (selectedRowKeys: string[], selectedRows: FindUserReply.AsObject[]) => {
        selectedUsers.value = selectedRows;
      },
    };

    // 查询
    async function query() {
      var reply = await UserService.query({
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
    }

    // 删除
    async function remove(User: FindUserReply.AsObject) {
      const res = await createConfirmDel(`确认删除角色${User.name}么`, "删除角色");
      if (res) {
        const res = await UserService.remove({
          idsList: [User.id],
        });
        console.log(res);
        createMessage.success(`删除角色${User.name}成功`);
        await query();
      }
    }
    async function removeList() {
      const User = unref(selectedUsers).map((i) => i.name);
      const ids = unref(selectedUsers).map((i) => i.id);
      const confirm = await createConfirmDel(
        `确认删除角色${User.join(",")}么`,
        "删除角色"
      );
      if (confirm) {
        const res = await UserService.remove({
          idsList: ids,
        });
        console.log(res);
        createMessage.success(`删除角色${User.join(",")}成功！`);
      }
    }

    // 打开新增修改弹框
    function openDialog(userInfo?: FindUserReply.AsObject) {
      if (editRef.value) {
        editRef.value.openDialog(userInfo);
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
