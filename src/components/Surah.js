import React from 'react';
import {useState, useEffect } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import {Button, Card, Form, FormControl} from "react-bootstrap";

function Surah(){
    const [chapters, setchapters] = useState()
    const [Search, setSearch] = useState()
    const [dataSearched, setDataSearched] = useState()

    useEffect(() => {
        retrievechapters()
    },[])

    const retrievechapters = async  () => {
        try{
            const { data } = await axios.get(`https://api.quran.com/api/v4/quran/translations/174?fields=id&chapter_number=1/translations`)
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
            const {data} = await axios.get(`https://api.quran.com/api/v4/quran/translations/174?fields=id&chapter_number=1/translation_id=${Search}`)
            // console.log(data, '<== response handle submit')
            setDataSearched(data.translations )
        }catch (error) {
            console.log(error, 'error bandle submit')
        }
    }
    return (

        <div className="bg-light p-5 rounded">
            <div className="col-sm-8 mx-auto">
                <h1>Selamat Datang di API QURAN</h1>
                <p>Silahkan mencari surah di menu "Search"</p>
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
                                    <Card.Header>Surah</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {data.name_arabic}<br></br>
                                            {data.name_complex}<br></br>
                                            {data.revelation_place}
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
export default Surah;