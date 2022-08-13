import { FC } from 'react';
import Background_Triangle from '../assets/images/bg-triangle.svg';
import Paper_Icon from '../assets/images/icon-paper.svg';
import Rock_Icon from '../assets/images/icon-rock.svg';
import Scissor_Icon from '../assets/images/icon-scissors.svg';
import { originalPlays } from '../enums/originalPlays';
import Play from './Play';

const OriginalGame: FC = () => {
	return (
		<section className='play__icons'>
			<img src={Background_Triangle} className='original-play-icons__background--triangle' alt="Background image" />
			<Play
				backgroundICon={Paper_Icon}
				playType={originalPlays.PAPER}
			/>
			<Play
				backgroundICon={Scissor_Icon}
				playType={originalPlays.SCISSORS}
			/>
			<Play
				backgroundICon={Rock_Icon}
				playType={originalPlays.ROCK}
			/>
		</section>
	);
};

export default OriginalGame;
