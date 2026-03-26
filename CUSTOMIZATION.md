# Karan Motor Driving School Website - Customization Guide

## Quick Start

This is a professional, fully responsive driving school website built with Next.js. Follow these steps to customize it for your business.

### 1. Replace WhatsApp Information

Update the WhatsApp contact number in all components:

**File: `/components/navbar.tsx`, `/components/hero-section.tsx`, `/components/courses-section.tsx`, etc.**

Change:
```jsx
href="https://wa.me/1234567890"
```

To your actual WhatsApp number (with country code):
```jsx
href="https://wa.me/919876543210"
```

### 2. Update Contact Information

**File: `/components/contact-section.tsx`**

Update the contact details:
- Phone number
- Email address
- Location

### 3. Customize Course Details

**File: `/components/courses-section.tsx`**

Modify the course information:
- Course titles
- Duration
- Pricing
- Features and highlights

### 4. Update About Section

**File: `/components/about-section.tsx`**

Update:
- Business story and mission
- Key features
- Statistics and achievements

### 5. Customize Tips and Driving Advice

**File: `/components/tips-section.tsx`**

Replace the driving tips with your own expert advice and content.

### 6. Add Your Reviews

**File: `/components/reviews-section.tsx`**

Replace the sample reviews with actual Google reviews from your students.

### 7. Update Branding

- **Logo:** Replace `/public/logo.png` with your logo
- **Colors:** Edit the design tokens in `/app/globals.css`
  - Change `--accent: #fbbf24` to your brand color
  - Update other colors as needed

### 8. Add Gallery Images

Replace the gallery placeholders in `/components/gallery-section.tsx` with actual images of your training facilities and vehicles.

### 9. Social Media Links

Update social links in `/components/contact-section.tsx`:
- Facebook
- Instagram
- LinkedIn
- WhatsApp

### 10. Footer Information

**File: `/components/footer.tsx`**

Update:
- Business description
- Years of experience
- Operating hours
- Location information

## Design System

The website uses a premium dark theme with gold accents. All colors are defined in `/app/globals.css`.

### Color Palette
- **Background:** `#0a0e27` (Dark Navy)
- **Accent:** `#fbbf24` (Gold) - Your primary brand color
- **Text:** `#f8f9fa` (Light Gray/White)
- **Cards:** `#1a1f3a` (Dark Blue-Gray)

To change the entire color scheme, update these CSS variables in globals.css.

## SEO Optimization

Update the metadata in `/app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph image
- Business information

## Mobile Responsiveness

The website is fully responsive and works perfectly on:
- Android phones
- iPhones
- Tablets
- Desktop computers

All components use Tailwind CSS responsive classes (`md:`, `lg:`) for optimal display on all devices.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to vercel.com
3. Import your GitHub repository
4. Click "Deploy"
5. Add environment variables if needed

### Alternative: Deploy Anywhere

This is a standard Next.js app that can be deployed to any hosting platform that supports Node.js.

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is minified automatically
- JavaScript is code-split for faster loading
- Mobile-first responsive design ensures fast load times on all devices

## Support and Maintenance

The website includes:
- Smooth scrolling navigation
- Mobile-optimized navigation menu
- Responsive layouts for all screen sizes
- Animated sections and transitions
- Dark theme optimized for all devices

## Additional Features You Can Add

1. **Booking System:** Add an online scheduling system
2. **Payment Integration:** Add Stripe or Razorpay for online payments
3. **Blog/News:** Create a blog section with driving tips and news
4. **Video Testimonials:** Add YouTube embedded video testimonials
5. **Live Chat:** Integrate live chat support
6. **Contact Form:** Add a contact form with email notifications

## Questions?

Refer to Next.js documentation: https://nextjs.org/docs
Tailwind CSS: https://tailwindcss.com/docs
