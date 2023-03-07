<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from "gsap";

const circle = ref();
const animation = ref();
const initialSize = ref(50)

onMounted(() => {
    window.addEventListener('mousemove', (e) => mouseAnimation(e))
});

onUnmounted(() => {
    window.removeEventListener('mousemove', e => mouseAnimation(e))
});

const mouseAnimation = (e:Object) => {
    gsap.set(circle.value, {
        top: (e.clientY),
        left: e.clientX,
    });

    gsap.to(circle.value, {
        width: '200vw',
        height: document.body.offsetHeight,
        borderRadius: 0,
        ease: 'power.out',
        duration: 50
    });
}

</script>

<template>
    <div ref="circle" class="rounded-full w-40 h-40 max-w-screen max-h-max bg-purple/10 fixed blur-2xl -translate-x-1/2 -translate-y-1/2 -z-[1]"></div>
</template>