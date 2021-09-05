<template>
	<div class="container text-center" :class="{'d-none': selectedSuit !== undefined}">
		<h3>Select the card back you would like to play with</h3>
		<div class="row my-3">
			<div class="col-6 mb-2 mb-sm-0 col-sm-2 text-center" v-for="back in cardBacks" :key="`card-back_${back.value}`">
				<button type="button" class="btn btn-link card-button" @click="() => setCardBack(back.value)">
				<img
					:src="back.image"
					class="card-image"
					:class="{'selected-back': selectedBack === back.value}"
					:alt="`${capitalize(back.value)} card back`"
				/>
				</button>
			</div>
		</div>
		<h3>Select a suit of cards to play the game with</h3>
		<div class="row my-3">
			<div class="col-6 col-sm-3 mb-2 mb-sm-0 text-center">
				<button type="button" class="btn btn-link card-button" @click="() => setSuit('spades')">
					<img :src="spadeImg" class="card-image" alt="Ace of Spades" />
				</button>
			</div>
			<div class="col-6 col-sm-3 mb-2 mb-sm-0 text-center">
				<button type="button" class="btn btn-link card-button" @click="() => setSuit('clubs')">
					<img :src="clubImg" class="card-image" alt="Ace of Clubs" />
				</button>
			</div>
			<div class="col-6 col-sm-3 mb-2 mb-sm-0 text-center">
				<button type="button" class="btn btn-link card-button" @click="() => setSuit('hearts')">
					<img :src="heartImg" class="card-image" alt="Ace of Hearts" />
				</button>
			</div>
			<div class="col-6 col-sm-3 mb-2 mb-sm-0 text-center">
				<button type="button" class="btn btn-link card-button" @click="() => setSuit('diamonds')">
					<img :src="diamondImg" class="card-image" alt="Ace of Diamonds" />
				</button>
			</div>
		</div>
		<div class="text-center">
			<button type="button" class="btn btn-link" @click="() => setSuit('all')">Or click here to play with all suits</button>
		</div>
	</div>
	<div class="container" :class="{'d-none': selectedSuit === undefined}">
		<game :suit="selectedSuit" :back="selectedBack" :newGame="newGame" />
	</div>
</template>

<script>
import Game from './components/Game.vue';
import { cardBacks } from './assets/cards';

export default {
	name: 'App',
	components: { Game },
	data() {
		return {
			spadeImg: '/card-images/AS.png',
			clubImg: '/card-images/AC.png',
			heartImg: '/card-images/AH.png',
			diamondImg: '/card-images/AD.png',
			cardBacks,
			selectedBack: localStorage.getItem('bg_pref') || 'blue',
			selectedSuit: undefined,
		};
	},
	methods: {
		capitalize(text) {
			const firstChar = text[0].toUpperCase();
			return `${firstChar}${text.slice(1)}`;
		},
		setCardBack(selectedBack) {
			localStorage.setItem('bg_pref', selectedBack);
			this.selectedBack = selectedBack;
		},
		setSuit(selectedSuit) {
			this.selectedSuit = selectedSuit;
		},
		newGame() {
			this.selectedBack = localStorage.getItem('bg_pref') || 'blue';
			this.selectedSuit = undefined;
		},
	},
};
</script>

<style lang="scss">
	@import 'node_modules/bootstrap/scss/bootstrap';
	#app {
		margin-top: 1rem;

		.card-image {
			height: auto;
			max-width: 100px;
			border-radius: 8px;
		}

		.card-button {
			padding: 0;
			border: none;
		}

		.selected-back {
			box-shadow: 0 0 5px 3px $primary;
		}

		@media (min-width: 768px) {
			margin-top: 2rem;
		}
	}
</style>
