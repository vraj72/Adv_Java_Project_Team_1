import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function T_Contest_card(props){

    const navigate = useNavigate();
    function seeAttemptPage() {
        navigate(`/teacher-see-attempts/${props.ID}`)
    }

    function editContest() {
        navigate(`/teacher-create-contest/${props.ID}`,{ state: { contestId: props.ID } })
    }

    return(
        <Card className="mt-3 " border="danger"  text="muted" >
            <Card.Header  as="h5">Contest ID : {props.ID}</Card.Header>
            <Card.Body>
                <Card.Title >Title : {props.title}</Card.Title>
                <Card.Text >
                    <h6>Description : </h6>{props.description} <hr></hr>
                    {/* <h6>Start Time : {props.start_time} </h6>
                    <h6>End Time : {props.end_time} </h6> */}
                </Card.Text>
                <Button  onClick={seeAttemptPage} variant="primary">See Results</Button> &nbsp;&nbsp;
                <Button  onClick={editContest} variant="success">Add Problem to contest</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Created AT : {props.created_at}</Card.Footer>
        </Card>
    );
}