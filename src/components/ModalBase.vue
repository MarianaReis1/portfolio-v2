<script setup lang="ts">

export interface Props {
    show?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    show: false
})

const emit = defineEmits(['close'])

const close = () => emit('close')

</script>

<template>
    <!-- <teleport to='body'> -->
        <transition :duration="700">

            <section v-if="props.show" class="fixed top-0 left-0 bg-transparent h-full w-full p-0 z-50">

                <div class="fixed inset-0 bg-gray/80 backdrop-blur-sm z-20"></div>

                <div class="flex justify-center items-start h-full overflow-y-auto scrollbar-none relative z-40">

                    <div v-click-away="close" class="modal max-w-[1350px] relative bg-white border border-gray/20 m-13 rounded shadow-xl w-full p-5 pb-13 md:m-7.5 md:p-3 md:pb-10">

                        <button class="sticky top-5 ml-auto block md:top-3" @click="close()">
                            <img src="@img/icon-close.png" alt="icon close" class="md:w-6 md:h-6">
                        </button>

                        <slot></slot>

                    </div>

                </div>
            </section>

        </transition>
    <!-- </teleport> -->
</template>

<style scoped>
    .v-enter-active .modal, .v-leave-active .modal {
        transition: all 0.5s ease-in-out;
    }

    .v-enter-from .modal, .v-leave-to .modal {
        @apply translate-y-full;
    }


    .v-enter-active, .v-leave-active {
        transition: all 0.2s ease-in-out;
    }

    .v-enter-from, .v-leave-to {
        @apply opacity-0;
    }

    .v-leave-active {
        transition-delay: 0.2s;
    }

</style>