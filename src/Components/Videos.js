import React from 'react';
import { Player } from 'video-react';


const Videos = () => {
    return ( 
        <div className="row" id="video" style={{marginBottom:"5%",}}>
            <div className="col-8">
                <Player
                    className="vid"
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </div>
            <div className="col">
                <div className="row vid1" style={{marginBottom: "17%",}}>
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
                <div className="row vid1" style={{marginTop: "10%",}}>
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Videos;