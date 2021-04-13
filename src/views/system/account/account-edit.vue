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
      :model="userInfo"
      :labelCol="{ span: 6 }"
      :wrapperCol="{ span: 18 }"
    >
      <AFormItem name="name" label="账号">
        <a-input :disabled="Boolean(userInfo.id)" v-model:value="userInfo.name" />
      </AFormItem>
      <AFormItem name="legalname" label="姓名">
        <a-input v-model:value="userInfo.legalname" />
      </AFormItem>
      <AFormItem name="cipher" label="密码">
        <a-input v-model:value="userInfo.cipher" />
      </AFormItem>
      <AFormItem name="description" label="描述">
        <a-input v-model:value="userInfo.description" />
      </AFormItem>
      <AFormItem name="mobile" label="电话">
        <a-input v-model:value="userInfo.mobile" />
      </AFormItem>
      <AFormItem name="email" label="邮箱">
        <a-input v-model:value="userInfo.email" />
      </AFormItem>

    </AForm>
  </AModal>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, computed, unref } from "vue";
import {
  CreateAccountRequest,
  FindAccountReply,
  UpdateAccountRequest,
} from "@/api/protobuf/account_pb";
import { AccountService } from "@/api/services/account";
import { useMessage } from "@/hooks/useMessage";
import { encrypt } from "@/utils/encrypt";
import { EntityStates } from "@/api/protobuf/infrastructure_pb";
import { StringValue } from "node_modules/@types/google-protobuf/google/protobuf/wrappers_pb";
//import { IUser } from "@/api/ts/user";

interface IAccount {
  id: number;
  name: string;
  cipher: string;
  legalName?: string;
  description?: string;
  mobile?: string;
  email?: string;
}
export default defineComponent({
  name: "account-edit",
  components: {},
  emits: ["reload"],
  setup(props, { emit }) {
    const userInfo = ref<IAccount>({
      id: 0,
      name: "",
      cipher: "",
      legalName: "",
      description: "",
      mobile: "",
      email: "",
    });
    const options = [
      {
        name: "北京",
        id: "00001",
        spell: "beijing",
        simpleSpell: "bj",
      },
      {
        name: "上海",
        id: "00002",
        spell: "shanghai",
        simpleSpell: "sh",
      },
    ];
    const rules = {
      name: [{ required: true, message: "请输入账号" }],
      legalname: [{ required: true, message: "请输入姓名" }],
    };
    const visible = ref<boolean>(false);
    const formRef = ref<{
      resetFields: () => void;
      validate: () => Promise<boolean>;
    }>();
    const { createMessage } = useMessage();
    // 弹框状态处理
    async function openDialog(user?: FindAccountReply.AsObject) {
      // 打开弹框，等下一帧弹框渲染后重置表单
      visible.value = true;
      await nextTick();
      formRef.value?.resetFields();

      if (user) {
        userInfo.value = {
          ...user,
        };
      } else {
        console.log(unref(userInfo));
      }
    }
    async function createUser() {
      userInfo.value.cipher = encrypt("123456").toString();
      const res = await AccountService.create(
        unref(userInfo) as CreateAccountRequest.AsObject
      );
      if (res) {
        createMessage.success("新增用户成功!");
      }
    }
    async function editUser() {
      const user = unref(userInfo);
      Reflect.deleteProperty(user, "name");
      //const res = await updateUser(user as UpdateUserRequest.AsObject);
      createMessage.success("修改用户成功!");
    }
    function cancel() {
      visible.value = false;
    }
    async function ok() {
      const res = await formRef.value?.validate();
      console.log(res);
      if (res) {
        await [createUser, editUser][unref(userInfo).id ? 1 : 0]();
        cancel();
        emit("reload");
      }
    }
    return {
      rules,
      visible,
      userInfo,
      cancel,
      ok,
      title: computed(() => {
        return ["新增", "修改"][unref(userInfo).id ? 1 : 0] + "用户";
      }),
      openDialog,
      formRef,
      options,
    };
  },
});
</script>

<style scoped lang="less"></style>
