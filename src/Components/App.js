// import React from 'react'
// import Si from './SearchInput';

// const App=()=>{
//     return(<div><div className='ui container' style={{marginTop:"30px"}}><Si/></div></div>)
// }

// export default App;


//tamil hacks method
import React from 'react'
import Si from './SearchInput';
import Axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={images:[]}
    }
    onS=async(x)=>{
        const response=await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${x}&image_type=photo&pretty=true`)
        this.setState({images: response.data.hits})
    }

    render(){return(<div><div className='ui container' style={{marginTop:"30px"}}><Si onSearch={this.onS}>
        </Si><div>we currently have {this.state.images.length} images</div>
        <ImageList imgs={this.state.images}></ImageList></div>
    </div>)
}
}
export default App;