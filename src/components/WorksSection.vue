<script setup lang="ts">
import ButtonAnimated from '@components/ButtonAnimated.vue';
import ModalButton from '@components/ModalButton.vue';
import ModalContent from '@components/ModalContent.vue';
import works from '@assets/projects'
import { ref, onMounted } from 'vue';

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
    <section id="works" class="scroll-mt-10 md:scroll-mt-20">

        <div v-for="work in works" :key="work.id" class="flex gap-10 justify-between mb-40 md:flex-col-reverse md:mb-64">
            <div ref="container" class="w-1/2 relative md:w-full">
                <img ref="firstImg" :src="work.desktopImg" alt="" class="drop-shadow-xl w-4/5">
                <img v-if="work.mobileImg" ref="secondImg" :src="work.mobileImg" alt="" class="absolute top-20 right-0 max-w-[160px] w-1/3 drop-shadow-xl">
                <div class="contents" v-if="work.desktopExtraImgs">
                    <img ref="secondImg" v-for="item in work.desktopExtraImgs" :src="item" alt="" class="absolute top-40 right-0 w-4/5 drop-shadow-xl md:top-16"/>
                </div>
            </div>

            <div class="text-right flex flex-col items-end gap-7.5 w-1/2 md:w-full md:gap-5">
                <h1 class="alpha">{{ work.id }}</h1>
                <h2 class="beta">{{ work.title }}</h2>
                <div class="ml-5" v-html="work.descriptionShort"></div>
                <ul class="flex items-center gap-4 flex-wrap md:gap-2.5 md:justify-end">
                    <li v-for="item in work.iconTools" :key="item.alt">
                        <img class="h-10 md:h-8" :src="item.icon" :alt="item.alt"/>
                    </li>
                </ul>
                <div class="flex items-center justify-end gap-5 flex-wrap md:gap-5">
                    <ButtonAnimated v-if="work.siteLink" :href="work.siteLink">
                        view site
                    </ButtonAnimated>
                    <ButtonAnimated v-if="work.siteCode" :href="work.siteCode">
                        view code
                    </ButtonAnimated>
                    <ModalButton  class="btn--primary">
                        view more

                        <template #modal>
                            <ModalContent :work="work"></ModalContent>
                        </template>
                    </ModalButton>
                </div>
            </div>
        </div>

    </section>
</template>