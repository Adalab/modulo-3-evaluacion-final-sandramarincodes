# Harry Potter finder

## What is it?

It is a Harry Potter character search app built with React and Vite. The project fetches data from the public Harry Potter API and allows users to filter and explore characters by name, house and gender and view detailed information.

## How to run the project

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Adalab/modulo-3-evaluacion-final-sandramarincodes.git
   cd modulo-3-evaluacion-final-sandramarincodes
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local server URL shown in the terminal to view the project in your browser.

## Live demo

The project is not yet deployed.

## Technologies used

- React + Vite: Fast development environment and modern tooling.
- React Router DOM: For dynamic routing and character detail pages.
- JavaScript (ES6+): State management, filtering logic, and API integration.
- HTML & CSS: Page structure and styling.
- Harry Potter API: External data source for character info.

## Features

- Fetches character data from the Harry Potter API on initial render.
- Filter characters by:
  Name (case-insensitive).
  House (select dropdown).
  Gender (select dropdown).

- Detailed character view via route: shows image, house, status (alive/dead), gender, species and alternative names.
- Placeholder image for characters without pictures.
- Responsive layout with grid display for character cards.
- Page state (filters) is preserved when navigating back from a detail page.
- Graceful handling of 404 character routes (invalid IDs).
- Custom message if no results are found.
