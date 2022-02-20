<template>
    <div class="block" @click="clickedBlock" v-if="showBlock">
        <h1>Click me!</h1>
    </div>
</template>

<script>
export default {
    name: 'Block',
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },
    props: ['startDelay'],
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.startDelay)
    },
    updated() {

    },
    unmounted() {
    },
    methods: {
        clickedBlock() {
            this.showBlock = false;
            this.stopTimer();
        },
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer);
            console.log(`user reacter after ${this.reactionTime}ms`);

            this.$emit("stopTime", this.reactionTime);
        },
    },

}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px 20px;
    background-color: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>