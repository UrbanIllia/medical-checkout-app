Shopdoc Test Project
Overview
This project is a test assignment focused on implementing a single route for a website, specifically the checkout page of an e-commerce platform called Shopdoc. The application is built using React, React Router, and Tailwind CSS for styling, with additional libraries like react-toastify for notifications and Yup for form validation. The project includes a responsive layout, a header with navigation, a footer, and a checkout page with form inputs, payment methods, and a promo code feature.
The checkout page allows users to:

Enter personal and shipping details.
Select shipping and payment methods.
Apply a promotional code.
View a summary of items in the cart and the total cost.

Project Structure
The project is structured as follows:

src/index.jsx: Entry point, rendering the app with React Router and StrictMode.
src/App.jsx: Main app component with routing configuration for multiple pages (Home, About, Reviews, Contact, Shop, Search, Checkout, Logout).
src/components/: Reusable components, including:
Header.jsx: Responsive header with navigation and burger menu for mobile.
Footer.jsx: Footer with links and social media icons.
CardList.jsx and Card.jsx: Display card components for features or benefits.
CustomRadio.jsx: Custom radio button component for forms.
Input.jsx: Reusable input component with validation support.
PersonalDetails.jsx, ShippingDetails.jsx, PaymentMethod.jsx, PromoCode.jsx, ShippingMethod.jsx: Components for the checkout page form.
ShoppingCards.jsx and Total.jsx: Display cart items and order summary.

src/config/:
pages.config.js: Defines route paths for pages and user actions.
cards.config.js: Data for feature cards.
shoppingCards.config.js: Mock data for cart items.
schema.config.js: Yup schema for checkout form validation.

src/pages/: Page components for different routes (e.g., Checkout.jsx).

Tech Stack

React: Frontend library for building the UI.
React Router: For client-side routing.
Tailwind CSS: Utility-first CSS framework for styling.
clsx: Utility for conditionally joining class names.
react-toastify: For displaying toast notifications (e.g., promo code application).
Yup: For form validation on the checkout page.
React Icons: For icons in the header (burger menu, close button).

Setup Instructions
To run the project locally, follow these steps:

Clone the Repository:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install Dependencies:Ensure you have Node.js installed. Then, run:
npm install

This installs all dependencies listed in package.json, including React, React Router, Tailwind CSS, clsx, react-toastify, Yup, and React Icons.

Run the Development Server:
npm start

The app will be available at http://localhost:3000. The checkout page can be accessed at the /checkout route.

Build for Production:
npm run build

This generates a production-ready build in the build folder.

Deployment to Vercel
To deploy the project to Vercel for hosting:

Push to GitHub:

Initialize a Git repository if not already done:git init
git add .
git commit -m "Initial commit"

Create a repository on GitHub and push the code:git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main

Connect to Vercel:

Sign in to Vercel using your GitHub account.
Click New Project and select Import Git Repository.
Choose your GitHub repository and click Import.
Vercel will auto-detect the React project. Use the default settings:
Framework Preset: React
Root Directory: ./
Build Command: npm run build
Output Directory: build

Click Deploy. Vercel will build and deploy the app, providing a URL (e.g., your-project.vercel.app).

Automatic Updates:

Each push to the main branch on GitHub will trigger a new deployment on Vercel.

Usage

Navigate to the /checkout route to test the checkout page.
Fill in the form fields (personal details, shipping details, etc.).
Select a shipping method and payment method using the custom radio buttons.
Apply a promo code to see a toast notification (mock functionality).
View the cart items and total cost displayed on the right side of the checkout page.

Notes

This project was developed as a test assignment, focusing on the checkout route (/checkout). Other routes (Home, About, etc.) are placeholders and may require additional implementation.
The checkout form uses Yup for validation, ensuring proper input formats for fields like name, email, phone, address, etc.
The design is responsive, with Tailwind CSS classes for mobile (max-w-[375px]), tablet (md:max-w-[768px]), and desktop (lg:max-w-[1028px], xl:max-w-[1440px]) layouts.
The burger menu in the header is toggled for mobile devices using a state variable (isOpen).
Mock data for cart items and feature cards is stored in shoppingCards.config.js and cards.config.js.

Future Improvements

Add backend integration for processing payments and saving user data.
Implement full functionality for other routes (Home, About, Shop, etc.).
Enhance accessibility (e.g., improve ARIA labels for form inputs).
Add unit tests for components using Jest or React Testing Library.

License
This project is unlicensed as it is a test assignment. All rights reserved to the author.
