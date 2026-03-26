# Quick Start Guide - Karan Motor Website

Get your driving school website live in minutes!

## 1. Update WhatsApp Number (Most Important!)

This is used in multiple places. Do a global find and replace:

**Find:** `https://wa.me/1234567890`
**Replace with:** `https://wa.me/YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE`

Example: `https://wa.me/919876543210`

## 2. Update Business Information

### In `components/contact-section.tsx`:
- Change phone number: `+91 98765 43210`
- Change email: `info@karanmotor.com`
- Change location: `Main City Center, India`

### In `components/footer.tsx`:
- Update business hours
- Update location
- Update social media links

## 3. Update Course Details

Edit `components/courses-section.tsx`:

```typescript
const courses = [
  {
    id: 1,
    title: '20 Day Standard Course',
    duration: '20 Days',
    price: '₹15,000', // Change this
    description: '...', // Update description
    features: [...], // Update features list
  },
  // ... update second course too
];
```

## 4. Add Your Reviews

Edit `components/reviews-section.tsx`:

```typescript
const reviews = [
  {
    name: 'Student Name',
    review: 'Their actual review text...',
    rating: 5,
  },
  // Add more reviews
];
```

## 5. Update Logo

Replace the file: `/public/logo.png`
- Must be PNG or JPG
- Recommended size: 200x200px or higher

## 6. Change Brand Color

Edit `/app/globals.css`:

Find all instances of `#fbbf24` (gold color) and replace with your brand color.

Key locations:
- `--accent: #fbbf24;` (main brand color)
- Text colors
- Button colors

## 7. Update About Section

Edit `components/about-section.tsx`:
- Change company story
- Update features list
- Modify statistics

## 8. Add Driving Tips

Edit `components/tips-section.tsx`:
- Replace sample tips with your expert advice
- Categories can be customized
- Add/remove as needed

## 9. Add Gallery Images

Edit `components/gallery-section.tsx`:
- Add image paths to the gallery
- Add descriptions for each image
- Update the grid layout if needed

## 10. Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Go to vercel.com
# Click "Import" and select your GitHub repository
# Click "Deploy"
# Done! Your site is live
```

## File Locations Reference

| What to Change | File |
|---|---|
| WhatsApp number | Multiple (search for `wa.me/`) |
| Business name | `components/footer.tsx`, `components/navbar.tsx` |
| Course info | `components/courses-section.tsx` |
| Reviews | `components/reviews-section.tsx` |
| Contact details | `components/contact-section.tsx` |
| Logo | `/public/logo.png` |
| Colors | `/app/globals.css` |
| Pages SEO | `/app/layout.tsx` |
| Brand color | `/app/globals.css` (search `#fbbf24`) |
| Social links | `components/contact-section.tsx`, `components/footer.tsx` |

## Testing Checklist

- [ ] WhatsApp links work (test on phone)
- [ ] Phone number is clickable
- [ ] Email link opens default email client
- [ ] All navigation links scroll to correct sections
- [ ] Mobile menu opens/closes properly
- [ ] Courses display correctly
- [ ] Reviews carousel works
- [ ] Footer links work
- [ ] No broken images
- [ ] Colors look good

## Common Issues & Solutions

### WhatsApp links not working
- Make sure number includes country code without +
- Example correct: `wa.me/919876543210`
- Example wrong: `wa.me/+919876543210`

### Images not showing
- Check file paths are correct
- Make sure images are in `/public` folder
- Use forward slashes in paths

### Colors not changing
- CSS caching: Do hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Make sure you changed all `#fbbf24` instances

### Mobile menu not working
- Check browser console for JavaScript errors
- Make sure menu button is visible on mobile

## Performance Tips

1. Optimize images before uploading
   - Use tools like TinyPNG or Squoosh
   - Recommended max size: 500KB per image

2. Keep descriptions concise
   - Better for mobile users
   - Faster page load

3. Test on real mobile devices
   - Use Chrome DevTools mobile emulation
   - Test on actual phones when possible

## Next Steps After Launch

1. **Add Google Analytics**
   - Set up Google Analytics
   - Add tracking code to layout.tsx

2. **Setup Google My Business**
   - Claim your business
   - Add reviews section

3. **Add Contact Form**
   - Integrate email service
   - Add form validation

4. **Setup Email Notifications**
   - Know when someone contacts you
   - Auto-responders for inquiries

5. **Optimize for Search**
   - Add more detailed descriptions
   - Create blog posts
   - Add FAQ section

## Getting Help

- **Customization Guide**: See `CUSTOMIZATION.md`
- **Full Documentation**: See `README.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

## Support

Having issues? Check:
1. Browser console for errors
2. Network tab for failed requests
3. File paths are correct
4. Phone numbers have country code
5. Images are in `/public` folder

Good luck with your driving school website! 🚗
