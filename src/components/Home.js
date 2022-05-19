import React from 'react';
import {useState, useEffect } from "react";
import axios from "axios";
import {Nav,Card} from "react-bootstrap";

function Home(){
    const [surah, setSurah]= useState([])

    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/chapters?language=id" )
            .then((res)=>{
                setSurah(res.data.chapters)
            })
            .catch((error)=>{
                console.log(error, 'error handle surah')
            })
    },[])
    return (
        <div className="bg-light p-5 rounded">
            <div className="col-sm-8 mx-auto">
                <h1>Selamat Datang di API QURAN</h1>
                <p>Jangan lupa membaca Bismillah</p>
            </div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Surah</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/HomeJuz">Juz</Nav.Link>
                </Nav.Item>
            </Nav>

        <div className="card-group " style={{margin:"auto"}} >
                    {surah.map((surahitem, index)=>(
                        <div  key={index} style={{marginLeft:"25px"}}>
                            <div >
                                <><br></br>
                                    <Card  border="primary" style={{ width: '10rem' }}>
                                        <Card.Header  > <a class="stretched-link text-primary" href={"/Surah" + surahitem.id}>
                                            Surah {surahitem.id}</a></Card.Header>

                                        <Card.Body>
                                            <Card.Text>
                                                {surahitem.name_arabic}<br></br>
                                                {surahitem.name_complex}<br></br>
                                                {surahitem.revelation_place}
                                            </Card.Text>
                                            
                                        </Card.Body>
                                </Card>


                                    </>
                            </div>
                        </div>

                            ))}
        </div> </div>
            );

            }


            export default Home;