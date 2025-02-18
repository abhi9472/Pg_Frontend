📌 Project Overview

PG Finder is a web-based platform designed to streamline the process of searching and booking paying guest (PG) accommodations. This platform provides users with a seamless experience to explore, compare, and secure accommodations based on individual preferences. The objective of PG Finder is to enhance accessibility and convenience for students and professionals looking for reliable PG options near educational institutions and workplaces.

🚀 Key Features

User Authentication: Secure login, signup, and logout functionalities.

PG Listings: Comprehensive details on available PG accommodations, including pricing, location, amenities, and availability.

Search & Filter: Advanced filtering options based on location, price range, and facilities.

Rating & Reviews: Users can submit ratings and reviews based on their experiences.

Admin Dashboard: Administrative control for managing PG listings, updating details, and addressing user inquiries.

Theme Toggle: Dark and light mode options for an enhanced user experience.

Mobile Responsiveness: Fully optimized for desktop, tablet, and mobile devices.

Secure OTP Verification: Implementation of OTP-based password reset functionality.

Real-time Chat: Users can interact with administrators before making a booking decision.

🛠 Technology Stack

Frontend Technologies

React.js: Component-based UI development

JavaScript (ES6+): Core scripting language

HTML5 & CSS3: Structural and stylistic elements

Tailwind CSS: Modern utility-first CSS framework

Additional Tools & Libraries

State Management: React Context API

HTTP Requests: Axios

Routing: React Router

Integration with Backend: API calls to a Node.js and Express.js backend

📂 Project Structure

Pg_Frontend/
├── src/
│   ├── components/       # Reusable UI components (Navbar, Cards, Forms, etc.)
│   ├── pages/            # Page-specific components (Home, Login, Signup, PG Details, etc.)
│   ├── context/          # Global state management using Context API
│   ├── utils/            # Utility functions and API calls
│   ├── assets/           # Static assets (images, icons, etc.)
│   ├── App.js            # Main application component
│   ├── index.js          # Application entry point
│
├── public/               # Publicly accessible static files
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation

⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/abhi9472/Pg_Frontend.git
cd Pg_Frontend

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm start

After execution, the application will be available at http://localhost:3000/.
