<script setup lang="ts">

import type { PropType } from 'vue';
import type { Project } from '@types/projectItem';
import ButtonPrimary from '@components/ButtonPrimary.vue';


const props = defineProps({
    project: {
        type: Object as PropType<Project>, 
        required: true
    }
})

</script>

<template>
    <div class="max-w-[1100px] mx-auto pl-4 pr-10 text-left">
        <div class="flex items-end gap-7.5 mb-10 md:gap-3 md:mb-7.5">
            <h1 class="alpha text-purple">{{ project.id }}</h1>
            <h2 class="beta text-purple">{{ project.title }}</h2>
        </div>

        <div class="mb-10" v-html="project.descriptionLong"></div>

        <div class="flex items-center justify-between gap-7.5 mb-10 md:gap-5 md:flex-col md:items-start">

            <ul class="flex items-center gap-4 flex-wrap md:gap-2.5 md:justify-start">
                <li v-for="item in project.iconTools" :key="item.alt">
                    <img class="h-10 md:h-8" :src="item.icon" :alt="item.alt"/>
                </li>
            </ul>

            <ButtonPrimary v-if="project.siteLink" :href="project.siteLink">
                visit site
            </ButtonPrimary>

        </div>

        <video v-if="project.desktopVideo" class="block drop-shadow-2xl" :src="project.desktopVideo" autoplay loop></video>

        <div class="contents" v-if="project.desktopExtraImgs">
            <img ref="secondImg" v-for="item in project.desktopExtraImgs" :src="item" alt="" class="drop-shadow-xl mb-20 md:mb-7.5"/>
        </div>

    </div>
</template>