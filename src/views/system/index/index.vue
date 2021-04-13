<template>
  <div class="w100 pad10 pl0" style="background-color:#fff;border-radius:0.3rem;">
    <a-list item-layout="horizontal" :data-source="data">
      <a-list-item v-for="item in data" :key="item.id" style="display: block;">
        <a-list-item-meta 
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        ></a-list-item-meta>
        <div>
          <a href="https://www.antdv.com/">{{ item.title }}</a>
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
      </a-list-item>

    </a-list>

  <div>
    <h3 :style="{ marginBottom: '16px' }">
      Default 1
    </h3>
    <a-list bordered :data-source="data1">
      <a-list-item v-for="item in data1" :key="item.id">
        {{ item.content }}
      </a-list-item>
      <template slot:header>
        Header
      </template>
      <template slot:footer>
        Footer
      </template>
    </a-list>
    <h3 :style="{ margin: '16px 0' }">
      Default 2
    </h3>
    <!-- size="small" -->
    <a-list  bordered :data-source="data1">
      <a-list-item v-for="item in data1" :key="item.id">
        {{ item.content }}
      </a-list-item>
       <template slot:header>
        Header
      </template>
      <template slot:footer>
        Footer
      </template>
    </a-list>
    <h3 :style="{ margin: '16px 0' }">
      Default 3
    </h3>
      <!-- size="large" -->
    <a-list bordered :data-source="data1">
      <a-list-item v-for="item in data1" :key="item.id">
        {{ item.content }}
      </a-list-item>
        <template slot:header>
        Header
      </template>
      <template slot:footer>
        Footer
      </template>
    </a-list>
  </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, unref } from "vue";

//import RoleTree from "@/components/com-Tree/TreePanel.vue";

export default defineComponent({
  name: "index",
  setup() {
    const data = [
      {
          id:1,
        title: "Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1",
      },
      {
           id:2,
        title: "Ant Design Title 2",
      },
      {
           id:3,
        title: "Ant Design Title 3",
      },
      {
           id:4,
        title: "Ant Design Title 4",
      },
    ];
    const data1 = [{
        id:1,
        content: 'Racing car sprays burning fuel into crowd.',
    },
    {
        id:2,
        content: 'Australian walks 100km after outback crash.',
    },
    {
        id:3,
        content: 'Man charged over missing wedding girl.',
    },
];

    // 初始加载
    onMounted(() => {
      //query();
    });
    return {
      data,
      data1,
    };
  },
});
</script>

<style scoped></style>
