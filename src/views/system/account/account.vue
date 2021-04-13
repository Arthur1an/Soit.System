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
       
      </template>
    </ATable>
    <AccountEdit ref="editRef" @reload="query" />
  </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, unref,Ref } from "vue";
  import { AccountService } from "@/api/services/account";
  import { FindAccountReply } from "@/api/protobuf/account_pb";
  import AccountEdit from "@/views/system/account/account-edit.vue";
  import { useMessage } from "@/hooks/useMessage";


  export default defineComponent({
    name: "account",
    components: { AccountEdit },
    setup() {
        const accountInfo= reactive({
        account: "",
        
      });
      // ref用于可追踪简单对象，也可以用作组件实例
      const editRef = ref<{ openDialog: (accountInfo?: FindAccountReply.AsObject) => void }>();
      const tableRef = ref<{ openDialog: (accountInfo?: FindAccountReply.AsObject) => void }>();
    
      // reactive是可追踪变化的对象
      const pagination = reactive({
        current: 1,
        pageSize: 10,
        total: 10,
        showTotal: (total: number, range: number[]) =>
          `第${range[0]}~${range[1]}条，共${total}条`,
      });
       //const dataSource: Ref<FindAccountReply[]> = ref([]);
      const dataSource = ref<FindAccountReply.AsObject[]>([]);
      const selectedaccounts = ref<FindAccountReply.AsObject[]>([]);
      const columns = [
        { title: "账号", dataIndex: "name" },
        { title: "姓名", dataIndex: "legal_name" },
         { title: "密码", dataIndex: "cipher" },
        { title: "描述", dataIndex: "description" },
        { title: "手机", dataIndex: "mobile" },
        { title: "邮箱", dataIndex: "email" },
        { title: "操作", slots: { customRender: "action" } },
      ];
      const { createConfirmDel, createMessage } = useMessage();
      const rowSelection = {
        onChange: (selectedRowKeys: string[], selectedRows: FindAccountReply.AsObject[]) => {
          selectedaccounts.value = selectedRows;
        },
      };
      // 查询
      async function query() {
        console.log(accountInfo.account)
        var reply = await AccountService.query({
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
      async function remove(account: FindAccountReply.AsObject) {
        const res = await createConfirmDel(`确认删除用户${account.name}么`, "删除用户");
        if (res) {
          const res = await AccountService.remove({
            idsList:[account.id]
          });
          console.log(res);
          createMessage.success(`删除用户${account.name}成功`);
          await query();
        }
      }
      async function removeList() {
        const account = unref(selectedaccounts).map((i) => i.name);
        const ids = unref(selectedaccounts).map((i) => i.id);
        const confirm = await createConfirmDel(
          `确认删除用户${account.join(",")}么`,
          "删除用户"
        );
        if (confirm) {
          const res = await AccountService.remove({
            idsList:ids
          });
          console.log(res);
          createMessage.success(`删除用户${account.join(",")}成功！`);
        }
      }
      
      // 打开新增修改弹框
      function openDialog(accountInfo?: FindAccountReply.AsObject) {
        if (editRef.value) {
          editRef.value.openDialog(accountInfo);
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
      };
    },
  });
</script>

<style scoped></style>
