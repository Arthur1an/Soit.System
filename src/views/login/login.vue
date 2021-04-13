<template>
  <div class="login-back w100 h100 flex-column">
    <section class="login flex-column align-center">
      <div class="flex-column">
        <span class="title text-center">{{ title }}</span>
        <span class="englishTitle text-center">{{ englishTitle }}</span>
      </div>
      <div class="mt20">
        <div class="replace">
          <div class="loginWay" v-if="!userInfo.alertMessage">账户密码登录</div>
          <a-alert
            :message="userInfo.alertMessage"
            v-else
            type="error"
            show-icon
            closable
            @close="closeAlert"
          />
        </div>
        <a-form :rules="rules" :model="userInfo" ref="loginCheck">
          <a-form-item name="account">
            <a-input
              placeholder="账户"
              style="width: 380px"
              size="large"
              v-model:value="userInfo.account"
            >
              <template #prefix>
                <UserOutlined style="color: #1890ff" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input
              type="password"
              placeholder="密码"
              style="width: 380px"
              size="large"
              v-model:value="userInfo.password"
            >
              <template #prefix>
                <LockOutlined style="color: #1890ff" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-space :size="200">
              <a-checkbox v-model:value="userInfo.autoLogin">自动登录</a-checkbox>
              <a-button type="link" v-if="userInfo.ForgotPassword" @click="forgetPwd"
                >忘记密码
              </a-button>
            </a-space>
          </a-form-item>
          <a-form-item>
            <a-button
              style="width: 380px; color: #fff; background-color: #1890ff"
              @click="login"
              size="large"
              >登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </section>
    <section class="footer text-center">
      <span>Copyright© 2021 翱晟-上海</span>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, UnwrapRef } from "vue";
  import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
  import { useRouter } from "vue-router";
  import { AuthenticateService } from "@/api/services/authenticate";
  import { encrypt } from "@/utils/encrypt";
  import { ValidateErrorEntity } from "node_modules/ant-design-vue/es/form/interface";

  export default defineComponent({
    name: "login",
    components: {
      UserOutlined,
      LockOutlined,
    },
    setup() {
        const router = useRouter();
        const userInfo= reactive({
        account: "",
        password: "",
        alertMessage: "",
        autoLogin: false,
        ForgotPassword: false,
      });

      const rules = reactive({
        account: [{ required: true, message: "请输入账户名", trigger: blur }],
        password: [{ required: true, message: "请输入密码", trigger: blur }],
      });

      const loginCheck = ref<{ validate: any; resetFields: any } | null>(null);

      const closeAlert = () => {
        userInfo.alertMessage = "";
        userInfo.ForgotPassword = false;
      };

      async function login() {
        router.push("/system/index"); 
         const res = await loginCheck.value?.validate();
         //let cipher=encrypt(userInfo.password).toString();
         if (res) {
         var reply = await AuthenticateService.login({
             userName: userInfo.account,
             cipher: encrypt(userInfo.password).toString(),
           });
           sessionStorage.setItem("token", reply.token);
           console.log(reply.token);
          if (reply) {
            router.push("/system/index"); 
           }
         }
      }

      const forgetPwd = () => {
        console.log("forgetPwd");
      };

      return {
        title: "翱晟-上海台账管理",
        englishTitle: "SHENMU DATA MONITORING",
        userInfo,
        rules,
        loginCheck,
        closeAlert,
        login,
        forgetPwd,
      };
    },
  });
</script>


<style scoped>
  .login-back {
    background-image: url("../../assets/imgs/common/login-back.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .login {
    margin-top: 130px;
  }

  .title {
    font-family: "PingFangSC-Medium", "PingFang SC";
    font-size: 35px;
    letter-spacing: 3px;
    color: #1890ff;
  }

  .englishTitle {
    font-family: "GoodTimes";
    font-size: 14px;
    letter-spacing: 3px;
    color: #484848;
  }

  .loginWay {
    width: 96px;
    height: 30px;
    margin-bottom: 24px;
    font-size: 16px;
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }

  .footer {
    width: 100%;
    height: 20px;
    margin-top: 300px;
    font-size: 14px;
  }

  .replace {
    height: 54px;
  }
</style>
