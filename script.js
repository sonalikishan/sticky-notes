function renderNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';  

    notes.forEach((note, index) => {
        const newNote = document.createElement('div');
        newNote.classList.add('note', note.color);
        
        const noteContent = document.createElement('p');
        noteContent.textContent = note.text;


        newNote.appendChild(noteContent);
      
        notesContainer.appendChild(newNote);
    });
}


document.getElementById('add-note-btn').addEventListener('click', function() {
    const noteText = document.getElementById('new-note-input').value;
    if (noteText) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const newNote = { text: noteText, color: randomColor };

        notes.push(newNote);  
       
        renderNotes(); 
        document.getElementById('new-note-input').value = '';  // Clear input field
    }
});

document.addEventListener('DOMContentLoaded', renderNotes);