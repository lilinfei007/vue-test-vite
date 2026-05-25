<script setup lang="ts">
import { ref } from 'vue';
const handleTypeOpen = ref(false);
const typeName = ref("");
interface FormState {
  search: string;
  type: string;
}

const formState = ref<FormState>({
  search: '',
  type: ''
});
const typeList = ref<number[]>([]);
</script>
<template>
  <div>
    <div class="tools-box">
      <a-form :model="formState" name="basic" layout="inline">
        <a-form-item>
          <a-input v-model:value="formState.search" placeholder="请输入图书名称" />
        </a-form-item>
        <a-form-item>
          <a-select v-model="formState.type" placeholder="请选择类别">
            <a-select-option v-for="index in typeList" :key="index">{{ index }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">添加图书</a-button>
        </a-form-item>
        <a-form-item>
          <a-button @click="handleTypeOpen = true" style="margin-left:10px">添加类别</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="books-list">
       <a-empty style="margin:20px auto" />
    </div>
    <a-modal v-model:open="handleTypeOpen" title="添加类别">
      <a-input placeholder="请输入类别名称" v-model:value="typeName" />
      <template #footer>
        <a-button @click="handleTypeOpen = false">取消</a-button>
        <a-button type="primary" @click="handleTypeOpen = false">确定</a-button>
      </template>
    </a-modal>
  </div>
</template>
<style lang="less" scoped>
.tools-box{
  margin: 10px;
}
.books-list{
  display: flex;
  flex-wrap: wrap;
  .book{
    margin: 10px;
  }
}
</style>