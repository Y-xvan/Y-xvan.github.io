# Graph Learning Interactive Tutorial - Setup Guide

## 📚 What Was Created

I've created an interactive Graph Learning tutorial page with game-like animations for your website. Here's what was added:

### 1. Tutorial Content Page
- **File**: `content/tutorials/graph-learning.md`
- **Content**: 5 levels of Graph Learning content from basics to advanced topics
- **URL**: Will be available at `/tutorials/graph-learning/`

### 2. Interactive Layout
- **File**: `layouts/_default/graph-learning-tutorial.html`
- **Features**:
  - 🎨 Beautiful gradient backgrounds (purple to pink)
  - ✨ Floating node animations
  - 📊 Interactive graph canvas with buttons:
    - ➕ Add Node
    - 🔗 Connect nodes
    - 🚀 Run GNN (animated message passing)
    - 🔄 Reset graph
  - 🏆 Achievement popup system
  - 📱 Fully responsive design

### 3. Click-to-Navigate from Interests
- **CSS**: `assets/scss/custom.scss` - Added hover effects for interests
- **JavaScript**: `assets/js/interests-links.js` - Main click handler script
- **Inline Script**: `layouts/partials/hooks/head-end/interests-inline-script.html` - Backup inline version
- **Body Hook**: `layouts/partials/hooks/body-end/interests-links.html` - Script loader

When you click "Graph Learning" in your interests section, it will:
- Show a cool hover effect with gradient background
- Display a 🎮 icon
- Navigate to the tutorial page

## 🔧 How to Start the Server

### Option 1: Use the Start Script (Recommended)
```bash
cd /mnt/data3/yuzhixuan/my_website
./start-server.sh
```

### Option 2: Manual Command
```bash
export PATH=/usr/local/go/bin:~/.nvm/versions/node/v24.11.1/bin:/mnt/data3/yuzhixuan/anaconda3/bin:$PATH
hugo server -D -F --bind 0.0.0.0
```

## 🐛 Troubleshooting

### Issue: TailwindCSS Error
If you see an error about TailwindCSS:
```
SyntaxError: Unexpected token import
```

**Solution**: Make sure Node.js v24+ is in your PATH before starting Hugo:
```bash
export PATH=~/.nvm/versions/node/v24.11.1/bin:$PATH
```

### Issue: Interests Not Clickable
1. Open browser console (F12)
2. Look for console logs like:
   - "Page fully loaded, initializing interests links..."
   - "Found X interest items"
3. If you see errors, the JavaScript might not be loading

**Debug Steps**:
1. Check that the file exists: `assets/js/interests-links.js`
2. Check browser Network tab for the script loading
3. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Tutorial Page Not Found
Make sure Hugo rebuilt the site after adding the tutorial files. The page should be at:
- Local: `http://localhost:1313/tutorials/graph-learning/`
- Deployed: `https://yourdomain.com/tutorials/graph-learning/`

## 🎮 Features of the Tutorial Page

### Interactive Canvas
- **Click anywhere** on the canvas to add a node
- **Add Node button**: Adds a node at random position
- **Connect button**: Creates random connections between nodes
- **Run GNN button**: Simulates neural network message passing with animation
- **Reset button**: Clears and resets to initial graph

### Visual Effects
- Nodes bounce around the canvas
- Smooth animations and transitions
- Gradient backgrounds
- Floating decorative nodes
- Progress bar that fills as you scroll
- Achievement popups on interactions

### Educational Content
The tutorial covers:
1. **Level 1**: What is a Graph?
2. **Level 2**: Types of Graphs
3. **Level 3**: Graph Neural Networks (GNNs)
4. **Level 4**: Cool Applications
5. **Level 5**: Popular GNN Architectures

## 📝 Customization

### Adding More Tutorial Links
Edit `assets/js/interests-links.js` and update the `interestLinks` object:
```javascript
const interestLinks = {
  'Graph Learning': '/tutorials/graph-learning/',
  'Computer Vision': '/tutorials/computer-vision/',  // Add your URL here
  'Large Language Models': '/tutorials/llm/',         // Add your URL here
  'Reinforcement Learning': '/tutorials/rl/',         // Add your URL here
};
```

### Changing Colors
Edit `layouts/_default/graph-learning-tutorial.html` and modify the CSS variables:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change #667eea and #764ba2 to your preferred colors */
```

### Modifying Content
Edit `content/tutorials/graph-learning.md` to change the tutorial content.

## 🚀 Deployment

When deploying to production:
1. Make sure all files are committed to git
2. The tutorial page will automatically be built
3. The JavaScript will be minified and optimized
4. All animations will work the same as locally

## ✅ Testing Checklist

- [ ] Server starts without errors
- [ ] Home page loads correctly
- [ ] "Graph Learning" interest shows hover effect
- [ ] "Graph Learning" interest shows 🎮 icon
- [ ] Clicking "Graph Learning" navigates to tutorial page
- [ ] Tutorial page displays with animations
- [ ] Interactive canvas buttons work
- [ ] Clicking canvas adds nodes
- [ ] "Run GNN" shows animation effect

## 📧 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files were created correctly
3. Make sure Hugo server is using the correct Node.js version
4. Try clearing Hugo cache: `rm -rf resources/_gen public`

## 🎉 Enjoy!

Your Graph Learning tutorial is now ready. Have fun exploring the interactive features!
