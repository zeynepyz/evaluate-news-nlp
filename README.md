# NLP Article Analyzer

This project is a Natural Language Processing (NLP) application that analyzes the content of articles or blog posts using the MeaningCloud API. The project involves setting up and configuring Webpack, creating a responsive design with Sass, making API requests, and implementing service workers.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Setup](#project-setup)
- [API Setup](#api-setup)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Built With](#built-with)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download Node.js [here](https://nodejs.org/).

### Installation

1. Clone the repo:
    ```sh
    git clone https://github.com/yourusername/evaluate-news-nlp.git
    ```

2. Navigate to the project directory:
    ```sh
    cd starter_project
    ```

3. Install NPM packages:
    ```sh
    npm install
    ```

4. Create a `.env` file in the root of your project and add your MeaningCloud API key:
    ```
    MEANINGCLOUD_API_KEY=your_api_key_here
    ```

5. Make sure `.env` is added to your `.gitignore` file to keep your API key secure:
    ```
    # .gitignore
    .env
    ```

## Project Setup

This project is set up using Webpack. Here are the key features of the project setup:

- **Webpack Configuration**: Bundles JavaScript files, compiles Sass to CSS, and handles image assets.
- **Sass Styles**: Uses Sass for styling to create a responsive design.
- **Service Workers**: Implements service workers for offline functionality.

## API Setup

This project uses the MeaningCloud API for analyzing the sentiment of articles and blog posts.

1. Sign up for a MeaningCloud API key [here](https://www.meaningcloud.com/developer/sentiment-analysis).

2. Your `callMeaningCloud` function should look like this:
    ```javascript
    async function callMeaningCloud(blogUrl) {
        const formData = new FormData();
        formData.append("key", process.env.MEANINGCLOUD_API_KEY);
        formData.append("language", "en");
        formData.append("url", blogUrl);

        const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        });

        return await response.json();
    }

    export { callMeaningCloud };
    ```

## Usage

1. Start the server:
    ```sh
    npm run start
    ```

2. Open your browser and navigate to `http://localhost:8080`.

3. Enter a URL of an article or blog post in the input field and click "Analyze".

4. View the sentiment analysis results on the page.

## Testing

This project includes Jest tests to ensure the functionality of key features.

1. Run the tests:
    ```sh
    npm run test
    ```


### Netlify Deployment

1. Create a new site on Netlify and link your GitHub repository.

2. Configure the build settings:
    - Build Command: `npm run build`
    - Publish Directory: `dist`

3. Deploy the site.

## Built With

- [Webpack](https://webpack.js.org/)
- [Sass](https://sass-lang.com/)
- [MeaningCloud API](https://www.meaningcloud.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
