<script setup>
import iconGithub from '@components/icons/IconGithub.vue';
import resume from "@assets/Mariana_Reis_-_Frontend_Dev_CV.pdf";

const footerItems = [
    {
        text: 'source code',
        icon: iconGithub,
        link: 'https://github.com/MarianaReis1/portfolio-v2',
    },
]
</script>
<template>
    <footer class="border-t-[3px] border-green">
        <div class="px-10 py-8 flex justify-between items-center gap-10 max-w-[1352px] mx-auto md:flex-col-reverse md:gap-5">
            <p>© 2023 Mariana Reis.</p>
            <ul class="flex gap-8">

                <li v-for="item in footerItems" :key="item.link">
                    <a :href="item.link" class="group flex items-center gap-2">
                        <component :is="item.icon" class="dark:fill-white-100 group-hover:fill-purple transition-colors duration-300"></component>
                        <p class="group-hover:text-purple transition-colors duration-300">{{ item.text }}</p>
                    </a>
                </li>

            </ul>
        </div>
    </footer>
</template>