# Job Board Cards Project

A simple and elegant React application that displays a list of job openings using reusable card components. This project demonstrates the power of React components, props, and list rendering using `map()`.

## Features

- **Reusable Components:** The core of the UI is the `Cards` component, which accepts various properties (props) to dynamically render job details.
- **Dynamic Rendering:** Data is stored in an array of objects (`jobOpenings`) and rendered dynamically by mapping over the array.
- **Modern React:** Built with React 19 and Vite for a fast and optimized development experience.
- **Icons:** Integrates `lucide-react` for modern, scalable SVG icons (like the Bookmark icon for saving jobs).

## Technologies Used

- **React 19**
- **Vite** (Build Tool & Development Server)
- **Lucide React** (Iconography)
- **CSS** (Standard styling, configured via `App.css` and `index.css`)

## Project Structure

```
04-cards-project/
├── src/
│   ├── components/
│   │   └── Cards.jsx   # The reusable job card component
│   ├── App.jsx         # Main application file containing job data and mapping logic
│   ├── App.css         # Styling for the application
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Component Details

### `Cards` Component
The `Cards.jsx` component expects the following props to render a job listing correctly:
- `company`: Name of the company.
- `datePosted`: How long ago the job was posted.
- `post`: The job title/role.
- `logo`: URL to the company's brand logo.
- `tag1`: Primary tag (e.g., Full Time).
- `tag2`: Secondary tag (e.g., Junior Level).
- `pay`: Salary or hourly rate.
- `location`: Job location.

## Getting Started

Follow these steps to run the project locally:

1. **Navigate to the project directory:**
   ```bash
   cd 04-cards-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Open the URL provided in the terminal (usually `http://localhost:5173/`) to view the application.

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the app into static files for production.
- `npm run lint`: Runs ESLint to catch errors and enforce code style.
- `npm run preview`: Bootstraps a local web server to preview the production build.
