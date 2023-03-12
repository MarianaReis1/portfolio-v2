<script setup lang="ts">

import { ref, onMounted, PropType } from 'vue';
import ModalBase from '@components/ModalBase.vue';
import ButtonPrimary from '@components/ButtonPrimary.vue';

const props = defineProps({
    wideModal: { 
        type: Boolean as PropType<boolean>,
        default: false 
    },
    isOpen: {
        type: Boolean  as PropType<boolean>,
        default: false,
    }
})

const shouldShow = ref<boolean>(false)

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
    <ButtonPrimary @click="open">
        <slot></slot>
    </ButtonPrimary>

    <ModalBase 
        @close="close()"
        :show="shouldShow"
    >
        <slot name="modal"></slot>
    </ModalBase>

</template>