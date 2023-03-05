<script setup lang="ts">

const props = defineProps<{
    work: object
}>()

</script>

<template>
    <div class="max-w-[1100px] mx-auto pl-4 pr-10 text-left">
        <div class="flex items-end gap-7.5 mb-10 md:gap-3 md:mb-7.5">
            <h1 class="alpha text-purple">{{ work.id }}</h1>
            <h2 class="beta text-purple">{{ work.title }}</h2>
        </div>

        <div class="mb-10" v-html="work.descriptionLong"></div>

        <div class="flex items-center justify-between gap-7.5 mb-10 md:gap-5 md:flex-col md:items-start">

            <ul class="flex items-center gap-4 flex-wrap md:gap-2.5 md:justify-start">
                <li v-for="item in work.iconTools" :key="item.alt">
                    <img class="h-10 md:h-8" :src="item.icon" :alt="item.alt"/>
                </li>
            </ul>

            <a v-if="work.siteLink" :href="work.siteLink" class="btn--primary" target="_blank">
                visit site
            </a>

        </div>

        <video v-if="work.desktopVideo" class="block drop-shadow-2xl" :src="work.desktopVideo" autoplay loop></video>

        <div class="contents" v-if="work.desktopExtraImgs">
            <img ref="secondImg" v-for="item in work.desktopExtraImgs" :src="item" alt="" class="drop-shadow-xl mb-20 md:mb-7.5"/>
        </div>

    </div>
</template>