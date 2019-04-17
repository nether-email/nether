<template>
    <div id="home">
        <section id="hero" class="container w-1/5 justify-center">
            <Logo/>

            <div id="about" class="Card">
                <p>
                <strong>Nether</strong>, an open source successor
                to Google Inbox. Build in the open, using open source
                technologies like <a href="https://laravel.com" target="_blank">Laravel</a>
                and <a href="https://vuejs.org" target="_blank">VueJS</a>.
                </p>
            </div>
        </section>
    </div>
</template>
<script>
    import Logo from './../../../shared/Assets/Logo';

    export default {
        components: {Logo}
    }
</script>

<style lang="scss">
    #hero {
        @apply .flex .flex-col .my-4;
    }
</style>
