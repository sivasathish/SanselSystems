# 🚀 Sansel Systems - Quick Start Guide

## ✅ Project Successfully Created!

Your React-based training website for Sansel Systems is now ready!

---

## 📂 Project Structure

```
SanselSystems/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer section
│   │   └── CourseCard.jsx      # Course card component
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Home page
│   │   ├── Courses.jsx         # Courses listing
│   │   ├── CourseDetails.jsx   # Individual course details
│   │   ├── EnquiryForm.jsx     # Enquiry form
│   │   ├── About.jsx           # About page
│   │   └── Contact.jsx         # Contact page
│   ├── data/
│   │   └── coursesData.js      # Static course data
│   ├── App.jsx                 # Main app component with routing
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json
└── README.md
```

---

## 🎯 How to Run the Project

### 1. **Development Mode** (Already Running!)

```bash
npm start
```

- Opens automatically at **http://localhost:3000**
- Hot reloading enabled (changes reflect automatically)
- Development build with debugging tools

### 2. **Production Build**

```bash
npm run build
```

Creates optimized production files in `build/` folder

### 3. **Stop the Server**

Press `Ctrl + C` in the terminal

---

## 🌐 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section |
| `/courses` | All courses listing |
| `/courses/:id` | Individual course details (e.g., /courses/1) |
| `/enquiry` | Enquiry form |
| `/about` | About Sansel Systems |
| `/contact` | Contact information |

---

## 🎨 Sansel Systems Brand Colors

- **Primary Blue**: `#005DD6`
- **Light Blue**: `#00A7FF`
- **Background**: `#F8FAFC`

---

## 📚 Current Courses

1. **Full Stack Development (React + Node.js)** - ₹15,000
2. **PostgreSQL Database Administration** - ₹8,000
3. **AWS Cloud Essentials** - ₹12,000

---

## ✏️ How to Customize

### Add a New Course

Edit `src/data/coursesData.js`:

```javascript
{
  id: 4,
  title: "Your New Course",
  description: "Course description here",
  duration: "2 Months",
  fees: "₹20,000",
  syllabus: [
    "Topic 1",
    "Topic 2",
    "Topic 3"
  ]
}
```

### Update Contact Information

- **Footer**: Edit `src/components/Footer.jsx`
- **Contact Page**: Edit `src/pages/Contact.jsx`

### Change Colors/Styling

Each component has its own CSS file. For example:
- `src/pages/Home.css` - Home page styles
- `src/components/Navbar.css` - Navbar styles

---

## 🔧 Key Features Implemented

✅ Fully responsive design  
✅ React Router for navigation  
✅ Expandable course syllabus  
✅ Working enquiry form (logs to console)  
✅ Professional UI with Sansel branding  
✅ Static course data (easy to connect to backend later)  
✅ Clean, modular code structure  

---

## 🚀 Future Enhancements (Ready for Extension)

The codebase is structured to easily add:

- **Backend API** (Node.js/Django)
- **Database** (PostgreSQL/MongoDB)
- **Payment Integration** (Razorpay/Stripe)
- **Admin Dashboard** for course management
- **User Authentication** (JWT)
- **Email Notifications**
- **Student Portal**

---

## 🛠️ Technologies Used

- React 18.2.0
- React Router 6.20.0
- CSS3 (Custom, no UI libraries)
- JavaScript ES6+

---

## 📝 Testing the Website

1. **Home Page**: Check hero section, features, and CTA buttons
2. **Courses Page**: View all course cards
3. **Course Details**: Click "View Details" on any course
4. **Enquiry Form**: Fill and submit (check browser console for log)
5. **About Page**: Read about Sansel Systems
6. **Contact Page**: View contact information

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process and restart
npx kill-port 3000
npm start
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run build
```
Check the console for specific errors.

---

## 📞 Project Info

**Website**: Sansel Systems Training  
**Tagline**: Empowering Your Technical Future  
**Type**: React Frontend (Static)  
**Status**: ✅ Ready for Development & Testing

---

## ✨ Next Steps

1. **Test the website** at http://localhost:3000
2. **Customize content** (courses, contact info, etc.)
3. **Add more features** as needed
4. **Deploy** to hosting (Netlify, Vercel, or your server)

---

**Built with ❤️ for Sansel Systems**

Need help? Check the main README.md or reach out!
