<script setup lang="ts">

const props = defineProps<{
    href: string
}>();

</script>

<template>

    <a :href="href" target="_blank" class="btn--primary">
        <slot></slot>
    </a>

</template>