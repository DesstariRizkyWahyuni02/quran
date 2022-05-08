import React from 'react';
import {useState, useEffect } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import {Button, Card, Form, FormControl} from "react-bootstrap";

function Juz(){
    const [chapters, setchapters] = useState()
    const [Search, setSearch] = useState()
    const [dataSearched, setDataSearched] = useState()

    useEffect(() => {
        retrievechapters()
    },[])

    const retrievechapters = async  () => {
        try{
            const { data } = await axios.get(`https://api.quran.com/api/v4/chapters/2/info?language=id`)
            setchapters(data)
            // console.log(data, '<== response chapters')
        }catch (error){
            console.log(error, '<==error retrieve chapters')
        }
    }

    const handleChange = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            const {data} = await axios.get(`https://api.quran.com/api/v4/chapters/2/info?language=id/chapter_number=${Search}`)
            // console.log(data, '<== response handle submit')
            setDataSearched(data.chapter_info )
        }catch (error) {
            console.log(error, 'error bandle submit')
        }
    }
    return (

        <div className="bg-light p-5 rounded">
            <div className="col-sm-8 mx-auto">
                <h1>Selamat Datang di API QURAN</h1>
                <p>Silahkan mencari Juz di menu "Search"</p>
            </div>

            <div className="home">
                <form onSubmit={handleSubmit} >
                    <input onChange ={handleChange}
                        // type="search"
                        // placeholder="Search"
                        // className="me-50"
                        // aria-label="Search"
                    />
                    <button >Search</button>
                </form>

                <ul>
                    {dataSearched && dataSearched.map((data, index) => {
                        console.log(data, '<== data searched')
                        return(
                            // null
                            <><br></br>
                                <Card>
                                    <Card.Header>Juz</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {data.chapter_id}<br></br>
                                            {data.short_text}<br></br>
                                            {/*{data.revelation_place}*/}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>

                            </>

                        )
                    })}
                </ul>
                {/*{JSON.stringify(dataSearched)}*/}
                {/*<ul>*/}
                {/*    {juzs && juzs.map((juzs, index) => (*/}
                {/*        <li key={index} > {juzs} </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        </div>

    );

}
export default Juz;