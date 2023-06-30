import React, { useState }  from 'react'
import Card from '../../Ui/Card'
import classes from './AllBooks.module.css'
import Table from '../../Componenets/Table'
import { useSelector} from 'react-redux'


const AllBooks = () => {

    const Data = useSelector(state => state.allBooks)
    const [value,setValue] =useState("");
    const search = (data)=>{
        return (data.filter((item)  => item.title.toLowerCase().startsWith(value.toLowerCase()) || item.author.toLowerCase().startsWith(value.toLowerCase()) || item.year.toLowerCase().startsWith(value.toLowerCase())))
    }
  return (
    <Card>
        <div className={classes.search}>
            <input type='search' placeholder='Search Here...' onChange={(e)=>setValue(e.target.value)}></input>
        </div>
        <Table data={search(Data)}/>
    </Card>
  )
}

export default AllBooks