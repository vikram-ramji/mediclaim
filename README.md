# Medical Claim Review Dashboard

A high-performance, split-screen dashboard for reviewing medical claims. This application synchronizes a PDF claim document with its extracted JSON data, allowing reviewers to efficiently identify discrepancies, audit issues, and policy violations.

## Features

### Core Functionality

- **Split-Screen Interface:** A layout with the PDF document on the left and structured data on the right.
- **Bi-Directional Navigation:**
  - **Click-to-Scroll:** Clicking a document segment instantly scrolls the PDF to the correct page.
  - **Scroll-to-Sync:** Manually scrolling the PDF updates the active state in the Document Index real-time.
- **Smart Bill Analysis:**
  - **NME Detection:** "Non-Medical Expenses" are highlighted in red within line items.
  - **Warning Bubbling:** Collapsed bill cards automatically display a "Warning Badge" if they contain flagged items, ensuring errors are never hidden.
- **Audit & Discrepancies:** Visual summary of claim discrepancies, policy violations, and medical legibility flags.

### UI/UX Highlights

- **Context-Aware Sidebar:** The "Document Index" highlights the active document section based on the current viewport visibility.
- **Responsive Design:** Built with a "card-based" architecture for readability and visual hierarchy.
- **Performance Optimized:** Uses `IntersectionObserver` for scroll detection to avoid main-thread blocking event listeners.

## Tech Stack

- **Framework:** [React](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **PDF Rendering:** [react-pdf](https://github.com/wojtekmaj/react-pdf)
- **Icons:** [Lucide React](https://lucide.dev/)

## Architecture & Decisions

- **State Management**: Used ContextAPI (UseContext) to manage state effeciently, preventing nested prop-drilling.

- **Scroll Synchronization**: Implemented a custom `IntersectionObserver` hook with a Bi-Directional lock to prevent jitters when switching between manual scrolling and using navigation buttons.

- **Component Architecture**: The UI is broken down into atomic, self-contained components to ensure maintainability:

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/medical-claim-dashboard.git

   cd medical-claim-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```
