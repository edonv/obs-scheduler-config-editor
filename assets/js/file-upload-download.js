let filename = 'configuration.json';

/**
 * @this {HTMLInputElement} 
 * @param {HTMLElementEventMap['change']} event
 */
async function uploaded(event) {
    // Makes sure to only read the file if there is a value
    if (this.value == '') {
        return;
    }
    const newFile = this.files?.item(0);
    if (!newFile) {
        return;
    }

    filename = newFile.name;
    const fileContents = await newFile.text();
    const fileJSON = JSON.parse(fileContents);

    // Update JSONEditor's value
    editor.setValue(fileJSON);

    // Reset the value to "no file selected", so that re-selecting the same file would still fire this event callback
    this.value = '';
}

function download(event) {
    const jsonString = document.getElementById('input').value;

    const blob = new Blob(
        [jsonString],
        { type: 'application/json;charset=utf-8' },
    );

    const a = document.createElement('a');
    a.download = filename;
    a.href = URL.createObjectURL(blob);
    a.click();
}

// Set up upload/download buttons
const uploadBtn = document.getElementById('upload');
const downloadBtn = document.getElementById('download');

uploadBtn.addEventListener('change', uploaded);
downloadBtn.addEventListener('click', download);
