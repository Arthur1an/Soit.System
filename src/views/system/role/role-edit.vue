<template>
  <AModal
    :visible="visible"
    centered
    @cancel="cancel"
    @ok="ok"
    width="600"
    :maskClosable="false"
    :title="title"
  >
    <AForm
      :rules="rules"
      ref="formRef"
      class="half-form"
      :model="RoleInfo"
      :labelCol="{ span: 6 }"
      :wrapperCol="{ span: 18 }"
    >
      <AFormItem name="name" label="角色名">
        <a-input :disabled="Boolean(RoleInfo.id)" v-model:value="RoleInfo.name" />
      </AFormItem>
      <AFormItem name="description" label="标签">
        <a-input v-model:value="RoleInfo.description" />
      </AFormItem>
      <AFormItem name="state" label="状态">
        <a-input v-model:value="RoleInfo.state" />
      </AFormItem>
    </AForm>
  </AModal>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, computed, unref } from "vue";
import {
  CreateRoleRequest,
  FindRoleReply,
  UpdateRoleRequest,
} from "@/api/protobuf/Authentication/role_pb";
import { RoleService } from "@/api/services/Authentication/role";
import { useMessage } from "@/hooks/useMessage";
import { EntityStates } from "@/api/protobuf/infrastructure_pb";
//import { IRole } from "@/api/ts/role";

interface IRole {
  id?: number;
  name: string;
  description?: string;
  state: EntityStates;
  usersList: Array<number>;
}
export default defineComponent({
  name: "account-edit",
  components: {},
  emits: ["reload"],
  setup(props, { emit }) {
    const RoleInfo = ref<IRole>({
      id: 0,
      name: "",
      description: "",
      state: 0,
      usersList: [],
    });
    const rules = {
      name: [{ required: true, message: "请输入角色名" }],
      description: [{ required: true, message: "请输入描述" }],
    };
    const visible = ref<boolean>(false);
    const formRef = ref<{
      resetFields: () => void;
      validate: () => Promise<boolean>;
    }>();
    const { createMessage } = useMessage();
    // 弹框状态处理
    async function openDialog(Role?: FindRoleReply.AsObject) {
      // 打开弹框，等下一帧弹框渲染后重置表单
      visible.value = true;
      await nextTick();
      formRef.value?.resetFields();
      if (Role) {
        RoleInfo.value = {
          ...Role,
          usersList: Role.usersList.map((i) => i.id),
        };
        console.log(unref(RoleInfo));
      } else {
        RoleInfo.value.id = 0;
        console.log(unref(RoleInfo));
      }
    }
    async function createRole() {
      const res = ""; //await addRole(unref(RoleInfo) as CreateRoleRequest.AsObject);
      if (res) {
        createMessage.success("新增角色成功!");
      }
    }
    async function editRole() {
      const Role = unref(RoleInfo);
      Reflect.deleteProperty(Role, "name");
      //const res = await updateRole(Role as UpdateRoleRequest.AsObject);
      createMessage.success("修改角色成功!");
    }
    function cancel() {
      visible.value = false;
    }
    async function ok() {
      const res = await formRef.value?.validate();
      console.log(res);
      if (res) {
        await [createRole, editRole][unref(RoleInfo).id ? 1 : 0]();
        cancel();
        emit("reload");
      }
    }
    return {
      rules,
      visible,
      RoleInfo,
      cancel,
      ok,
      title: computed(() => {
        return ["新增", "修改"][unref(RoleInfo).id ? 1 : 0] + "角色";
      }),
      openDialog,
      formRef,
    };
  },
});
</script>

<style scoped lang="less"></style>
