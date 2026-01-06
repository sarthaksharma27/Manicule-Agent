# API Documentation

## Overview

This document provides an overview of the API endpoints available in the application.

## Endpoints

### Upload

#### POST /upload/v2

This endpoint allows users to upload files. 

**Request Body:**
- `file`: The file to be uploaded (multipart/form-data).

**Response:**
- `200 OK`: Returns a success message and file details.
- `400 Bad Request`: Returns an error message if the upload fails.

### Other Endpoints

(Additional endpoints will be documented here as they are added.)