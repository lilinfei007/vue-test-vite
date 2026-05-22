<script setup>
import { ref } from 'vue';
const handleTypeOpen = ref(false);
const typeName = ref("");
</script>
<template>
  <div>
    <div class="tools-box">
      <a-button type="primary">添加图书</a-button>
      <a-button @click="handleTypeOpen = true" style="margin-left:10px">添加类别</a-button>
    </div>
    <div class="books-list">
      <a-card class="book" v-for="index in 3" hoverable style="width: 240px">
        <template #cover>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
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