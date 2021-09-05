<template>
	<div class="row">
		<div class="col text-center d-none d-sm-block">
			<button type="button" class="btn btn-outline-primary" @click="resetGame" :disabled="gameBeat">
				Reset
			</button>
		</div>
		<div class="col-12 col-sm text-center">
			<h2>Score: {{score.toLocaleString()}}</h2>
		</div>
		<div class="col text-center d-none d-sm-block">
			<button type="button" class="btn btn-primary" @click="onNewGame">
				New Game
			</button>
		</div>
		<div class="col-6 d-block d-sm-none">
			<button
				type="button"
				class="btn btn-outline-primary btn-block my-3"
				@click="resetGame"
				:disabled="gameBeat"
			>
				Reset
			</button>
		</div>
		<div class="col-6 d-block d-sm-none">
			<button type="button" class="btn btn-primary btn-block my-3" @click="onNewGame">
				New Game
			</button>
		</div>
	</div>
	<h3 class="text-success text-center" :class="{invisible: !gameBeat}">You win!</h3>
	<div class="row">
		<div
			class="col-4 col-sm-3 col-md-2 col-lg-1 my-3 text-center"
			v-for="card in cardSet"
			:key="`card_${card.value}-${card.id}`"
		>
			<card
				:back="back"
				:card="card"
				:onClick="onCardClick"
				:disableClicks="disableClicks"
				:flipped="flipped.includes(card.id)"
				:solved="solved.includes(card.id)"
				/>
		</div>
	</div>
</template>

<script>
import Card from './Card.vue';
import {
	allSpades,
	allClubs,
	allHearts,
	allDiamonds,
	allCards,
} from '../assets/cards';

export default {
	name: 'Game',
	components: { Card },
	props: {
		suit: {
			type: String,
			required: true,
		},
		back: {
			type: String,
			default: 'blue',
		},
		newGame: {
			type: Function,
			default: () => {},
		},
	},
	data() {
		this.timer = null;
		this.ms = 0;
		return {
			score: 0,
			flipped: [],
			solved: [],
			disableClicks: false,
			timerActive: false,
			gameBeat: false,
		};
	},
	watch: {
		timerActive(active) {
			if (active) {
				this.timer = setInterval(() => { this.ms++; }, 1);
			} else {
				clearInterval(this.timer);
				this.timer = null;
				if (this.ms > 0) {
					const points = Math.ceil(1000000 / this.ms);
					this.score += points;
					this.ms = 0;
				}
			}
		},
		solved(current) {
			if (current.length === this.cardSet.length) {
				this.gameBeat = true;
				setTimeout(() => {
					clearTimeout();
					if (window.document.documentMode) {
						// documentMode only exists in IE
						document.documentElement.scrollTop = 0;
					} else {
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}
				}, 1000);
			}
		},
	},
	computed: {
		cardSet() {
			let set = [];
			switch (this.suit) {
			case 'spades':
				set = allSpades;
				break;
			case 'clubs':
				set = allClubs;
				break;
			case 'hearts':
				set = allHearts;
				break;
			case 'diamonds':
				set = allDiamonds;
				break;
			default:
				set = allCards;
				break;
			}
			const doubled = set.concat(set);
			const result = [];
			for (let i = doubled.length - 1; i >= 0; i--) {
				const idx = Math.floor(Math.random() * (i + 1));
				const [element] = doubled.splice(idx, 1);
				result.push({ ...element, id: i });
			}
			return result;
		},
	},
	methods: {
		resetGame() {
			this.score = 0;
			this.flipped = [];
			this.solved = [];
			this.disableClicks = false;
			this.timerActive = false;
			this.gameBeat = false;
			if (this.timer !== null) {
				clearInterval(this.timer);
				this.timer = null;
			}
			this.ms = 0;
		},
		onNewGame() {
			this.newGame();
			this.resetGame();
		},
		onCardClick(card) {
			if (this.flipped.length === 0) {
				// No cards flipped
				this.flipped = [card.id];
				this.timerActive = true;
			} else if (!this.flipped.includes(card.id)) {
				// One card already flipped
				this.flipped = [...this.flipped, card.id];
				const firstCard = this.cardSet.find((c) => c.id === this.flipped[0]);
				if (firstCard.value === card.value) {
					// Cards match
					this.solved = [...this.solved, ...this.flipped];
					this.flipped = [];
					this.timerActive = false;
				} else {
					this.disableClicks = true;
					setTimeout(() => {
						clearTimeout();
						this.disableClicks = false;
						this.flipped = [];
					}, 1000);
				}
			}
		},
	},
};
</script>
