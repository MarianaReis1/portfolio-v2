<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from "gsap";

const circle = ref();
const animation = ref();

onMounted(() => {
    window.addEventListener('mousemove', (e) => mouseAnimation(e))
});

onUnmounted(() => {
    window.removeEventListener('mousemove', e => mouseAnimation(e))
});

const mouseAnimation = (e:Object) => {
    animation.value = gsap.set(circle.value, {
        top: (e.clientY),
        left: e.clientX,
        width: () => setTimeout(() =>  500, 150),
        height: () => setTimeout(() => 500, 150),
    });

    if(circle.value.clientHeight > document.body.clientHeight){
        gsap.killTweensOf(circle.value)
    }
}

</script>

<template>
    <div ref="circle" class="rounded-full w-52 h-40 max-w-screen max-h-max bg-purple/10 fixed blur-2xl -translate-x-1/2 -translate-y-1/2 -z-[1]"></div>
</template>