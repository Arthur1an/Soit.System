<template>
  <a-form
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix
          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-model:value="formState.password"
        type="password"
        placeholder="Password"
      >
        <template #prefix
          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
        @click="login"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, UnwrapRef } from "vue";
import { useRouter } from "vue-router";
import { encrypt } from "@/utils/encrypt";
import { AuthenticateService } from "@/api/services/Authentication/authenticate";

interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const formState: UnwrapRef<FormState> = reactive({
      user: "",
      password: "",
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    const login = async () => {
      var cipher = encrypt(formState.password);
      if (cipher) {
        var reply = await AuthenticateService.login({
          userName: formState.user,
          cipher: cipher,
        });
        sessionStorage.setItem("token", reply.token);
        console.log(reply.token);
        router.push("/user");
      }
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
      login,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>
