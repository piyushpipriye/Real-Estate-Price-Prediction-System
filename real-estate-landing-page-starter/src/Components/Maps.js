import { Component } from 'react'
import {Map , GoogleApiWrapper} from 'google-maps-react'
import { height, width } from '@mui/system'
class Maps extends Component{
    render(){
        return(
            <Map
                google={this.props.google}
                style={{width:"35%",height:"40%",top:"-20%"}}
                zoom={10}
                initialCenter = {
                    {
                    lat :19.879910,
                    lng :75.371582
                    }
                }
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey:"your_api_key"
})(Maps)
