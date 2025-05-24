<script setup lang="ts">
import type { PageResult } from '@/types/base'

const props = defineProps<{
  data: PageResult<any>
  sizeChange: Function
  currentChange: Function
  pageSizeTemplate?: Array<number>
}>()
</script>

<template>
  <el-pagination
    id="pagination"
    class="m-t-8"
    layout="total, ->,  prev, pager, next,sizes, jumper"
    :total="Number(props.data.total)"
    :current-page="Number(props.data.pageNo)"
    :page-size="Number(props.data.pageSize)"
    :page-sizes="props.pageSizeTemplate"
    @size-change="props.sizeChange"
    @current-change="props.currentChange"
  />
</template>
