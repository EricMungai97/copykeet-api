# Copykitt AI Backend API

Copykitt AI Backend API is a [Python](https://www.python.org/) project built with [FastAPI](https://fastapi.tiangolo.com/) and [OpenAI](https://platform.openai.com/docs/introduction) API that helps businesses and individuals generate branding snippets and keywords for their brand. The project uses advanced natural language processing techniques to generate custom content based on user input.

## Features

Copykitt AI Backend API provides users with the following features:

1. Branding snippet generation: Generates upbeat and engaging branding snippets based on user input.

2. Related keyword generation: Generates a list of related keywords that can be used to enhance branding efforts.
3. FastAPI: A modern, fast web framework for building APIs.
4. OpenAI API: An advanced AI-powered natural language processing tool that leverages GPT technology.

## Getting Started

1. Clone the repository: `git clone `

2. Install dependencies: `cd copykitt-api
pip install -r requirements.txt
`

3. Set environment variables: `export OPENAI_API_KEY=<your-api-key>`

4. Start the server: `uvicorn copykitt_api:app --reload`

You can now start making API requests to Copykitt AI Backend API.


## API Endpoints

Copykitt AI Backend API provides the following API endpoints:

1. `/`: A welcome message to confirm that the API is running.
2. `/generate_snippet`: Generates an upbeat branding snippet based on the user input.

3. `/generate_keywords`: Generates a list of related keywords based on the user input.

4.`/generate_snippets_and_keywords`: Generates both branding snippets and related keywords based on the user input.

## Contributing

Copykitt AI Backend API is an open-source project and welcomes contributions from the community.
