# AI Thing with DALL-E

AI Thing with DALL-E is an application built using Vite, TypeScript, Tailwind CSS, MongoDB, Cloudinary, and OpenAI that
demonstrates the use of machine learning models for image generation. The application allows users to generate images
using OpenAI's DALL-E and share and download them.

## Prerequisites

Before running AI Thing with DALL-E, you need to ensure that the following requirements are met:

- Node.js is installed on your system
- NPM (Node Package Manager) is installed on your system
- A Cloudinary account is set up with API credentials
- An OpenAI account is set up with API credentials
- A MongoDB account is set up along with a project, database, and cluster

## Getting Started

To get started with AI Thing with DALL-E, follow the steps below:

```bash
git clone https://github.com/WongDarren/ai-thing.git
cd ai-thing
npm install
```

You will need to perform `npm install` for both the `client` and `server`.

Create a `.env` file in the `server` directory of the project and add your MongoDB, Cloudinary, and OpenAI API
credentials in the following format:

```dotenv
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
OPENAI_API_KEY=your_api_key
MONGODB_URL=your_mongo_db_url
```

## Usage

Start the server by running the command `npm run start` in the `server` directory.

Start the client by running the command `npm run dev` in the `client` directory.

Open a web browser and navigate to the provided localhost port by `Vite`.

Generate an image using the DALL-E model by providing a name and a prompt.

Upload the image by pressing `Share with the commmunity`.

Search for your image in the Home page.
