import './App.css'
import ListBox from './ListBox.jsx'
import SearchBox from './searchBox/SearchBox.jsx';
const maxItems = 10

function App() {
  const transformData = (data) =>{ 
    return data.results.slice(0, maxItems)
  };

  const dataPromise = async (query, signal) => await fetch(`https://typeahead-api.onrender.com/user?search=${query}`, {signal})
  return (
    <>
    <div className="wrapper">
      <SearchBox 
        id="personName" 
        name="personName"
        label="Enter Person Name" 
        placeholder="Enter any name"
        autoComplete
        styles={{
          label:"label",
          input:"input"
        }}
        debounceWait={200}
        listBox={(items, activeIndex) => <ListBox items={items} activeIndex={activeIndex}/>}
        noItemMessage={() => <div>Sorry no person found</div>}
        errorMessage={() => <div>Something went wrong</div>}
        transformData={transformData}
        promise={dataPromise}
      />
    </div>
    </>
  )
}

export default App
