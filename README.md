# Full Stack Developer Internship

## Description

Create a simple script to scrape Amazon product listings from the first page of search results for a given keyword.

## Prerequisites

Make sure you have the following prerequisites installed on your development machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Run the docker command:
    ```docker
    docker-compose up
2. Urls:  
    [front-end](http://localhost:5173)  

    endpoints:
    - example 1:
        - http://localhost:3000/api/scrape?keyword=chocolate  
        get the result of 5 pages for this keyword
    
    - example 2:
        - http://localhost:3000/api/scrape?keyword=chocolate&asin=B07NR8RP9V  
        finds a product with matches this asin in result of 5 pages for the keyword

    
    
