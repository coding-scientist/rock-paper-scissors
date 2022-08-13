import { FC, useContext } from 'react';
import { globalContext } from '../context/GlobalContext';

interface Props {
	backGroundImage: string;
}

const RulesModal: FC<Props> = props => {
	const { setModalIsOpen } = useContext(globalContext);

	return (
		<div className='rules-modal'>
			<h2>RULES</h2>
			<img
				className='rules-modal__background-image'
				src={props.backGroundImage}
				alt='An image that shows the rules of how the game works'
			/>
			<button className='exit-modal-btn' onClick={() => setModalIsOpen(false)}>
				x
			</button>
		</div>
	);
};

export default RulesModal;
