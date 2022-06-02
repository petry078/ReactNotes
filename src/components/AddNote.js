import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 99999999999;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	//fuction countWords()
	//fazer a bendita função de contar palavras


	return (
		<div className='note new'>
			<textarea
				rows= "9"
				cols= "auto"
				placeholder= "Make a note..."
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					<p className='word'>
						words /
					</p> 
				</small>
				<small>
					<p className='charCounter'>
						{noteText.length} 
					</p> 
				</small>
				<button className='save-btn' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;