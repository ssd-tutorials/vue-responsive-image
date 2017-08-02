<template>
    <img :src="path" :alt="alt">
</template>
<script>
    export default {
        props: {
            paths: {
                type: Object,
                required: true
            },
            alt: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                media: window.ViewPort.media
            }
        },
        computed: {
            path() {
                return this.paths[this.media];
            }
        },
        mounted() {
            window.EventHandler.listen('window-resized', breakpoint => {
                this.media = breakpoint;
            });
        }
    }
</script>