<template>
 <el-button ref="buttonRef">
    <slot></slot>
 </el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { ref } from 'vue';

const buttonRef  = ref<typeof ElButton>();

defineExpose({
    buttonRef:buttonRef 
})

</script>