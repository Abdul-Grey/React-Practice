//Creates a component to hold a GroceryList
function GroceryList(props) {
  return (
    <ul className='todolist' idname='container'>
    {
      props.listItems.map(
        (listitem,index)=>(
          <li key={index}>{listitem}&nbsp;
            <span className='XElement' onClick={()=>{props.onRemoveItem(listitem)}}>&times;
            </span>
          </li>
        )
      )
    }
    </ul>
  )
}

//Creates a class to create a component that has a state and behavior

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //here goes only data. nothing more than that.
      toDoListItems : ['Eggs','Bread','Butter','Sugar','Milk','Wheat','Chicken'],
      item: ''
    }
    this.removeItemFromList = this.removeItemFromList.bind(this)
    this.addItemToList = this.addItemToList.bind(this)
    this.setItem = this.setItem.bind(this)
  }
  addItemToList(){
    this.setState(
      (currentState)=>{
          return{
          toDoListItems: currentState.toDoListItems.concat([this.state.item]),
          item: '',
        }
      }
    )
  }

  removeItemFromList(itemToRemove){
    this.setState(
      (currentState)=>{
        return {
          toDoListItems : currentState.toDoListItems.filter((item)=> item!==itemToRemove),
          item: ''
        }
      }
    )
  }

  setItem(event){
    this.setState(
      {item: event.target.value}
    )
  }

  render(){
    return (
      <div>
      <input type='text' idname='itemtoadd' placeholder='Add item to list' value={this.state.item} name='item'onChange={this.setItem}/>&nbsp;
      <button idname='add' onClick={this.addItemToList}>Add Item</button>
      <GroceryList listItems={this.state.toDoListItems} onRemoveItem={this.removeItemFromList}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
