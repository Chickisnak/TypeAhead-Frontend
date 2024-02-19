# React Search Box Component

### Overview

This is a React search box component with auto-complete functionality. It fetches data from a typeahead API and displays suggestions in a list. Users can navigate through the suggestions using keyboard arrow keys and select an item by pressing Enter.

### Installation


1. Clone the repository
 ```
 git clone [repository_url]
 ```
2. Install dependencies
```
npm install
```

### Usage

1. Import the `SearchBox` component in your React application
```javascript
import SearchBox from './path/to/SearchBox';
```

2. Use the `SearchBox` component in your application
```javascript
function App() {
  // Your existing code
}
```
Customize the `transformData` and `promise` functions as needed for your application.

3. Customize styles in the CSS files (`App.css`, `listBox.css`). You can modify the styles according to your project's design.

4. Run your React application
```
npm start
```

## Components

### App.js

The main component that integrates the SearchBox component and defines the data transformation and promise functions.

### ListBox.jsx

A simple component to display a list of items. It is used by the SearchBox component to show auto-complete suggestions.

### SearchBox.jsx

The main search box component that handles user input, fetches data from the API, and displays suggestions.

### useFetchPromise.js

A custom hook for fetching data using promises with debouncing. It helps in managing asynchronous requests and handling errors.

### Dependencies

React

lodash (for debouncing)
