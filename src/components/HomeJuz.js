import React from 'react';
import {useState, useEffect } from "react";
import axios from "axios";
import { Card, Nav} from "react-bootstrap";

function HomeJuz(){
    const [juz, setJuz] = useState([]);

    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/juzs")
            .then((res )=>{
                setJuz(res.data.juzs)

            })
            .catch((error)=>{
                console.log(error, "error handle juz")
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
                {juz.map((juzitem, index)=>(
                    <div  key={index} style={{marginLeft:"25px"}}>
                        <div >
                            <><br></br>
                                <Card  border="primary" style={{ width: '10rem' }}>
                                    <Card.Header  > <a class="stretched-link text-primary" href={"/Juz"+ juzitem.id}>
                                        {"Juz " + juzitem.id} </a></Card.Header>

                                    <Card.Body>
                                        <Card.Text>
                                            <p className="card-text text-start" style={{fontSize:"12px"}}>
                                                <strong>Ayat Pertama : </strong>{juzitem.first_verse_id} <br/>
                                                <strong>Ayat Terakhir : </strong>{juzitem.last_verse_id} <br/>

                                            </p>
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


export default HomeJuz;