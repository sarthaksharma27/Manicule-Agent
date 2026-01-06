# API Documentation

## Overview

This document provides an overview of the API endpoints available in the application.

## Endpoints

### Upload

#### POST /upload/v2

This endpoint allows users to upload files. 

**Request Body:**
- `file`: The file to be uploaded (multipart/form-data).

**Responses:**
- `200 OK`: File uploaded successfully.
- `400 Bad Request`: Invalid file format or size.
- `500 Internal Server Error`: An error occurred while processing the upload.

### Other Endpoints

(Include other existing endpoints here as necessary.)