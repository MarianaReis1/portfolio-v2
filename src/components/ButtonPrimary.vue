<script setup lang="ts">

import type { PropType } from 'vue';
import { computed } from 'vue';

const props = defineProps({
    href: {
        type: String as PropType<string>
    },
});

const element = computed(() => props.href ? 'a' : 'button')

</script>

<template>

    <component :is="element" :href="href" target="_blank" class="block border-2 border-green font-display font-semibold px-5 py-1 relative rounded-full text-lg text-green w-fit transition-colors duration-200 dark:hover:border-white-100 dark:hover:text-white-100 hover:border-blue hover:text-blue md:text-base">
        <slot></slot>
    </component>

</template>