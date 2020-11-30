import React from 'react'
import { TwitterTimelineEmbed} from 'react-twitter-embed'
const Tweets = () => {
    return(
        <section style={{display: "flex", justifyContent: "center", paddingTop: 20}}>
             <TwitterTimelineEmbed
                sourceType="profile"
                screenName="sanidadgob"
                options={{height: 900, width: 1200}}
        />
        </section>
    )
}

export default Tweets;