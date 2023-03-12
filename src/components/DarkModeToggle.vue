<script setup lang="ts">

import { ref, onMounted } from 'vue';

const darkMode = ref<boolean>(false);

const handleSwitch = () => {
    darkMode.value = !darkMode.value
    darkMode.value ? switchOn() : switchOff()
};

onMounted(() => {
    if (localStorage.marianaReisTheme === 'dark' || (!('marianaReisTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        switchOn()
    }
})

const switchOn = () => {
    darkMode.value = true;
    localStorage.marianaReisTheme = 'dark';
    document.documentElement.setAttribute('data-theme',"dark");
}

const switchOff = () => {
    darkMode.value = false;
    localStorage.marianaReisTheme = 'light';
    document.documentElement.removeAttribute('data-theme');
}

</script>

<template>

    <div @click="handleSwitch" :class="[darkMode ? 'bg-purple' : 'bg-green','relative cursor-pointer shrink-0 h-13 w-6 rounded-full']">
        <div :class="[darkMode ? 'top-[29px]' : 'top-[3px]','absolute left-[3px] bg-white-100 rounded-full w-[18px] h-[18px] transition-all duration-300 shadow-sm']"></div>

        <transition :duration="500" enter-active-class="opacity-100" leave-active-class="opacity-0">
            <img v-if="darkMode" class="absolute top-[2px] left-[2px] w-5 h-5 transition-opacity duration-500" src="@img/icon-moon.svg" alt="icon sun" />
            <img v-else class="absolute bottom-[2px] left-[2px] w-5 h-5 transition-opacity duration-500" src="@img/icon-sun.svg" alt="icon sun" />
        </transition>
    </div>

</template>