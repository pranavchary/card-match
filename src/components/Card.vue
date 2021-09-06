<template>
	<button type="button"
		class="btn btn-link card-button"
		:class="{clicked: flipped || solved, solved }"
		@click="() => { if (!solved && !disableClicks) onClick(card); }"
	>
		<div class="card-front">
			<img :src="card.image" alt="Card alt text" />
		</div>
		<div class="card-back">
			<img :src="`${publicPath}card-images/back_${back}.png`" alt="Card back alt" />
		</div>
	</button>
</template>

<script>
import { publicPath } from '../../vue.config';

export default {
	name: 'Card',
	props: {
		flipped: {
			type: Boolean,
			default: false,
		},
		solved: {
			type: Boolean,
			default: false,
		},
		disableClicks: {
			type: Boolean,
			default: false,
		},
		card: {
			type: Object,
			required: true,
		},
		back: String,
		onClick: {
			type: Function,
			default: () => {},
		},
	},
	data() {
		this.publicPath = publicPath;
	},
};
</script>

<style lang="scss" scoped>
	.card-button {
		display: flex;
		position: relative;
		height: 140px;
		width: 100%;
		transition: transform .75s;
		transform-style: preserve-3d;
		transform-origin: 50% 50%;

		img {
			width: 100%;
			height: 100%;
			margin: 0;
		}
	}

	.card-front,
	.card-back {
		height: 100%;
		width: 100%;
		position: absolute;
		backface-visibility: hidden;
		display: flex;
	}

	.card-front,
	.clicked {
		transform: rotateY( 180deg );
	}

	.solved {
		pointer-events: none;

		.card-front img {
			opacity: 0.4;
		}
	}
</style>
