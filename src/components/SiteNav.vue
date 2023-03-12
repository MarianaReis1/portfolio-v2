<script lang="ts" setup>

import { shallowRef } from 'vue';
import type { navItem } from '@types/navItem';
import resume from "@assets/Mariana_Reis_-_Frontend_Dev_CV.pdf";

import DarkModeToggle from "@components/DarkModeToggle.vue";
import IconProjects from "@components/icons/IconProjects.vue";
import IconCV from "@components/icons/IconCV.vue";
import IconGithub from "@components/icons/IconGithub.vue";
import IconContact from "@components/icons/IconContact.vue";
import IconLinkedin from "@components/icons/IconLinkedin.vue";
import IconLogo from "@components/icons/IconLogo.vue";

const navItems = shallowRef<navItem[]>([
    {
        icon: IconProjects,
        text: 'projects',
        link: '#projects',
        target: '_self'
    },
    {
        icon: IconCV,
        text: 'resume',
        link: resume,
        target: '_blank'
    },
    {
        icon: IconContact,
        text: 'email',
        link: 'mailto:marianareis.dev@gmail.com',
        target: '_blank'
    },
    {
        icon: IconLinkedin,
        text: 'linkedin',
        link: 'https://www.linkedin.com/in/mariana-reis-mr/',
        target: '_blank'
    },
    {
        icon: IconGithub,
        text: 'github',
        link: 'https://github.com/MarianaReis1',
        target: '_blank'
    }
]);

</script>

<template>
    <nav class="sticky top-10 mt-20 mr-20 mb-1 h-fit flex flex-col items-center gap-10 z-40 dark:lg:bg-blue lg:bg-white lg:w-full lg:p-3 lg:top-0 lg:flex-row lg:h-auto lg:mt-0 lg:justify-center lg:items-center lg:shadow-lg xs:gap-7.5">

        <a href="/" class="group block">
            <IconLogo class="dark:fill-white-100 transition-transform duration-300 group-hover:scale-110" alt="Mariana Reis Logo"></IconLogo>
        </a>

        <ul class="flex flex-col items-center justify-start gap-6 lg:flex-row lg:items-center">

            <li v-for="item in navItems" :key="item.text" class="group relative w-5">
                <a :href="item.link" :target="item.target" class="w-full flex justify-center">

                    <component :is="item.icon" class="dark:fill-white-100 group-hover:fill-purple"></component>

                    <p class="absolute left-full top-0 leading-none pl-1 text-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:text-xs lg:-bottom-5 lg:left-auto lg:top-full">
                        {{ item.text }}
                    </p>
                </a>
            </li>

        </ul>

        <DarkModeToggle></DarkModeToggle>

    </nav>
</template>