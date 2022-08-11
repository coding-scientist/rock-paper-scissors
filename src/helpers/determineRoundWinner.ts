import { Player } from '../enums/Player';
import { Plays } from '../enums/Plays';

export default function determineRoundWinner(userPlay: Plays, computerPlay: Plays): Player {
	if (userPlay === Plays.ROCK && computerPlay === Plays.ROCK) {
		return Player.TIE;
	} else if (userPlay === Plays.ROCK && computerPlay === Plays.PAPER) {
		return Player.COMPUTER;
	} else if (userPlay === Plays.ROCK && computerPlay === Plays.SCISSORS) {
		return Player.USER;
	} else if (userPlay === Plays.PAPER && computerPlay === Plays.ROCK) {
		return Player.USER;
	} else if (userPlay === Plays.PAPER && computerPlay === Plays.PAPER) {
		return Player.TIE;
	} else if (userPlay === Plays.PAPER && computerPlay === Plays.SCISSORS) {
		return Player.COMPUTER;
	} else if (userPlay === Plays.SCISSORS && computerPlay === Plays.ROCK) {
		return Player.COMPUTER;
	} else if (userPlay === Plays.SCISSORS && computerPlay === Plays.PAPER) {
		return Player.USER;
	}	else {
		return Player.TIE;
	}
}
