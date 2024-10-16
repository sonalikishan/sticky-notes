
let notes = JSON.parse(localStorage.getItem('notes')) || [];


const colors = ['color-yellow', 'color-green', 'color-blue', 'color-pink', 'color-purple'];


function renderNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';  

    notes.forEach((note, index) => {
        const newNote = document.createElement('div');
        newNote.classList.add('note', note.color);
        
        const noteContent = document.createElement('p');
        noteContent.textContent = note.text;

        const closeBtn = document.createElement('span');
        closeBtn.textContent = 'X';
        closeBtn.classList.add('close-btn');
        closeBtn.addEventListener('click', function() {
            removeNote(index);
        });

        newNote.appendChild(noteContent);
        newNote.appendChild(closeBtn);
        notesContainer.appendChild(newNote);
    });
}


document.getElementById('add-note-btn').addEventListener('click', function() {
    const noteText = document.getElementById('new-note-input').value;
    if (noteText) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const newNote = { text: noteText, color: randomColor };

        notes.push(newNote);  
        localStorage.setItem('notes', JSON.stringify(notes));  // Save to local storage
        renderNotes(); 
        document.getElementById('new-note-input').value = '';  // Clear input field
    }
});


function removeNote(index) {
    notes.splice(index, 1);  
    localStorage.setItem('notes', JSON.stringify(notes));  
    renderNotes();  
}    //remove functionality


document.addEventListener('DOMContentLoaded', renderNotes); 
