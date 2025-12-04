# Sansel Systems - Online Technical Training Website

🎓 A modern, professional React-based training website for Sansel Systems

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with Sansel Systems branding
- **Course Catalog**: Browse all available training programs
- **Course Details**: Expandable syllabus and comprehensive course information
- **Enquiry Form**: Capture student interest with a functional contact form
- **Static Data**: Currently uses static JSON data (easily extendable to backend)

## 📋 Pages

1. **Home** - Hero section, features, and call-to-action
2. **Courses** - Grid view of all available courses
3. **Course Details** - Detailed information with expandable syllabus
4. **Enquiry Form** - Contact form for course enquiries
5. **About** - Information about Sansel Systems
6. **Contact** - Contact information and location details

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   
   The application will automatically open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
SanselSystems/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── CourseCard.jsx
│   │   └── CourseCard.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Courses.jsx
│   │   ├── Courses.css
│   │   ├── CourseDetails.jsx
│   │   ├── CourseDetails.css
│   │   ├── EnquiryForm.jsx
│   │   ├── EnquiryForm.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── data/
│   │   └── coursesData.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Design Theme

- **Primary Color**: #005DD6 (Sansel Blue)
- **Secondary Color**: #00A7FF (Light Blue)
- **Background**: #F8FAFC
- **Font**: Roboto

## 📚 Available Courses

1. **Full Stack Development (React + Node.js)** - ₹15,000 (3 Months)
2. **PostgreSQL Database Administration** - ₹8,000 (40 Hours)
3. **AWS Cloud Essentials** - ₹12,000 (1 Month)

## 🔮 Future Enhancements

The codebase is designed to be easily extended with:

- Backend integration (Node.js/Django)
- Database (PostgreSQL/MongoDB)
- Payment gateway (Razorpay/Stripe)
- Admin CMS for course management
- User authentication (JWT)
- Email notifications
- Student dashboard
- Online course videos

## 🛠️ Technologies Used

- **React** 18.2.0
- **React Router** 6.20.0
- **CSS3** (Custom styling, no external UI libraries)
- **React Scripts** 5.0.1

## 📝 Customization

### Adding New Courses

Edit `src/data/coursesData.js`:

```javascript
{
  id: 4,
  title: "Your Course Name",
  description: "Course description",
  duration: "2 Months",
  fees: "₹10,000",
  syllabus: [
    "Topic 1",
    "Topic 2",
    // ... more topics
  ]
}
```

### Updating Contact Information

Edit `src/pages/Contact.jsx` and `src/components/Footer.jsx`

### Changing Theme Colors

Update colors in individual CSS files or create a central theme configuration.

## 📄 License

This project is private and proprietary to Sansel Systems.

## 👥 Contact

**Sansel Systems**
- Email: info@sanselsystems.com
- Phone: +91 98765 43210
- Location: Bangalore, India

---

Built with ❤️ for Sansel Systems
# SanselSystems
