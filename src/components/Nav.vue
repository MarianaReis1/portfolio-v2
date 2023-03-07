<script setup lang="ts">
import IconWork from "@components/icons/IconWork.vue";
import IconCV from "@components/icons/IconCV.vue";
import IconGithub from "@components/icons/IconGithub.vue";
import IconContact from "@components/icons/IconContact.vue";
import IconLinkedin from "@components/icons/IconLinkedin.vue";
import resume from "@assets/Mariana_Reis_-_Frontend_Dev_CV.pdf";

const navItems = [
    {
        icon: IconWork,
        text: 'works',
        link: '#works',
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
    },
]


</script>

<template>
    <nav class="sticky top-20 h-fit flex flex-col items-start gap-7.5 z-40 lg:bg-white lg:w-full lg:p-3 lg:top-0 lg:flex-row lg:h-auto lg:justify-center lg:items-center lg:shadow-lg">
        <a href="/" class="group block -left-4 relative lg:left-0">
            <img src="@img/icon-logo.svg" class="transition-transform duration-300 group-hover:scale-110" alt="Mariana Reis Logo"/>
        </a>

        <ul class="flex flex-col items-start justify-start gap-7.5 lg:flex-row lg:items-baseline">

            <li v-for="item in navItems" :key="item.text">
                <a :href="item.link" :target="item.target" class="group flex items-center gap-2 relative lg:flex-col lg:items-center lg:gap-1">
                    <component :is="item.icon" class="group-hover:fill-purple"></component>
                    <p class="text-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:text-xs lg:absolute lg:-bottom-5">
                        {{ item.text }}
                    </p>
                </a>
            </li>

        </ul>
    </nav>
</template>