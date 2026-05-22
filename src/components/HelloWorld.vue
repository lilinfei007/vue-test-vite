<script setup lang="ts">
import { ref } from 'vue';
import { getList,add,put,del } from '@/api/index.js';
import { message } from 'ant-design-vue';
type Form = {
  name: string;
  description: string;
  time: string[];
};
const form = ref<Form>({
  name:"",
  description:"",
  time:[],
});
const handleObj = ref({});
const curModalStatus = ref("add");
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
  },{
    title:"操作",
    key:"operate"
  }
]
const getTableList = async () => {
  let res = await getList();
  if(res.status == 0){
    dataSource.value = res.data;
  }
};
getTableList()
const addHandle = async () => {
  let { name,description } = form.value;
  let start_time = "";
  let end_time = "";
  if(form.value != null && Array.isArray(form.value.time)){
    start_time = form.value.time[0];
    end_time = form.value.time[1];
  }
  let res = await add({
    name,
    description,
    start_time,
    end_time
  });
  if(res.status == 0){
    modalVisible.value = false;
    getTableList();
    message.success(res.message);
  }else{
    message.warning(res.message);
  }
}

const editHandle = async () => {
  let { name,description } = form.value;
  let start_time = "";
  let end_time = "";
  if(form.value != null && Array.isArray(form.value.time)){
    start_time = form.value.time[0];
    end_time = form.value.time[1];
  }
  let res = await put(handleObj.value.id,{
    name,
    description,
    start_time,
    end_time
  });
  if(res.status == 0){
    modalVisible.value = false;
    getTableList();
    message.success(res.message);
  }else{
    message.warning(res.message);
  }
}
const handleOk = () => {
  if(curModalStatus.value == "add"){
    addHandle();
  }else{
    editHandle();
  }
};

const showEditModal = (record) => {
  // console.log(record)
  handleObj.value = record;
  const { name,description,start_time,end_time } = record;
  form.value = {
    name,description,
    time:[start_time || '',end_time || '']
  }
  curModalStatus.value = "edit";
  modalVisible.value = true;
};

const deleteHandle = async (record) => {
  let res = await del(record._id);
  if(res.status == 0){
    getTableList();
    message.success(res.message);
  }else{
    message.warning(res.message);
  }
};
defineProps({
  msg: String,
});
const onFinish = (values) => {
  console.log('Success:', values);
};

const modalVisible = ref(false);
const count = ref(0)
</script>

<template>
  <div><a-button @click="curModalStatus = 'add';modalVisible = true" type="primary">新增待办</a-button></div>
   <a-table :dataSource="dataSource" :columns="columns">
    <template #bodyCell="{ column,record }">
      <template v-if="column.key == 'time'">
        {{ record.start_time }} - {{ record.end_time }}
      </template>
      <template v-if="column.key == 'operate'">
        <a @click="showEditModal(record )">修改</a>
        <a style="margin-left:12px" @click="deleteHandle(record)">删除</a>
      </template>
    </template>
   </a-table>
   <a-modal v-model:open="modalVisible" :title="curModalStatus == 'add' ? '添加待办' : '修改待办'" @ok="handleOk">
    <a-form @finish="onFinish">
      <a-form-item label="待办名称">
        <a-input v-model:value="form.name" placeholder="请输入待办名称" />
      </a-form-item>
      <a-form-item label="待办详情">
        <a-textarea v-model:value="form.description" placeholder="请输入待办详情" />
      </a-form-item>
      <a-form-item label="待办时间">
        <a-range-picker
          v-model:value="form.time"
          :show-time="{ format: 'HH:mm' }"
          format="YYYY-MM-DD HH:mm"
          value-format="YYYY-MM-DD HH:mm:ss"
          :placeholder="['Start Time', 'End Time']"
        />
      </a-form-item>
    </a-form>
   </a-modal>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
