# 🖼️ Convert HEIC Images to JPG - Step by Step Guide

## ⚠️ Important: HEIC Format Not Supported by Web Browsers

Your images are currently in `.heic` format (Apple's image format), which **most web browsers don't support**. You need to convert them to `.jpg` format.

---

## 🎯 Quick Summary

You have **13 products** across **3 categories**:
- **Bone Straight**: 7 products (folders 1-7)
- **Braided Wigs**: 4 products (folders 1-4)
- **Burmese Curls**: 2 products (folders 1-2)

**Total images to convert**: ~50 HEIC files

---

## ✅ OPTION 1: Online Converter (EASIEST - RECOMMENDED)

### Using HEICtoJPG.com

1. **Go to**: https://heictojpg.com
2. **Click** "Click to upload" or drag and drop all your HEIC images
3. **Wait** for conversion (automatic and free)
4. **Download** converted images
5. **Replace** the HEIC files with JPG files in your folders

### Step-by-Step for Each Category:

#### For Bone Straight:
```
1. Open folder: public/img/Bone Straight/1/
2. Upload all 4 HEIC files to heictojpg.com
3. Download the converted JPG files
4. DELETE the old HEIC files
5. COPY the new JPG files into the folder
6. Repeat for folders 2, 3, 4, 5, 6, and 7
```

#### For Braided Wigs:
```
1. Open folder: public/img/Braided Wigs/1/
2. Upload all 4 HEIC files to heictojpg.com
3. Download the converted JPG files
4. DELETE the old HEIC files
5. COPY the new JPG files into the folder
6. Repeat for folders 2, 3, and 4
```

#### For Burmese Curls:
```
1. Open folder: public/img/Burmese Curls/1/
2. Upload all 4 HEIC files to heictojpg.com
3. Download the converted JPG files
4. DELETE the old HEIC files
5. COPY the new JPG files into the folder
6. Repeat for folder 2
```

---

## ✅ OPTION 2: Windows Photos App

If you're on Windows 10/11:

1. **Right-click** on a HEIC image
2. **Select** "Open with" → "Photos"
3. **Click** the three dots (⋯) at the top
4. **Select** "Save a copy"
5. **Choose** JPG format
6. **Save** in the same folder
7. **Repeat** for all images or use batch processing

---

## ✅ OPTION 3: Bulk Converter (For Many Files)

### Using Convertio.co

1. **Go to**: https://convertio.co/heic-jpg/
2. **Upload up to 100 files** (drag and drop entire folders)
3. **Select** "JPG" as output format
4. **Click** "Convert"
5. **Download** the ZIP file with all converted images
6. **Extract** and organize back into your folders

---

## 📋 Checklist After Conversion

✅ All HEIC files converted to JPG  
✅ JPG files have the same names (just different extension)  
✅ Files are in the correct folders  
✅ Folder structure unchanged:
```
public/img/
├── Bone Straight/
│   ├── 1/ → IMG_6648.jpg, IMG_6649.jpg, IMG_6650.jpg, IMG_6651.jpg
│   ├── 2/ → IMG_6667.jpg, IMG_6668.jpg, IMG_6669.jpg, IMG_6670.jpg
│   ├── 3/ → IMG_6671.jpg, IMG_6672.jpg, IMG_6673.jpg, IMG_6674.jpg
│   ├── 4/ → IMG_6658.jpg, IMG_6659.jpg, IMG_6660.jpg, IMG_6661.jpg
│   ├── 5/ → IMG_6683.jpg, IMG_6684.jpg
│   ├── 6/ → IMG_6662.jpg, IMG_6663.jpg, IMG_6664.jpg, IMG_6665.jpg, IMG_6666.jpg
│   └── 7/ → IMG_6652.jpg, IMG_6653.jpg, IMG_6654.jpg, IMG_6655.jpg, IMG_6656.jpg, IMG_6657.jpg
├── Braided Wigs/
│   ├── 1/ → IMG_6679.jpg, IMG_6680.jpg, IMG_6681.jpg, IMG_6682.jpg
│   ├── 2/ → IMG_6695.jpg, IMG_6696.jpg, IMG_6697.jpg, IMG_6698.jpg
│   ├── 3/ → IMG_6691.jpg, IMG_6692.jpg, IMG_6693.jpg, IMG_6694.jpg
│   └── 4/ → IMG_6687.jpg, IMG_6688.jpg, IMG_6689.jpg, IMG_6690.jpg
└── Burmese Curls/
    ├── 1/ → IMG_6675.jpg, IMG_6676.jpg, IMG_6677.jpg, IMG_6678.jpg
    └── 2/ → IMG_6644.jpg, IMG_6645.jpg, IMG_6646.jpg, IMG_6647.jpg
```

---

## 🚀 After Conversion

Once you've converted all images to JPG:

1. **Test locally**: Run `npm start` to test your website
2. **Check images**: All product images should load correctly
3. **Deploy**: Push to your repository or deploy to hosting

---

## ❓ Troubleshooting

### Images still not showing?
- Make sure file extensions are `.jpg` (lowercase)
- Check that folder structure matches exactly
- Clear browser cache (Ctrl + Shift + R)

### Conversion taking too long?
- Convert in batches (one category at a time)
- Use bulk converter for faster processing

### File names don't match?
- Rename files to match the original names (e.g., IMG_6648.jpg)
- Keep the IMG_XXXX naming pattern

---

## 💡 Tips

- **Keep original files** backed up somewhere safe before deleting
- **Convert all at once** using bulk converter to save time
- **Check file sizes**: Ideally keep each image under 500KB for faster loading
- **Optional**: Use https://tinyjpg.com to compress JPGs further

---

## ✅ What's Already Done

✅ Code updated to use local image paths  
✅ All 13 products configured in WigsSaleSection.js  
✅ Image paths point to `/img/[Category]/[Number]/[Filename].jpg`  

## 🎯 What You Need to Do

1. Convert HEIC → JPG
2. Test the website
3. Deploy!

---

**Need help?** Let me know if you encounter any issues during conversion!

