import { FC } from 'react';
import Rock_Icon from '../assets/images/icon-rock.svg';
import Play from './Play';

const BonusGame: FC = props => {
	return (
		<>
			<Play backgroundICon={Rock_Icon} />
		</>
	);
};

export default BonusGame;
