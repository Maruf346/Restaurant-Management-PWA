# Testing Guide - Date Picker Implementation

## How to Test the Date Picker

### Desktop Testing

1. **Navigate to Reports Section**
   - Go to the Reports page in your PWA
   - You should see the Daily/Weekly/Monthly tabs on the top right
   - Next to the tabs, you'll see a calendar button with the current date label

2. **Test Daily Picker**
   - Make sure "Daily" tab is selected
   - Click the calendar button (should show "Oct 24, 2023" or current date)
   - A drawer should slide up from the bottom with a calendar grid
   - Click any date in the calendar
   - The drawer should close and the date label should update
   - The report data should update for the selected date

3. **Test Weekly Picker**
   - Click on "Weekly" tab
   - Calendar button should now show "Week of Oct 18, 2023"
   - Click the calendar button
   - A drawer with week selections should open
   - Click on different weeks (W01, W02, etc.)
   - Each week shows the date range (e.g., "Oct 18 - Oct 24")
   - The drawer closes and label updates
   - Report data updates for the selected week

4. **Test Monthly Picker**
   - Click on "Monthly" tab
   - Calendar button should now show "October 2023"
   - Click the calendar button
   - A drawer with month grid should open (3 columns: Jan, Feb, Mar, etc.)
   - Click on any month
   - The drawer closes and label updates
   - Report data updates for the selected month

### Mobile Testing

1. **Using Browser DevTools**
   - Press F12 to open DevTools
   - Click the device toggle icon (top-left of DevTools)
   - Select "iPhone 12" or another mobile preset
   - Refresh the page
   - Repeat the tests above with touch interactions

2. **Responsive Design Checks**
   - In mobile view, the date picker button should be full width (or wrap with period buttons)
   - The drawer should occupy the full screen width
   - Buttons should be large and easy to tap
   - Calendar day buttons should be adequately spaced for touch
   - Week/month grids should show 2 columns on mobile, 3 on tablet

3. **PWA Mobile App Testing**
   - Open the PWA on an actual mobile device
   - Navigate to Reports section
   - Test the picker drawer - should feel native with smooth animations
   - Test the bottom drawer slide-up animation
   - Try swiping down on the handle bar to close (if supported)

### Visual Regression Tests

- [ ] Calendar button styling matches other buttons on page
- [ ] Calendar icon is properly aligned and visible
- [ ] Date label text is properly formatted and readable
- [ ] Drawer appears with smooth animation (0.3s)
- [ ] Backdrop has proper semi-transparent dark overlay
- [ ] Month/year navigation arrows are visible and clickable
- [ ] Selected date/week/month is highlighted in dark color
- [ ] Hover states work on desktop buttons
- [ ] Close button (X) is visible in drawer header
- [ ] Confirm button at bottom closes the drawer

### Functional Tests

#### Daily Picker
- [ ] All days of the month are clickable
- [ ] Previous/next month buttons work
- [ ] Can navigate to previous months/years
- [ ] Can navigate to future months/years
- [ ] Selected day is highlighted
- [ ] Date label updates in correct format (e.g., "Oct 24, 2023")
- [ ] Report stats change when date changes

#### Weekly Picker
- [ ] All weeks are displayed (W01-W52/W53)
- [ ] Week numbers are correct
- [ ] Date ranges shown with each week are correct
- [ ] Previous/next year buttons work
- [ ] Selected week is highlighted
- [ ] Date label updates to show week range (e.g., "Week of Oct 18, 2023")
- [ ] Report stats change for different weeks

#### Monthly Picker
- [ ] All 12 months shown (Jan-Dec)
- [ ] Previous/next year buttons work
- [ ] Selected month is highlighted
- [ ] Month names are shown (not numbers)
- [ ] Date label updates to show month/year (e.g., "October 2023")
- [ ] Report stats change for different months

### Performance Checks

- [ ] Drawer opens quickly (< 300ms visible to user)
- [ ] Date selection is instant (no lag)
- [ ] No memory leaks when opening/closing multiple times
- [ ] Smooth animations without jank or stuttering
- [ ] Page responsive after many selections

### Browser Compatibility

Test on the following browsers:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS)
- [ ] Safari (iOS)
- [ ] Edge (latest)

### Common Issues to Check

1. **Drawer not opening?**
   - Check browser console for errors (F12 → Console)
   - Verify React and Framer Motion are loaded
   - Check that DatePickerDrawer component is imported

2. **Date not updating?**
   - Verify state callbacks are wired correctly
   - Check that selected date format is correct (YYYY-MM-DD)
   - Check browser console for errors

3. **Styling issues?**
   - Verify Tailwind CSS is loaded
   - Check that color classes are rendering (dark background, white text)
   - Zoom out if elements seem misaligned

4. **Animation not smooth?**
   - Check browser performance (might be resource-limited)
   - Try in a different browser
   - Check for hardware acceleration in graphics settings

### Success Criteria

✅ Date picker opens when calendar button clicked
✅ Correct picker UI shows based on selected period
✅ Date/week/month selection updates the label
✅ Report data updates based on selected period
✅ Drawer closes after selection
✅ Fully responsive on mobile devices
✅ Smooth animations without errors
✅ All three picker types work correctly

---

## Debugging Tips

If something isn't working:

1. **Open Browser DevTools** (F12)
   - Go to Console tab
   - Look for any error messages (red text)
   - Check for warnings (yellow text)

2. **Check Network Tab**
   - Ensure all assets loaded (Status 200)
   - Check that JS/CSS bundles loaded
   - Look for failed requests

3. **Check Elements Tab**
   - Inspect the calendar button element
   - Verify it has click event listener
   - Check that drawer container is in the DOM

4. **React DevTools** (if installed)
   - Check that `pickerOpen` state changes when button clicked
   - Verify props passed to DatePickerDrawer
   - Check that state callbacks are firing

5. **Mobile Testing Issues**
   - Force refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
   - Clear browser cache if using PWA
   - Try in private/incognito mode
   - Check that touch events are firing correctly
