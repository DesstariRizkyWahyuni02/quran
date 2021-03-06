import React from 'react';
import {useState, useEffect } from "react";
import axios from "axios";
import { Card, Col,  Row,} from "react-bootstrap";
import {useParams} from "react-router-dom";

function Juz(){
    const {id} =useParams()
    const [ayatJuz, setAyatjuz]=useState([]);
    const [artiJuz, setArtiJuz]=useState([]);
    const [audioJuz, setAudioJuz]=useState([]);

    useEffect(() => {
        axios.get("https://api.quran.com/api/v4/quran/verses/uthmani?juz_number=" + id)
            .then((res)=>{
                setAyatjuz(res.data.verses)
            })
            .catch((error)=>{
                console.log(error, ' error handle ayat juz')
            })
        axios.get("https://api.quran.com/api/v4/quran/translations/134?juz_number=" +id)
            .then((res)=>{
                setArtiJuz(res.data.translations)
            })
            .catch((error)=>{
                console.log(error, 'error handle arti juz')
            })
        axios.get("https://api.quran.com/api/v4/recitations/7/by_juz/" +id + "?per_page=999999999" )
            .then((res)=>{
                setAudioJuz(res.data.audio_files)
            })
            .catch((error)=>{
                console.log(error, "error handle audio ayat")
            })

    },[id])
    return (
        <>

                {ayatJuz.map((ayatitem, index)=>(
                <Card key={index} className="mt-1">
                    <Card.Body>
                        <Row>

                            <Col sm={1}>
                                <span className="badge bg-primary">{ayatitem.verse_key}</span>
                            </Col>
                            <Col sm={11}>
                                <p className="text-end fs-4">{ayatitem.text_uthmani}</p>
                                {artiJuz.length? <p className="text-md-start " dangerouslySetInnerHTML={{__html:artiJuz[index].text}} />:null}
                                {audioJuz.length? <audio  className="h-10 mt-10   text-end float-end" src={"https://verses.quran.com/" + audioJuz[index].url} controls />:null}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </>
    );

}

export default Juz;