<script setup lang="ts">

import ButtonPrimary from '@components/ButtonPrimary.vue';
import ModalButton from '@components/ModalButton.vue';
import ModalContent from '@components/ModalContent.vue';

import { ref, onMounted } from 'vue';
import projects from '@assets/projects';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const firstImg = ref([])
const secondImg = ref([])
const container = ref([])

onMounted(() => {

    gsap.utils.toArray(firstImg.value).forEach(item => {
        ScrollTrigger.create({
            trigger: item,
            toggleActions: 'restart pause resume restart',
            start: 'top bottom',
            scrub: 2,
            end: "+-50",
            animation: gsap.from(item, {
                x: -150
            })

        })
    })

    gsap.utils.toArray(secondImg.value).forEach(item => {
        ScrollTrigger.create({
            trigger: item,
            toggleActions: 'restart pause resume restart',
            start: 'top bottom',
            scrub: 2,
            end: "+-50",
            animation: gsap.from(item, {
                y: 150
            })

        })
    })

});

</script>

<template>
    <section id="projects" class="scroll-mt-10 md:scroll-mt-20">

        <div v-for="project in projects" :key="project.id" class="flex gap-10 justify-between mb-40 md:flex-col-reverse md:mb-64">

            <div ref="container" class="w-1/2 relative md:w-full">

                <img ref="firstImg" :src="project.desktopImg" alt="" class="drop-shadow-xl w-4/5">

                <img v-if="project.mobileImg" ref="secondImg" :src="project.mobileImg" alt="site on mobile mockup" class="absolute top-20 right-0 max-w-[160px] w-1/3 drop-shadow-xl">

                <div v-else-if="project.desktopExtraImgs" class="contents">
                    <img ref="secondImg" :src="project.desktopExtraImgs[0]"  alt="site on desktop mockup" class="absolute top-40 right-0 w-4/5 drop-shadow-xl md:top-16"/>
                </div>

            </div>

            <div class="text-right flex flex-col items-end gap-7.5 w-1/2 md:w-full md:gap-5">

                <h1 class="alpha">{{ project.id }}</h1>

                <h2 class="beta">{{ project.title }}</h2>

                <div class="ml-5" v-html="project.descriptionShort"></div>

                <ul v-if="project.iconTools.length" class="flex items-center gap-4 justify-end flex-wrap md:gap-2.5 md:justify-end">

                    <li v-for="item in project.iconTools" :key="item.alt">
                        <img class="h-10 md:h-8" :src="item.icon" :alt="item.alt"/>
                    </li>

                </ul>

                <div class="flex items-center justify-end gap-5 flex-wrap md:gap-5">
                    <ButtonPrimary v-if="project.siteLink" :href="project.siteLink">
                        view site
                    </ButtonPrimary>

                    <ButtonPrimary v-if="project.siteCode" :href="project.siteCode">
                        view code
                    </ButtonPrimary>

                    <ModalButton>
                        view more

                        <template #modal>
                            <ModalContent :project="project"></ModalContent>
                        </template>
                    </ModalButton>
                </div>
            </div>
        </div>

    </section>
</template>