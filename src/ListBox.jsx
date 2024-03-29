import './listBox.css'
const ListBox = ({ items, activeIndex }) => {
  return (
    <>
      <ul className="listBoxContainer">
        {items.map((item, index) => <li 
          key={index} 
          className={`listBoxItem ${index === activeIndex ? "activeIndex": ""}`}
        >{item.name}</li>
        )}
      </ul>
    </>
  )
}

export default ListBox
