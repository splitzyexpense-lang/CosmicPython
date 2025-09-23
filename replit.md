# Astralux - Mobile-First Cryptocurrency Platform

## Overview

Astralux is a mobile-first cryptocurrency platform built around ASLX tokens that allows users to earn cryptocurrency by watching rewarded advertisements. The project combines a React-based web application with an Express backend, utilizing the Polygon blockchain for token distribution. The platform features a comprehensive ecosystem including tokenomics information, educational content, user support systems, and real-time statistics tracking. Built with modern web technologies and a focus on user accessibility, Astralux aims to democratize cryptocurrency earning through a simple mobile app experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client application uses React 18 with TypeScript, built with Vite for optimal development experience and performance. The architecture follows a modern single-page application pattern with Wouter for lightweight routing. The UI is constructed using shadcn/ui components with Radix UI primitives, providing accessible and consistent design patterns. Styling is handled through Tailwind CSS with a custom "Cosmic Dark" theme that emphasizes purple accents and space-themed aesthetics.

Key frontend decisions:
- **Wouter over React Router**: Chosen for its minimal bundle size and simplicity, perfect for a marketing-focused website
- **Vite build system**: Selected for fast development and optimized production builds
- **Tailwind CSS with custom theme**: Enables rapid UI development while maintaining consistent branding
- **Component composition**: Uses shadcn/ui for reusable, accessible components

### Backend Architecture
The server runs on Express.js with TypeScript, implementing a RESTful API pattern. The architecture separates concerns through distinct layers: routing, storage abstraction, and utility functions. The backend currently uses in-memory storage with an interface-based design that allows for easy migration to persistent databases.

Key backend decisions:
- **Express.js**: Chosen for simplicity and rapid development of API endpoints
- **Storage abstraction**: Interface-based storage layer allows switching from memory to database without code changes
- **Middleware pattern**: Uses Express middleware for logging, error handling, and request processing
- **Development-focused**: Currently optimized for development with plans for production database integration

### Data Management
The application uses TanStack Query (React Query) for client-side state management and server synchronization. Data schemas are defined using Drizzle ORM with Zod validation, providing type safety across the full stack. The current implementation uses in-memory storage but is architected to easily transition to PostgreSQL via Drizzle ORM.

Key data decisions:
- **TanStack Query**: Provides excellent caching, synchronization, and loading states for API data
- **Drizzle ORM + Zod**: Type-safe database operations with runtime validation
- **Schema-first approach**: Database schemas define both TypeScript types and validation rules
- **PostgreSQL-ready**: Architecture prepared for production database migration

### Authentication and Security
Currently, the platform does not implement user authentication, focusing on public information and marketing content. The architecture includes support ticket submission and basic form validation. Future implementations will integrate wallet-based authentication for the mobile app ecosystem.

### Styling and UI Framework
The application uses a comprehensive design system built on Tailwind CSS with custom CSS variables for theming. The "Cosmic Dark" theme features space-inspired colors with purple accents, designed to convey trust and innovation in the cryptocurrency space. Typography uses Inter for body text and Roboto Mono for technical information like addresses and numbers.

Key styling decisions:
- **Design system approach**: Consistent component styling through shadcn/ui and custom CSS variables
- **Cosmic Dark theme**: Purple-focused dark theme reflecting the space/cosmic branding
- **Responsive design**: Mobile-first approach with progressive enhancement for larger screens
- **Accessibility focus**: Radix UI primitives ensure WCAG compliance

## External Dependencies

### Core Framework Dependencies
- **React 18**: Modern React with concurrent features for optimal user experience
- **Express.js**: Lightweight Node.js web framework for API development
- **TypeScript**: Type safety across both frontend and backend codebases
- **Vite**: Modern build tool providing fast development and optimized production builds

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui components**: Pre-built accessible React components using Radix UI
- **Radix UI primitives**: Headless UI components ensuring accessibility compliance
- **Recharts**: Chart library for displaying tokenomics and statistics visualizations

### Data and State Management
- **TanStack Query**: Advanced data fetching and caching for React applications
- **Drizzle ORM**: Type-safe ORM for PostgreSQL database operations
- **Zod**: Schema validation library ensuring runtime type safety
- **React Hook Form**: Performant form library with minimal re-renders

### Database and Hosting
- **PostgreSQL**: Production database (configured via Drizzle but not yet implemented)
- **Neon Database**: Serverless PostgreSQL for production deployment
- **Vercel**: Deployment platform optimized for frontend applications

### Development and Analytics
- **Google Analytics**: User tracking and behavior analysis (configured but requires environment variables)
- **Firebase SDK**: Prepared for real-time features and statistics (optional integration)
- **ESBuild**: Fast JavaScript bundler for production server builds

### Blockchain and Crypto
- **Polygon Network**: Layer 2 Ethereum solution for token operations
- **ERC-20 Standard**: Token contract standard for ASLX token implementation
- **Web3 Integration**: Prepared for wallet connectivity and blockchain interactions