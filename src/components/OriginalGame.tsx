import { FC } from 'react';
import Paper_Icon from '../assets/images/icon-paper.svg';
import Scissor_Icon from '../assets/images/icon-scissors.svg';
import Rock_Icon from '../assets/images/icon-rock.svg';
import Play from './Play';
import { Plays } from '../enums/Plays';
import Background_Triangle from '../assets/images/bg-triangle.svg'

const OriginalGame: FC = () => {
	return (
		<section className='play__icons'>
			<img src={Background_Triangle} className='original-play-icons__background--triangle' alt="Background image" />
			<Play
				backgroundICon={Paper_Icon}
				playType={Plays.PAPER}
			/>
			<Play
				backgroundICon={Scissor_Icon}
				playType={Plays.SCISSORS}
			/>
			<Play
				backgroundICon={Rock_Icon}
				playType={Plays.ROCK}
			/>
		</section>
	);
};

export default OriginalGame;
