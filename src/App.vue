<template>
	<div class="mobile-center">
		<div>
			<h1>NikkieDev Reaction Timer</h1>
			<!-- <button @click="getLeaderboard">Click me</button> -->
			<button v-if="showStart" @click="startGame">Start</button>
			<Block v-if="this.isPlaying" :startDelay="this.startDelay" @stopTime="stopGame"></Block>
			<Results v-if="showScore" :totalScore="this.score"></Results>
		</div>
		<div class="leaderboard">
			<Leaderboard></Leaderboard>
		</div>
	</div>
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';
import Leaderboard from './components/Leaderboard.vue';

export default {
	name: 'App',
	components: { Block, Results, Leaderboard },
	props: ['reactionTime'],
	data() {
		return {
			isPlaying: false,
			startDelay: null,
			score: null,
			showScore: false,
			showStart: true,
		}
	},
	methods: {
		startGame() {
			this.startDelay = 500 + Math.random(0, 1) * 5000;
			this.showScore = false;
			this.showStart = false;

			this.isPlaying = true;
			console.log("started game");
		},
		stopGame(endTime) {
			console.log("game finished");
			this.score = endTime;
			this.showScore = true;
			this.showStart = true;

			this.isPlaying = false;
		},
	},
}
</script>
<style>
body {
	background-color: white;
	color: black;
}
h1 {
	font-size: 32px;
}

button {
	background-color: #1BD485;
	border: none;
	border-radius: 5px 5px;
    height: 40px;
    width: 75px;
    cursor: pointer;
}

.leaderboard {
	margin-top: 5.5vw;
	border: 1px solid black;
	text-align: center;
}

#app {
	margin-top: 60px;
}
</style>