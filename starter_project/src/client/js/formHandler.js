// Replace checkForName with a function that checks the URL
import { urlChecking } from './urlChecker'
const serverURL = 'https://localhost:8000/api';
const form = document.getElementById('urlForm');

document.addEventListener('DOMContentLoaded', function() {
    form.addEventListener('submit', handleSubmit);
});

async function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;

    if (urlChecking(formText)) {
        try {
            const apiKey = process.env.API_KEY;
            const response = await callAPI({
                method: 'POST',
                body: createFormData(apiKey, formText),
                redirect: 'follow'
            });
            if (response.status.code !== '0') {
                throw new Error(`API Error: ${response.status.msg}`);
            }
            updateView(response);
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Invalid URL');
    }
}

function createFormData(apiKey, url) {
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("url", url);
    formdata.append("lang", "en");
    return formdata;
}

function updateView(data) {
    const polarityTerms = data.polarity_terms.map(term => `<li>${term.text} (${term.score_tag})</li>`).join('');
    const div = document.getElementById('results');
    div.innerHTML = `
        <p>The sentiments detected in the text are in ${data.agreement}.</p>
        <p>The text is ${data.subjectivity}.</p>
        <p>${data.sentence_list[0].text}</p>
        <p>Polarity Terms:</p>
        <ul>${polarityTerms}</ul>
    `;
}

async function callAPI(options) {
    try {
        const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return data;
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    console.error('An error occurred:', error);
    const div = document.getElementById('results');
    div.innerHTML = `
        <p>An error occurred: ${error.message}</p>
    `;
}

export { handleSubmit, updateView, callAPI, createFormData };
