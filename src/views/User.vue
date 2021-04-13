<template>
  <a-button type="primary" @click="query">Query</a-button>
 
      <ATable
      ref="tableRef"
      rowKey="id"
      :columns="columns"
      :data-source="dataSource"
      row-key="id"
      :pagination="pagination"
      :rowSelection="rowSelection"
    >
       <template v-slot:operation="{ record }">
        <AButton type="link"  style="color:red">停用</AButton>
        <ADivider type="vertical" style="margin: 0" />
        <AButton type="link" >编辑</AButton>
        <ADivider type="vertical" style="margin: 0" />
        <AButton type="link" @click="() => remove(record.id)">删除</AButton>
       
      </template>
    </ATable>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { UserService, FindUserReply } from "@/api/services/Authentication/user";
import { IdentifyArray } from "@/api/protobuf/infrastructure_pb";

export default defineComponent({
  setup() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
      },
      {
        title: "用户名",
        dataIndex: "name",
      },
      {
        title: "姓名",
        dataIndex: "legalName",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "状态",
        dataIndex: "state",
        slots: { customRender: "switch" },
      },
      {
        title: "操作",
        dataIndex: "operation",
        slots: { customRender: "operation" },
      },
    ];
    const dataSource: Ref<FindUserReply[]> = ref([]);

    const query = async () => {
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
      dataSource.value = reply.itemsList;
    };
    const remove = async (ids:IdentifyArray) => {
      alert(ids)
      console.log(ids)
      //var reply = await UserService.remove(ids.toObject());
    };
    return {
      query,
      columns,
      dataSource,
      remove,
    };
  },
  components: {},
});
</script>
