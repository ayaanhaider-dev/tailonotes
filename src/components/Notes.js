import { Trash } from 'react-bootstrap-icons'

const Notes = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<Trash
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size={20}
				/>
			</div>
		</div>
	);
};

export default Notes;
