<template>
    <div>    
        <h1>Leaderboard</h1>
        <div v-if="scoreBoardList != null">
            <p v-for="score in scoreCount">Total saved scores: {{ score }}</p>
            <table width="50%;" class="table-center">
                <tr>
                    <th>id</th>
                    <th>user</th>
                    <th>score (ms)</th>
                </tr>
                <tr v-for="score in scoreBoardList">
                    <td>{{ score.id }}</td>
                    <td>{{ score.username }}</td>
                    <td>{{ score.score }}</td>
                </tr>
            </table>
            <p>Lower score is better</p>
        </div>
        <div v-else>
            <p>No saved scores yet!</p>
        </div>
        <div style="margin-top: 3.5vw;">
            <button style="margin-bottom: 1vw;" @click="getLeaderboard" class="button">Refresh</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import App from '@/App.vue';

export default {
  components: { App },
    name: "leaderboard",
    data() {
        return {
            scoreBoardList: null,
            scoreCount: null,
        }
    },
    methods: {
        getLeaderboard() {
			axios.post('https://api.nikkiedev.com/node-nikkiedev/v1/server.php', {request: 1})
            .then((response) => {
				this.scoreBoardList = response.data;
                console.log("Fetched scoreboard");
			}).catch((error) => {
				console.log(error);
			});
        },
        getScoreCount() {
            axios.post("https://api.nikkiedev.com/node-nikkiedev/v1/server.php", {request: 3})
            .then((response) => {
                this.scoreCount = response.data;
                console.log("Fetched saved scores amount");
            }).catch((err) => {
                console.error(err);
            })
        }
    },
    mounted() {
		this.getLeaderboard();
        this.getScoreCount();
	},
}
</script>

<style>

</style>