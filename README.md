# Express Mongoose Node Advance CRUD

# Node Mongoose Express CRUD Mastery

Goal: Use TypeScript as the programming language to create a Node.js Express application that integrates MongoDB and Mongoose for managing bike orders and stores. Make sure data integrity is maintained by using Zod for validation.

## Features

- Feature 1: Create a BIKE.
- Feature 2: Get all BIKES.
- Feature 3: Get specific BIKE by ID.
- Feature 4: Update BIKE details data.
- Feature 5: Delete BIKE by ID.
- Feature 6: Create a BIKE Order.
- Feature 7: Get revenue from all orders.


## Live Server 
 ```bash
   https://advance-backend-task-2-habibb2r.vercel.app/

   ```

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/habibb2r/Advance-Backend-TASK-2

   ```

2. Navigate to the project directory:

   ```bash
   npm i
   # or
   yarn
   ```

3. First, run the development server:
   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

## DotENV Configuration

```bash
  Node_env = development
  Port = 5000
  DBURL=mongodb://localhost:27017
  
```
`

## API Reference

#### 1. Create a Bike

```http
  POST /api/products
```

- Request Body:

```json
{
  "name": "Xtreme Mountain Bike",
  "brand": "Giant",
  "price": 1200,
  "category": "Mountain",
  "description": "A high-performance bike built for tough terrains.",
  "quantity": 50,
  "inStock": true
}
```

- Response:

```json
{
  "message": "Bike created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

#### 2. Get All Bikes

```http
  GET /api/products
```
```http
  GET /api/products?searchTerm=category. searchTerm can be name, brand, or category.
```

- Response

```json
{
  "message": "Bikes retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Xtreme Mountain Bike",
      "brand": "Giant",
      "price": 1200,
      "category": "Mountain",
      "description": "A high-performance bike built for tough terrains.",
      "quantity": 50,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    }
    // ... rest data
  ]
}
```

#### 3. Get a Specific Bike

```http
  GET /api/products/:productId
```

- Response

```json
{
  "message": "Bike retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

#### 4. Update a Bike

```http
  PUT /api/products/:productId
```

- Request Body:

```json
{
  "price": 1300,
  "quantity": 30
}
```

- Response

```json
{
  "message": "Bike updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1300, // Price updated
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 30, // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z" // Updated timestamp
  }
}
```

#### 5. Delete a Bike

```http
  DELETE /api/products/:productId
```

- Response

```json
{
  "message": "Bike deleted successfully",
  "status": true,
  "data": {}
}
```

#### 6. Order a Bike


```http
  POST /api/orders
```

- Request Body:

```json
{
  "email": "habibb2r@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 2400
}
```

- Response:

```json
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "habibb2r@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 2400,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
```
#### 7. Calculate Revenue from Orders (Aggregation)


```http
  GET /api/orders/revenue
```


- Response:

```json
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 3600 // Total revenue calculated from all orders
  }
}
```

 