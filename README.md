# Oxygene Cart - E-Commerce Demo

A modern e-commerce application built with Next.js 14, showcasing a responsive design and seamless shopping experience.

Live Demo: [https://sou9-fpk.vercel.app/](https://sou9-fpk.vercel.app/)

## Features

- 🛍️ Product browsing with categories
- 🛒 Shopping cart functionality
- 📱 Responsive design
- 🌓 Clean, modern UI
- ⚡ Server-side rendering
- 📊 Pagination

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) - State management for React
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **API**: [Fake Store API](https://fakestoreapi.com/) - Demo e-commerce API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/sou9-fpk.git
cd sou9-fpk
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using Yarn:
```bash
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variable:

```env
API_BASE_URL=https://fakestoreapi.com
```

### 4. Start Development Server

Using npm:
```bash
npm run dev
```

Using Yarn:
```bash
yarn dev
```

### 5. Open the Application

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Additional Notes
- Ensure all dependencies are installed before running the server
- Check the `.env` file is properly configured

## Project Structure

```
sou9-fpk/
│
├── app/                 # Next.js app directory
│   ├── categories/      # Category pages
│   ├── products/        # Product pages
│   └── cart/            # Cart page
│
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   ├── products/        # Product-related components
│   └── cart/            # Cart-related components
│
├── lib/                 # Utility functions and API
│   ├── api/             # API client
│   └── store/           # Redux store
│
└── public/              # Static files
```

## Why These Libraries?

- **Next.js 14**: Chosen for its excellent developer experience, server-side rendering capabilities, and optimized performance.
- **Tailwind CSS**: Provides rapid UI development with utility classes and excellent responsive design tools.
- **shadcn/ui**: Offers high-quality, customizable components that work seamlessly with Tailwind CSS.
- **Redux Toolkit**: Simplifies state management with built-in best practices and reduced boilerplate.
- **Lucide React**: Provides a comprehensive set of consistent, customizable icons.
- **Framer Motion**: Provides animation capabilities with an easy-to-use API for React.
- **Zod**: Offers schema validation for TypeScript, enabling safe data parsing and validation.

## Development Decisions

- Used server components where possible for better performance
- Implemented client-side cart state with Redux for persistence
- Created responsive layouts with mobile-first approach
- Used TypeScript for better type safety and development experience

## Deployment

The project is deployed on [Vercel](https://sou9-fpk.vercel.app/), which provides:

- Automatic deployments
- Edge functions
- Analytics
- Performance monitoring

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
