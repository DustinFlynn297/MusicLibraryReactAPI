import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './UpdateSong.css'




const UpdateSong = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const [song, setSong] = useState({
        title: props.song.title,
        artist: props.song.artist,
        album: props.song.album,
        release_date: props.song.release_date,
        genre: props.song.genre,
    })
    const handleChange = (event) => {
        event.persist();
        setSong((song) => ({
            ...song,
            [event.target.name]: event.target.value,
        }));
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateSong(props.song.id, song);
    }

    
    return (
        <>
            <input className='btn btn-md btn-outline-dark bg-light' type="button" onClick={handleOpen} value="Edit" />


            <Modal show={show} onHide={handleClose} className='modal-font text-center'
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton id='modal-header-styling'>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Music Editor:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body-styling'>
                    <form onSubmit={handleSubmit} className='put'>
                        <Row className='mb-2'>
                            <Form.Group as={Col} controlID='title'>
                                    <Form.Label>Title:</Form.Label>
                                    <Form.Control className='form-control shadow m-1' name='title' value={song.title} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlID='artist'>
                                    <Form.Label>Artist:</Form.Label>
                                    <Form.Control className='form-control shadow m-1' name='artist' value={song.artist} onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlID='album'>
                                    <Form.Label>Album:</Form.Label>
                                    <Form.Control className='form-control shadow m-1' name='album' value={song.album} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlID='release_date'>
                                    <Form.Label>Release Date:</Form.Label>
                                    <Form.Control className='form-control shadow m-1'  name='release_date' type="date" value={song.release_date} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlID='genre'>
                                    <Form.Label>Genre:</Form.Label>
                                    <Form.Control className='form-control shadow m-1'  name='genre' value={song.genre} onChange={handleChange} />
                            </Form.Group>                            
                        </Row>
                        <Button variant="secondary" className='shadow mt-4 m-1' id='submit-button' type="submit"  >
                        Submit
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateSong;