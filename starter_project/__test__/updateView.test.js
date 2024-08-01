/**
 * @jest-environment jsdom
 */
import { updateView } from "../src/client/js/formHandler"

document.body.innerHTML = '<div id="results"></div>';

test('updateView should update the #results div with sentiment analysis results', () => {
    const data = {
        agreement: 'AGREEMENT',
        subjectivity: 'OBJECTIVE',
        sentence_list: [{ text: 'This is a sample sentence.' }],
        polarity_terms: [
            { text: 'good', score_tag: 'P+' },
            { text: 'bad', score_tag: 'N-' }
        ]
    };

    updateView(data);

    const div = document.getElementById('results');
    expect(div.innerHTML).toContain('The sentiments detected in the text are in AGREEMENT.');
    expect(div.innerHTML).toContain('The text is OBJECTIVE.');
    expect(div.innerHTML).toContain('This is a sample sentence.');
    expect(div.innerHTML).toContain('<li>good (P+)</li>');
    expect(div.innerHTML).toContain('<li>bad (N-)</li>');
});
