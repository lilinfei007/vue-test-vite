<script setup>
import { ref } from 'vue';
import { getList } from '@/api/index.js';

const form = ref({
  name:"",
  description:"",
  time:"",
})
const dataSource = ref([]);
const columns = [
  {
    title: '待办名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '待办详情',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '待办时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '待办状态',
    dataIndex: 'status',
    key: 'status',
  }
]
const getTableList = async () => {
  let res = await getList();
  if(res.status == 0){
    dataSource.value = res.data;
  }
};
getTableList()

const modelVisible = ref(false);
const handleOk = () => {
  modelVisible.value = false;
};
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div><a-button type="primary">新增待办</a-button></div>
   <a-table :dataSource="dataSource" :columns="columns" />
   <a-modal v-model:open="modalVisible" title="添加待办" @ok="handleOk">
    <a-form @finish="onFinish">
      <a-form-item label="待办名称">
        <a-input v-model:value="form.name" placeholder="请输入待办名称" />
      </a-form-item>
      <a-form-item label="待办详情">
        <a-textarea v-model:value="form.description" placeholder="请输入待办详情" />
      </a-form-item>
      <a-form-item label="待办时间">
        <a-date-picker v-model:value="form.time" />
      </a-form-item>
    </a-form>
   </a-modal>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
