# EpoxyResin - Premium Epoxy Business Website

A production-ready Next.js 14 application for an epoxy resin business, featuring a database-backed backend, responsive design, and comprehensive SEO optimization for the Kenya market.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + custom components
- **Database**: PostgreSQL with Prisma ORM
- **Animations**: Framer Motion
- **Validation**: Zod
- **Notifications**: React Hot Toast
- **Deployment**: Vercel

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Database Integration**: PostgreSQL with Prisma for contact and quote requests
- **API Routes**: RESTful endpoints for form submissions with validation
- **Form Management**: Client-side form handling with loading, success, and error states
- **SEO Optimization**: Metadata, OpenGraph, and structured data for Kenya market
- **Image Optimization**: Next.js Image component with lazy loading
- **Animations**: Subtle Framer Motion transitions and effects
- **Type Safety**: Full TypeScript coverage

## Project Structure

```
.
├── app/
│   ├── api/              # API route handlers
│   ├── contact/          # Contact page
│   ├── quote/            # Quote request page
│   ├── services/         # Services showcase
│   ├── gallery/          # Project gallery
│   ├── about/            # About page
│   ├── layout.tsx        # Root layout with header/footer
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── error.tsx         # Error boundary
├── components/
│   ├── forms/            # Form components
│   ├── layout/           # Header and footer
│   └── ui/               # Reusable UI components
├── lib/
│   ├── prisma.ts         # Prisma client singleton
│   ├── validation.ts     # Zod validation schemas
│   ├── api-utils.ts      # API response utilities
│   └── utils.ts          # Utility functions
├── types/                # TypeScript type definitions
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your database connection string:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/epoxy_resin_db"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```

3. **Set up the database**:
   ```bash
   npm run prisma:push
   ```
   This will create the database schema.

4. **Generate Prisma Client**:
   ```bash
   npm run prisma:generate
   ```

### Development

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Database Management

- **View database**: `npm run prisma:studio`
- **Create migrations**: `npm run prisma:migrate`
- **Push schema to database**: `npm run prisma:push`

## API Endpoints

### Contact Request

**POST** `/api/contact`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+254712345678",
  "serviceType": "Epoxy Flooring",
  "message": "I'm interested in epoxy flooring for my garage."
}
```

Response:
```json
{
  "success": true,
  "data": { "id": "...", "createdAt": "..." },
  "message": "Contact request submitted successfully"
}
```

### Quote Request

**POST** `/api/quote`

Request body:
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+254712345678",
  "projectType": "New Installation",
  "areaSize": "1000",
  "location": "Nairobi",
  "notes": "Commercial kitchen flooring"
}
```

Response:
```json
{
  "success": true,
  "data": { "id": "...", "createdAt": "..." },
  "message": "Quote request submitted successfully"
}
```

## Database Schema

### ContactRequest

- `id` (UUID) - Primary key
- `name` (String) - Contact name
- `email` (String) - Email address
- `phone` (String) - Phone number
- `serviceType` (String) - Service type selected
- `message` (Text) - Message content
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

### QuoteRequest

- `id` (UUID) - Primary key
- `name` (String) - Contact name
- `email` (String) - Email address
- `phone` (String) - Phone number
- `projectType` (String) - Project type
- `areaSize` (Float, optional) - Area size in sq ft
- `location` (String) - Project location
- `notes` (Text, optional) - Additional notes
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

## Build and Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel project settings
4. Vercel will automatically build and deploy on each push

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Create database migration
- `npm run prisma:push` - Push schema to database
- `npm run prisma:studio` - Open Prisma Studio

## Environment Variables

Required environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | `http://localhost:3000` |

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for below-the-fold components
- Code splitting and dynamic imports
- Tailwind CSS purging
- CSS compression
- Minified JavaScript output

## SEO Features

- Metadata for all pages
- OpenGraph tags for social sharing
- Structured data for LocalBusiness
- Responsive design for all devices
- Fast page load times
- Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Database Connection Issues

Ensure your PostgreSQL instance is running and the `DATABASE_URL` is correct.

### Build Errors

Clear the `.next` directory:
```bash
rm -rf .next
npm run build
```

### Module Not Found Errors

Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

## License

All rights reserved. © 2024 EpoxyResin.

## Contact

For inquiries:
- Email: info@epoxyresin.co.ke
- Phone: +254 712 345 678
- Location: Nairobi, Kenya
