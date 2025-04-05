# Rentiful - Modern Rental Management Platform

Rentiful is a comprehensive rental management platform designed to connect property managers with potential tenants while streamlining the entire rental process from property listings to applications and management.

## 🏠 Overview

Rentiful provides a seamless experience for both property managers and tenants with a feature-rich platform built on modern web technologies. The platform offers intuitive property search, detailed listings, application processing, and rental management tools.

## ✨ Features

### For Tenants

- **Advanced Property Search**: Find properties by location, price range, amenities, and more
- **Favorites**: Save and track properties of interest
- **Application Management**: Apply for properties and track application status
- **Residence Management**: Access important information about current residences

### For Property Managers

- **Property Listings**: Create and manage detailed property listings with images and specifications
- **Application Processing**: Review and manage tenant applications efficiently
- **Property Management**: Track and maintain property information and availability
- **Analytics Dashboard**: Gain insights into listing performance and tenant interests

## 🚀 Technology Stack

### Frontend

- **Framework**: Next.js with React
- **State Management**: Redux with RTK Query
- **Styling**: Tailwind CSS v4
- **Authentication**: AWS Cognito
- **Maps & Geolocation**: Mapbox
- **Motion & Animations**: Framer Motion
- **UI Components**: Custom components with shadcn/ui principles

### Backend

- **Runtime**: Node.js with Express
- **Database**: PostgreSQL with Prisma ORM
- **Storage**: AWS S3 for image storage, AWS RDS for PostgreSQL
- **Geospatial Features**: PostGIS extension

### Cloud Services

- **Authentication & User Management**:
  - AWS Cognito for user authentication, authorization, and user pools
  - AWS Amplify for frontend authentication integration
- **Storage**:
  - AWS S3 for storing property images and documents
  - AWS RDS for PostgreSQL database hosting
- **Compute**:
  - AWS EC2 for application hosting
- **Networking**:
  - Amazon VPC for secure network isolation
  - Public and Private Subnets for security architecture
  - Security Groups for instance-level network access control
  - Route Tables for managing network traffic paths
  - API Gateway for RESTful API management

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL with PostGIS extension
- AWS account
- Mapbox account

### Installation

1. Clone the repository

```
git clone https://github.com/yourusername/Rentiful.git
cd Rentiful
```

2. Set up the server

```
cd server
npm install
cp .env.example .env
```

- Edit the .env file with your database and AWS credentials.

```
npm run prisma:generate
npx prisma migrate dev --name init
npm run seed
npm run dev
```

3. Set up the client

```
cd ../client
npm install
cp .env.example .env
```

- Edit the .env file with your AWS and Mapbox credentials.

```
npm run dev
```

## 📁 Project Structure

```
Rentiful/
├── client/                  # Frontend Next.js application
│   ├── public/              # Static assets
│   └── src/                 # Source code
│       ├── app/             # Next.js app router pages
│       ├── components/      # React components
│       ├── state/           # Redux state management
│       └── styles/          # Global styles
└── server/                  # Backend Express application
    ├── prisma/              # Prisma schema and migrations
    └── src/                 # Source code
        ├── controllers/     # Route controllers
        ├── middlewares/     # Express middlewares
        ├── routes/          # API routes
        └── index.ts         # Entry point
```

## 🧱 AWS Architecture

A robust AWS architecture using EC2, API Gateway, RDS, and S3 within a VPC setup.

### 📦 Components

#### 👤 Client

- The frontend Next.js application hosted on Amplify
- Communicates with backend services through API Gateway
- Uses AWS Amplify for frontend authentication integration

#### 🔐 Amazon Cognito

- Manages user authentication, authorization, and user pools
- Handles role-based access (tenant/manager roles)
- Issues JWT tokens for secure API access

#### 🗂️ Amazon S3

- Stores property images and documents
- Enables secure file uploads with pre-signed URLs
- Provides scalable and durable storage for media assets

#### 🌐 API Gateway

- Acts as the entry point for RESTful API requests from the client
- Routes requests to appropriate EC2 instances
- Provides API versioning, monitoring, and throttling

#### 💻 Amazon EC2

- Hosts the Node.js/Express backend application
- Processes business logic and database operations
- Resides in public subnet with access to the internet

#### 🛢️ Amazon RDS (PostgreSQL)

- Stores relational data securely in a private subnet
- Hosts PostgreSQL database with PostGIS extension
- Only accessible from EC2 instances via security groups

### 🏗️ Networking

#### 🔒 Virtual Private Cloud (VPC)

- Isolated network environment with custom IP address range
- Provides secure communication between AWS resources
- Separates resources into public and private subnets

#### Public Subnet

- Contains EC2 instances running the backend application
- Has route to Internet Gateway for external traffic
- Protected by security groups and NACLs

#### Private Subnet

- Houses RDS database instances
- No direct route to the internet for enhanced security
- Resources only accessible from within the VPC

#### Security Groups

- Act as virtual firewalls for EC2 and RDS instances
- Control inbound and outbound traffic at the instance level
- Restrict database access to only necessary application servers

#### Route Tables

- Define traffic paths between subnets and gateways
- Direct internet-bound traffic to Internet Gateway
- Keep private subnet traffic within the VPC

### ✅ Benefits

- **Secure**: Database isolated in private subnet with controlled access
- **Scalable**: EC2 instances can be scaled horizontally with load balancers
- **Reliable**: Multi-AZ RDS deployment for high availability
- **Optimized**: Efficient resource allocation for cost management

## 🔒 Authentication

Rentiful uses AWS Cognito for secure user authentication with support for:

- Email/password authentication
- User role management (tenant/manager)
- JWT token-based API access

## 🗺️ Geolocation Features

The platform uses Mapbox for:

- Property location display
- Location-based property search
- Geocoding of addresses

## 📦 Database Schema

The database is powered by PostgreSQL with PostGIS extension for geographic data. Key models include:

- Users (managers and tenants)
- Properties
- Applications
- Favorites
- Reviews

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

Built with ❤️ using modern web technologies to simplify the rental process for everyone.
