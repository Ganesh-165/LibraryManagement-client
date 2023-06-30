import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Table.module.css';
import Button from '../Ui/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {decrease} from '../Store/AllBooks';
import { addItem } from '../Store/Books';

const Table = (props) => {
    const dispatch = useDispatch();
    const Data = props.data
    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage*recordsPerPage;
    const firstIndex = lastIndex-recordsPerPage;
    const records = Data.slice(firstIndex,lastIndex);
    const noofpages = Math.ceil(Data.length/recordsPerPage);
    const numbers = [...Array(noofpages + 1).keys()].slice(1);
    const prePage = ()=>{
        if(currentPage!==firstIndex && currentPage>1){
            setCurrentPage(currentPage-1);
        }
    }
    const changeCurrpage = (id)=>{
        setCurrentPage(id);
    }
    const nextPage = ()=>{
        if(currentPage!==lastIndex && currentPage<noofpages){
            setCurrentPage(currentPage+1);
        }
    }
    const cartHandler = (item)=>{
        dispatch(decrease(item.id));
        dispatch(addItem(item));
    }
  return (
    <Fragment>
        {
            records.length>0 ? <div>
                <div className={classes.tableheader}>
                <div className={classes.headeritem}>Book Name</div>
                <div className={classes.headeritem}>Author Name</div>
                <div className={classes.headeritem}>No of Copies</div>
                <div className={classes.headeritem}>Year</div>
                <div className={classes.headeritem}>Add to Cart</div>
            </div>
            <table>
                <tbody>
                {records.map(item =>(
                    <tr className={classes.tablerow} key={item.id}>
                        <td className={classes.tabledata}>{item.title}</td>
                        <td className={classes.tabledata}>{item.author}</td>
                        <td className={classes.tabledata}>{item.noofcopies}</td>
                        <td className={classes.tabledata}>{item.year}</td>
                        <td className={classes.tabledata}><span onClick={()=>cartHandler(item)}><Button name='Add to Cart'/></span></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            :
            <h2>No Recodrs Found</h2>
        }
        <nav className={classes.navpagination}>
            {
                records.length>0 && 
                <ul className={classes.pagination}>
                    <li className={classes.pageitem}>
                        <NavLink onClick={prePage}  className={classes.active}>Prev</NavLink>
                    </li>
                    {
                        numbers.map((n,i)=>(
                            <li className={classes.pageitem} key={n}>
                                <NavLink onClick={()=>changeCurrpage(n)} className={(currentPage===n ? classes.active : classes.a)}>{i+1}</NavLink>
                            </li>
                        ))
                    }
                    <li className={classes.pageitem}>
                        <NavLink onClick={nextPage} className={(isActive)=>(isActive ? classes.active : undefined)}>Next</NavLink>
                    </li>
                </ul>
            }
            <div className={classes.footer}>
                <NavLink to='..' className={classes.navbutton}><Button name='Go Back'/></NavLink>
            </div>
        </nav>
    </Fragment>
  )
}

export default Table
