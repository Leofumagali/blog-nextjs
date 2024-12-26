# Blog with Firebase Authentication and Next.js

This repository contains a dynamic blog built with **Next.js** using the **App Router**. Authentication is managed through **Firebase Authentication** with route protection implemented via **middleware** and cookies handled with `nookies`. Blog content is dynamically generated from Markdown files with Frontmatter. The responsive design is implemented using **TailwindCSS**.

## 🚀 Features

- 🔒 **Authentication**:
  - Login and registration with Firebase Authentication.
  - Session management using cookies.
  - Logout with secure cookie removal and Firebase sign-out.

- 📄 **Blog Content**:
  - Blog posts managed with Markdown files (`.mdx`).
  - Frontmatter for metadata such as title, date, and images.
  - Dynamic rendering of posts with Markdown-to-HTML conversion using `remark`.

- 🛡️ **Route Protection**:
  - Middleware to restrict access to authenticated users.
  - Public routes for login and registration.
  - Private routes for blog content.

- 🎨 **Responsive Design**:
  - Styled with TailwindCSS for a clean and modern UI.
  - Fully responsive layout for mobile, tablet, and desktop.

## 🛠️ Stack and Tools

- **Frontend**: Next.js (App Router), React
- **Authentication**: Firebase Authentication
- **Markdown**: MDX with Frontmatter
- **Styling**: TailwindCSS
- **Cookie Management**: Nookies

## 📦 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/leofumagali/blog-nextjs.git
   ```

2. Navigate to the project directory:

  ``` cd your-repo-name ```

3. Install dependencies:

``` npm install ```

4. Configure your Firebase project:

Create a file named firebaseConfig.ts in the lib directory.

Add the following code to the file: 
``` 
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = { 
  apiKey: "your-api-key", 
  authDomain: "your-auth-domain", 
  projectId: "your-project-id", 
  storageBucket: "your-storage-bucket", 
  messagingSenderId: "your-messaging-sender-id", 
  appId: "your-app-id", 
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp); 
```

Replace the placeholder values (your-api-key, etc.) with your Firebase project details.

Important: Add lib/firebaseConfig.ts to your .gitignore file to avoid exposing sensitive data.

Run the development server:

``` npm run dev ```

Open the application in your browser at http://localhost:3000.