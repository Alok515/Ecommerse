# E-commerce API Project - README

Welcome to the E-commerce API project repository! This project aims to provide a simple API for managing product data in a database. The API includes endpoints to add, retrieve, update, and delete product information. This README file will guide you through the project setup, endpoints usage, and basic information.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Add a New Product](#add-a-new-product)
  - [Retrieve All Products](#retrieve-all-products)
  - [Delete a Product](#delete-a-product)
  - [Update Product Quantity](#update-product-quantity)
- [Usage](#usage)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone 
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-api
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:8000` by default. You can configure the port in the `.env` file.

## API Endpoints

- **RootUrl** `http://localhost:8000/v1`

### Add a New Product

- **Endpoint:** `POST /products/create` 
- **Request Payload:**

  ```json
  {
    "name": "laptop",
    "quantity": 10
  }
  ```

- **Response:**

  ```json
  {
    "data": {
      "product": {
      "id": "product_id",
      "name": "laptop",
      "quantity": 10
    }
    }
  }
  ```

### Retrieve All Products

- **Endpoint:** `GET /products`
- **Response:**

  ```json
  [
    {
      "id": "product_id",
      "name": "laptop",
      "quantity": 10
    },
    // ... other products
  ]
  ```

### Delete a Product

- **Endpoint:** `DELETE /products/:id`
- **Response:**

  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

### Update Product Quantity

- **Endpoint:** `PUT /products/:id/update_quantity`
- **Request Payload:**

  ```json
  {
    "quantity": 20
  }
  ```

- **Response:**

  ```json
  {
    "message": "Product quantity updated successfully",
    "product": {
      "id": "product_id",
      "name": "laptop",
      "quantity": 20
    }
  }
  ```

## Usage

You can use any API testing tool (such as Postman or Insomnia) to interact with the API endpoints. Make sure to replace `:id` with the actual product ID when using the delete and update endpoints.