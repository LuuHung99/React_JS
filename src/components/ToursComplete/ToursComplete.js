import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Typography,Row, Col } from 'antd';
const { Paragraph } = Typography;


function ToursComplete(props) {
    const {onSubmit} = props;
    const [ellipsis, setEllipsis] = useState(true);
    function handleRemote(e) {
        console.log('log',e);

        if(!onSubmit) return;
    }
    return (
        <>
            <Row>
                <Col span={12} offset={6} className="row tour">
                    <div className="tour__img">
                        <img style={{width: '100%', height: '50vh'}} src={props.url} alt=""></img>
                    </div>
                    <div className="tour__infor">
                        <div className="tour__title">
                            {props.title}
                        </div>
                        <div className="tour__price">
                            {props.price}
                        </div>
                    </div>
                    <div className="tour__text">
                        <Paragraph
                            ellipsis={
                            ellipsis
                                ? {
                                    rows: 1,
                                    expandable: true,
                                    symbol: 'more',
                                    // onExpand: setEllipsis(true)
                                    
                                }
                                : false
                            }
                        >
                           {!ellipsis?<button onClick={setEllipsis(false)}>hide</button>:null} 
                            {props.text}
                        </Paragraph>
                    </div>
                    <div className="tour__button">
                        <button
                            onClick={handleRemote}
                        >Not interested</button>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default ToursComplete;