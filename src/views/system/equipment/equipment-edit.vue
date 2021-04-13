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
      :model="equipmentInfo"
      :labelCol="{ span: 6 }"
      :wrapperCol="{ span: 18 }"
    >
      <AFormItem name="type" label="类型">
        <a-input v-model:value="equipmentInfo.type" />
      </AFormItem>
      <AFormItem name="number" label="数量">
        <a-input v-model:value="equipmentInfo.number" />
      </AFormItem>
      <AFormItem name="brand" label="品牌">
        <a-input v-model:value="equipmentInfo.brand" />
      </AFormItem>
      <AFormItem name="model_name" label="型号">
        <a-input v-model:value="equipmentInfo.model_name" />
      </AFormItem>
      <AFormItem name="memory" label="价格">
        <a-input v-model:value="equipmentInfo.memory" />
      </AFormItem>
      <AFormItem name="Purchase_date" label="购买日期">
        <a-input v-model:value="equipmentInfo.Purchase_date" />
      </AFormItem>
      <AFormItem name="Eliminate_date" label="保质期">
        <a-input v-model:value="equipmentInfo.Eliminate_date" />
      </AFormItem>
      <AFormItem name="state" label="状态">
        <a-input v-model:value="equipmentInfo.state" />
      </AFormItem>
      <AFormItem name="user_id" label="使用人">
        <a-select
          showSearch
          allowClear
          optionFilterProp="label"
          placeholder="请选择选项"
          style="width: 100%; margin-right: 16px"
        >
          <a-select-option
            v-for="item in options"
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
  CreateEquipmentRequest,
  FindEquipmentReply,
  State,
  UpdateEquipmentRequest,
} from "@/api/protobuf/equipment_pb";
import { EquipmentService } from "@/api/services/equipment";
import { useMessage } from "@/hooks/useMessage";
import { EntityStates } from "@/api/protobuf/infrastructure_pb";

interface IEquipment {
  id: number;
  type: string;
  number: string;
  brand: string;
  modelName: string;
  memory: string;
  purchaseDate: number;
  eliminateDate: number;
  state: State;
  userId: number;
}
export default defineComponent({
  name: "equipment-edit",
  components: {},
  emits: ["reload"],
  setup(props, { emit }) {
    const equipmentInfo = ref<IEquipment>({
      id: 0,
      type: "",
      number: "",
      brand: "",
      modelName: "",
      memory: "",
      purchaseDate: 0,
      eliminateDate: 0,
      state: State.NOTUSED,
      userId: 0,
    });
    const options = [
      {
        name: "张三",
        id: "1",
        spell: "beijing",
        simpleSpell: "bj",
      },
      {
        name: "李四",
        id: "2",
        spell: "shanghai",
        simpleSpell: "sh",
      },
    ];
    const rules = {
      name: [{ required: true, message: "请输入品牌" }],
      description: [{ required: true, message: "请输入型号" }],
    };

    const visible = ref<boolean>(false);
    const formRef = ref<{
      resetFields: () => void;
      validate: () => Promise<boolean>;
    }>();
    const { createMessage } = useMessage();
    // 弹框状态处理
    async function openDialog(Equipment?: FindEquipmentReply.AsObject) {
      // 打开弹框，等下一帧弹框渲染后重置表单
      visible.value = true;
      await nextTick();
      formRef.value?.resetFields();
      if (Equipment) {
        equipmentInfo.value = {
          ...Equipment,
        };
        console.log(unref(equipmentInfo));
      } else {
        equipmentInfo.value.id = 0;
        console.log(unref(equipmentInfo));
      }
    }
    async function createEquipment() {
      const res = await EquipmentService.create(
        unref(equipmentInfo) as CreateEquipmentRequest.AsObject
      );
      if (res) {
        createMessage.success("新增设备成功!");
      }
    }
    async function editEquipment() {
      const Equipment = unref(equipmentInfo);
      Reflect.deleteProperty(Equipment, "name");
      const res = await EquipmentService.update(
        Equipment as UpdateEquipmentRequest.AsObject
      );
      if (res) {
        createMessage.success("修改设备成功!");
      }
    }
    function cancel() {
      visible.value = false;
    }
    async function ok() {
      const res = await formRef.value?.validate();
      console.log(res);
      if (res) {
        await [createEquipment, editEquipment][unref(equipmentInfo).id ? 1 : 0]();
        cancel();
        emit("reload");
      }
    }
    return {
      rules,
      visible,
      equipmentInfo,
      cancel,
      ok,
      title: computed(() => {
        return ["新增", "修改"][unref(equipmentInfo).id ? 1 : 0] + "设备";
      }),
      openDialog,
      formRef,
      options,
    };
  },
});
</script>

<style scoped lang="less"></style>
