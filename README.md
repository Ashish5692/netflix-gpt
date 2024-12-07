# Netflix GPT

- Create React App
- Configured tailwind css
- Header
- Routing of App
- Login Form
- We will convert the same Login form to Sign up from once user clicked on new Sign up Now!!
- Sign Up Form
- Form Validations
- useRef Hooks
- Building Authentication -we need backend so we need Firebase for building authentication
- Firebase setup
- Deploying our app to production.
- Once the user sign in or user sign up put that user data to redux store and navigate the user to browse page.
- Implement SignIn user api
- Created up Redux store with userSlice.
- Update the userSlice with user as soon as user sign up/in
- Adding header in Browse Page
- Implemented Sign Out Features
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is logged in Redirect/ browse to Login Page and vice-versa
- unsubscribing to the onAuthStateChange callback - when component unmounts.
- Fetch Movies from TMDB Movies
- Add Hardcoded values to the constant file.
- Register TMDB API & Create an app & get access token
- Get Data from TMDB now playing movies list API
- Put movie data inside redux store.
- Custom Hook for Now Playing Movies.
- Created movieSlice
- Update store with movies data
- Building Browse Page
- Planning for Main Container and Secondary Container
- putting trailer into the store
- Fetch data for Trailer Video
- Updated Stoe with Trailer Video Data 
- Embedded the youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome.
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browser page amazing with Tailwind CSS
- usePopularMovies Custom hook




--------
# Features
- Login/Sign Up Page
    - Sign In / Sign Up Form
    - Redirect to Browse Page

- Browse (After Authentication)
    - Header
    - Login Form
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - Movie Lists X n

- Netflix GPT
    - Search Bar
    - Movie Suggestions