# SymptomOverflow

SymptomOverflow is a MERN stack application that provides a comprehensive platform for managing symptoms and diagnoses. It allows users to input symptoms and generate a ranked list of differential diagnoses.

## Features

- **Symptom Management:** Create, update, delete, and retrieve symptoms with associated medical terms and tags.
- **Diagnosis Management:** Create, update, delete, and retrieve diagnoses by major symptoms, associated symptoms, age, and organ system.
- **Differential Diagnoses:** Generate a ranked list of potential diagnoses based on the inputted symptoms.

## Technology Overview
- **MongoDB:** Utilizes MongoDB for data storage and retrieval.
- **Express:** An Express backend that handles API requests and serves the frontend.
- **React Frontend:** Multi-route React app for diagnoses, symptoms, adding a new diagnosis, adding a new symptom, and a page that for symptom input / differentials output.
- **API:** RESTful API endpoints for managing symptoms and diagnoses.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- React (if applicable)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marwan37/symptom-overflow.git
```

2. Navigate to the project directory and install dependencies:

```bash
cd symptom-overflow
npm install
```

3. Start the development server:

```bash
npm start
```

### Usage
Visit http://localhost:3000 in your browser to explore the application.

##### API Endpoints

**Symptoms:**

- GET `/api/symptoms`: Retrieve all symptoms.
- GET `/api/symptoms/:id`: Retrieve a symptom by ID.
- POST `/api/symptoms`: Create a new symptom.
- PATCH `/api/symptoms/:id`: Update a symptom.
- DELETE `/api/symptoms/:id`: Delete a symptom.

**Diagnoses:**

- GET `/api/diagnoses`: Retrieve all diagnoses.
- GET `/api/diagnoses/:id`: Retrieve a diagnosis by ID.
- POST `/api/diagnoses`: Create a new diagnosis.
- PATCH `/api/diagnoses/:id`: Update a diagnosis.
- DELETE `/api/diagnoses/:id`: Delete a diagnosis.

### License
This project is licensed under the MIT License.
