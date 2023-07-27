import '../../App.css'
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import avatar1 from 'assets/images/avatars/avatar1.svg'
import { Card } from 'components/Card/Card';
import ProductList from 'components/ProductList/productList';

const CategoriesStyled = styled.div`
    /* background-color: yellow; */
    background: #FAFEFF;
    .sub-title{
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
        color: #0C4CA3;
        padding-top: 70px;
    }
    .title{
        font-size: 40px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 0em;
        color: #5F6368;
        margin-top: 12px;
    }
    .ul-categories{
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin-top: 100px;
    }
    .courses{
        margin-top: 80px;
    }
`

const CategotyNameStyled = styled.div`
    display: inline-block;

    padding: 4px 26px 8px;
    color: #96989B;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 19px;
    background: #FFF;
    &:hover{
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05), 0px -4px 10px 0px rgba(0, 0, 0, 0.05);
    }
`

const Categoty = ({ children }) => {
    return <CategotyNameStyled>
            <p>
                {children}
            </p>
    </CategotyNameStyled>
}

const Categories = () => {
    const [categories, setCategories] = useState([])

    // const fetchUserData = () => {
    //     fetch("http://localhost:8080/admin/categoties", {
    //         method: 'GET',
    //         headers: { accept: 'application/json' },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setCategories(data)
    //         })
    // }


    // async function getCalegories() {
    //     try {
    //         const response = await
    //             fetch('http://localhost:8080/admin/categoties', {
    //                 // fetch('https://jsonplaceholder.typicode.com/users', {
    //                 method: 'GET',
    //                 headers: {
    //                     accept: '*/*'
    //                 },
    //             });

    //         if (!response.ok) {
    //             throw new Error(`Error! status: ${response.status}`)
    //         }

    //         const result = await response.json();
    //         console.log(result)
    //         setCategories(result);

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    // useEffect(() => {
    //     getCalegories();
    // }, [])



    return <CategoriesStyled>
        <p className="sub-title">Popular Categories</p>
        <p className="title">Explore the most popular categories</p>
        <div className="categories">
            {/* <ul className='ul-categories'>
                {categories.map(categoty => (
                    <li><Categoty>{categoty.name}</Categoty></li>
                ))}
            </ul> */}
        </div>

        <div className='courses'>
            <ProductList />
            {/* <div className='tutor'>
            </div> */}
        </div>
    </CategoriesStyled>
}

export default Categories