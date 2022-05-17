import React from 'react'


function Form() {
  return (
    <form>
    <label> Search for Player: </label>
    <input type='search' placeholder="Search Player"></input>
    <button>Search Player</button>
    <button>Reset Search</button>
    </form>
  )
}
export default Form;