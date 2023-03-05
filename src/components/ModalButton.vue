<script setup lang="ts">

import { ref, onMounted } from 'vue';
import ModalBase from '@components/ModalBase.vue';

const props = defineProps({
    wideModal: { type: Boolean, default:false },
    isOpen: {
        type: Boolean, default: false,
    }
})

const shouldShow = ref(false)

const open = () => {
    shouldShow.value = true
    document.body.classList.add('overflow-hidden')
}

const close = () => {
    shouldShow.value = false
    document.body.classList.remove('overflow-hidden')
}

onMounted(() => {
    if(props.isOpen) {
        shouldShow.value = true;
    }
})

</script>

<template>
    <button v-bind="$attrs" @click="open">
        <slot></slot>
    </button>

    <ModalBase 
        @close="close()"
        :show="shouldShow"
    >
        <slot name="modal"></slot>
    </ModalBase>

</template>