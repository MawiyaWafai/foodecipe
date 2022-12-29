import React from 'react';
import { Player } from 'video-react';
import 'video.js/dist/video-js.css';

const Videos = () => {
    return ( 
        <div className="row">
            <div className="col">
                <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
            </div>
            <div className="col">
                <div className="row">
                <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
                </div>
                <div className="row">
                <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
                </div>
            </div>
        </div>
     );
}
 
export default Videos;