<script setup lang="ts">

import IconArrowDown from '@components/icons/IconArrowDown.vue';

</script>

<template>
    <section class="min-h-screen flex items-center lg:min-h-[90vh] xs:min-h-[83vh]">

        <div class="min-h-[50vh] flex flex-col items-center justify-between gap-3 w-full">

            <p class="font-medium font-display leading-none max-w-[750px] mb-10 text-16xl md:text-10xl md:leading-tight xs:text-6xl">
                <span class="text-8xl md:text-2xl xs:text-base">Hey there, my name is</span><br/>
                <span class="font-black">mariana reis,</span><br/>
                <span class="">a</span>
                <span class="font-black"> frontend developer</span><br/>
                <span class="">based in London.</span>
            </p>

            <a href="#projects" class="block font-bold font-display text-xl md:text-base">
                <p class="mb-4 text-purple">check out what I’ve been doing</p>
                <IconArrowDown class="mx-auto animate-bounce dark:fill-white-100" alt="icon arrow down"></IconArrowDown>
            </a>

        </div>

    </section>
</template>