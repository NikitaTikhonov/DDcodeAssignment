# Assignment

### Features
- Home screen layout with header animation
- Splash screen implemented natively on both platforms (Android uses new Android 12+ splash screen)
- App icons
- Animated icons in the bottom tab navigation
- Different card components

### List of knows issues

- Some components like IconBar could be more reusable
- Animated header and body should be moved to the template and made more reusable as similar behavior is used on another page
- The Container/Component/VM architecture is not followed everywhere where it could be followed
- Card scrolls miss carousel behavior.
- Images are not in the same format everywhere and are not optimal. So we have some delay before they are shown.
- App was tested only on Iphone 12Pro Max, Iphone 13, Iphone 11, Google Pixel 3, Pixel 5 so could be some UI bugs on other devices




## Installation
The app was developed uder M1 so pod command installs pod for -x86_64 arch
```sh
cd DDietDoctorAssignment
yarn
yarn pod
yarn ios 
yarn android
```
