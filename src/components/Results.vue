<template>
    <p>Your reaction time was {{ totalScore }} ms!</p>
    <div v-if="showScoreSubmit" style="margin-top: 5.5vw">
        <input type="text" class="login-input" v-model="username" placeholder="Enter your name" maxlength="12" style="margin-right: 15px;" required>
        <button class="button" @click="submitScore">Submit</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Results',
    props: ['totalScore'],
    data() {
        return {
            showScoreSubmit: true,
            username: '',
        }
    },
    methods: {
        submitScore() {
            axios.post("https://api.nikkiedev.com/node-nikkiedev/v1/server.php", {request: 2, username: this.username, score: this.totalScore})
            .then((response) => {
                console.log(response);
                this.showScoreSubmit = false;
            }).catch((err) => {
                console.error(err);
            });
        }
    },
}
</script>

<style scoped>
p {
    font-size: 24px;
    color: #3B8F6B;
    font-weight: 800;
}
</style>