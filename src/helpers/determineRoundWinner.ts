import { originalPlays } from '../enums/originalPlays';
import { playerTypes } from '../enums/playerTypes';

export default function determineRoundWinner(
	userPlay: originalPlays,
	computerPlay: originalPlays
): playerTypes {
	if (userPlay === originalPlays.ROCK && computerPlay === originalPlays.ROCK) {
		return playerTypes.TIE;
	} else if (
		userPlay === originalPlays.ROCK &&
		computerPlay === originalPlays.PAPER
	) {
		return playerTypes.COMPUTER;
	} else if (
		userPlay === originalPlays.ROCK &&
		computerPlay === originalPlays.SCISSORS
	) {
		return playerTypes.USER;
	} else if (
		userPlay === originalPlays.PAPER &&
		computerPlay === originalPlays.ROCK
	) {
		return playerTypes.USER;
	} else if (
		userPlay === originalPlays.PAPER &&
		computerPlay === originalPlays.PAPER
	) {
		return playerTypes.TIE;
	} else if (
		userPlay === originalPlays.PAPER &&
		computerPlay === originalPlays.SCISSORS
	) {
		return playerTypes.COMPUTER;
	} else if (
		userPlay === originalPlays.SCISSORS &&
		computerPlay === originalPlays.ROCK
	) {
		return playerTypes.COMPUTER;
	} else if (
		userPlay === originalPlays.SCISSORS &&
		computerPlay === originalPlays.PAPER
	) {
		return playerTypes.USER;
	} else {
		return playerTypes.TIE;
	}
}
