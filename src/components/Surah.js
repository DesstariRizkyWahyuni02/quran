import React, { useEffect, useState} from 'react';
import {Accordion, Card, Col, Row} from "react-bootstrap";
import { useParams} from "react-router-dom";
import axios from "axios";

const Surah=()=> {
    const {id} = useParams();
    const [namaSurah, setNamaSurah] = useState([]);
    const [ayat, setAyat]= useState([]);
    const [arti, setArti]=useState([]);
    const [audioAyat, setAudioAyat]= useState([]);
    const [audioSurah, setAudioSurah]=useState([]);
    const [info, setInfo]=useState([]);
    const [surah, setSurah]= useState([])

    useEffect(() => {
        axios.get("https://api.quran.com/api/v4/chapters/" + id)
            .then((res) => {
                setNamaSurah(res.data.chapter)
            })
            .catch((error) => {
                console.log(error, 'error handle nama surah')
            })
        axios.get("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=" + id)
            .then((res)=>{
                setAyat(res.data.verses)
            })
            .catch((error)=>{
                console.log(error, 'error handle ayat surah')
            })
        axios.get("https://api.quran.com/api/v4/quran/translations/134?chapter_number=" +id)
            .then((res)=>{
                setArti(res.data.translations)
            })
            .catch((error)=>{
                console.log(error, 'error handle arti surah')
            })
        axios.get("https://api.quran.com/api/v4/quran/recitations/7?chapter_number=" +id)
            .then((res)=>{
                setAudioAyat(res.data.audio_files)
            })
            .catch((error)=>{
                console.log(error, "error handle audio ayat")
            })
        axios.get("https://api.quran.com/api/v4/chapter_recitations/7/" +id)
            .then((res)=>{
                setAudioSurah(res.data.audio_file)
            })
            .catch((error)=>{
                console.log(error, "error handle audio ayat")
            })
        axios.get("https://api.quran.com/api/v4/chapters/" + id + "/info?language=id")
            .then((res)=>{
                setInfo(res.data.chapter_info)
            })
            .catch((error)=>{
                console.log(error, 'error handle info')
            })

    },[id])
    return (
        <> <p className="fs-1">
            {namaSurah.name_arabic}</p>
                <audio  src={audioSurah.audio_url} controls />
            <Accordion width="20px">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><img src="info.jpg" className="rounded float-left"  width="20px"></img> Info Surah</Accordion.Header>
                    <Accordion.Body>
                        <img src="translate.jpg" className="rounded float-left"  width="20px"></img>{info.source}
                        <p className="text-primary" dangerouslySetInnerHTML={{__html: info.short_text}}/>
                        <h3 className="text-start"><strong>Surah {namaSurah.name_arabic}</strong> </h3>
                        <p style={{fontSize:"12px"}} className="text-start" dangerouslySetInnerHTML={{__html: info.text}}/>
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>

                {ayat.map((ayatitem, index)=>(
                    <Card key={index} className="mt-1">
                        <Card.Body>
                            <Row>

                                <Col sm={1}>
                                    <span className="badge bg-primary">{ayatitem.verse_key}</span>
                                </Col>
                                <Col sm={11}>
                                    <p className="text-end fs-4" dangerouslySetInnerHTML={{__html:ayatitem.text_uthmani}}/>
                                    {arti.length? <p className="text-md-start " dangerouslySetInnerHTML={{__html:arti[index].text}} />:null}
                                    {audioAyat.length? <audio  className="h-10 mt-2   text-end float-end" src={"https://verses.quran.com/" + audioAyat[index].url} controls color="primary" />:null}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    ))}
        </>
    );

}

export default Surah;