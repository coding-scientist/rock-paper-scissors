import { FC } from "react";

interface Props {
	score: number;
}

const Scoreboard: FC<Props> = props => {
	return (
		<div className="scoreboard">
			<div className="game-mode">
				<h2>Rock</h2>
				<h2>Paper</h2>
				<h2>Scissors</h2>
			</div>
			<div className="score">
				<p>score</p>
				<h2 className="score__number">{props.score}</h2>
			</div>
		</div>
	);
}

export default Scoreboard;