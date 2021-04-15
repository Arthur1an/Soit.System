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
      :model="UserInfo"
      :labelCol="{ span: 6 }"
      :wrapperCol="{ span: 18 }"
    >
      <AFormItem name="name" label="角色名">
        <a-input :disabled="Boolean(UserInfo.id)" v-model:value="UserInfo.name" />
      </AFormItem>
      <AFormItem name="entryDate" label="入职日期">
        <a-input v-model:value="UserInfo.entryDate" />
      </AFormItem>
      <AFormItem name="departureDate" label="合同到期时间">
        <a-input v-model:value="UserInfo.departureDate" />
      </AFormItem>
       <AFormItem name="mobile" label="电话">
        <a-input v-model:value="UserInfo.mobile" />
      </AFormItem>
       <AFormItem name="idcard" label="身份证">
        <a-input  v-model:value="UserInfo.idcard" />
      </AFormItem>
       <AFormItem name="job" label="职位">
        <a-input  v-model:value="UserInfo.job" />
      </AFormItem>
     
      <AFormItem name="computerIdsList" label="电脑">
        <a-select
         mode="multiple"
          showSearch
          allowClear
          optionFilterProp="label"
          placeholder="请选择选项"
          style="width: 100%; margin-right: 16px"
        >
          <a-select-option
            v-for="item in UserInfo.computerIdsList"
            :key="item.name"
            :value="item.id"
            :label="item.name"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
      </AFormItem>
    </AForm>
  </AModal>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, computed, unref } from "vue";
import {
  CreateUserRequest,
  FindUserReply,
  UpdateUserRequest,
} from "@/api/protobuf/user_pb";
import { UserService } from "@/api/services/user";
import { useMessage } from "@/hooks/useMessage";
import { EntityStates, NamedIdentify } from "@/api/protobuf/infrastructure_pb";
//import { IUser } from "@/api/ts/User";
//:disabled="Boolean(UserInfo.id)"
interface IUser {
  id: number;
  name: string;
  entryDate: number;
  departureDate: number;
  mobile: string;
  idcard: string;
  job: string;
  computerIdsList: Array<number>;
}
export default defineComponent({
  name: "User-edit",
  components: {},

  emits: ["reload"],
  setup(props, { emit }) {
    const UserInfo = ref<IUser>({
      id: 0,
      name: "",
      entryDate: 0,
      departureDate: 0,
      mobile: "",
      idcard: "",
      job: "",
      computerIdsList: [],
    });
    const rules = {
      name: [{ required: true, message: "请输入姓名名" }],
      description: [{ required: true, message: "请输入邮箱" }],
    };
    const visible = ref<boolean>(false);
    const formRef = ref<{
      resetFields: () => void;
      validate: () => Promise<boolean>;
    }>();
    const { createMessage } = useMessage();
    // 弹框状态处理
    async function openDialog(User?: FindUserReply.AsObject) {
      // 打开弹框，等下一帧弹框渲染后重置表单
      visible.value = true;
      await nextTick();
      formRef.value?.resetFields();
      if (User) {
        UserInfo.value = {
          ...User,
          computerIdsList: User.computerIdsList.map((i) => i.id),
        };
        console.log(unref(UserInfo));
      } else {
        UserInfo.value.id = 0;
        console.log(unref(UserInfo));
      }
    }
    async function createUser() {
      const res = await UserService.create(unref(UserInfo) as CreateUserRequest.AsObject);
      if (res) {
        createMessage.success("新增员工成功!");
      }
    }
    async function editUser() {
      const User = unref(UserInfo);
      Reflect.deleteProperty(User, "name");
      const res = await UserService.update(User as UpdateUserRequest.AsObject);
      createMessage.success("修改员工成功!");
    }
    function cancel() {
      visible.value = false;
    }
    async function ok() {
      const res = await formRef.value?.validate();
      console.log(res);
      if (res) {
        await [createUser, editUser][unref(UserInfo).id ? 1 : 0]();
        cancel();
        emit("reload");
      }
    }
    return {
      rules,
      visible,
      UserInfo,
      cancel,
      ok,
      title: computed(() => {
        return ["新增", "修改"][unref(UserInfo).id ? 1 : 0] + "员工";
      }),
      openDialog,
      formRef,
    };
  },
});
</script>

<style scoped lang="less"></style>
