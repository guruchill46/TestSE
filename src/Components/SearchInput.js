//ui form creation
// import React from 'react';

// class SearchInput extends React.Component{

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form">
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text'  placeholder='Search Here'></input>
//                                 <i className='search icon'></i>
//                              </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput;



//reading value onChange
// import React from 'react';

// class SearchInput extends React.Component{
//     onType(x){
//         console.log(x.target.value)
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form">
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text'  placeholder='Search Here'
//                                  onChange={this.onType}></input>
//                                 <i className='search icon'></i>
//                              </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput;


//placing onType inside onChange event handler
// import React from 'react';

// class SearchInput extends React.Component{

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form">
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text'  placeholder='Search Here'
//                                  onChange={(x)=>console.log(x.target.value)}></input>
//                                 <i className='search icon'></i>
//                              </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput; 



//making onChange into a controlled Component
//Controlled Component- It is one that takes its current value through props and notifies the changes through 
//the callbacks like onChange
//uncontrolled Component- It is one that store its own state internally and you query the DOM using ref to 
//find its current value when you need it.

//to make it controlled component
// import React from 'react';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : ''}
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form">
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text' placeholder='Search Here'
//                                  onChange={(x)=>{this.setState({entry:x.target.value});
//                                  console.log(this.state.entry)
//                                 }}
//                                  value={this.state.entry}//not necessary
//                                  ></input>
//                                 <i className='search icon'></i>
//                              </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput; 



//to use Lowercase function
// import React from 'react';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : ''}
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form">
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text' placeholder='Search Here'
//                                  onChange={(x)=>{this.setState({entry:x.target.value.toUpperCase()});
//                                  console.log(this.state.entry)
//                                 }}
//                                  value={this.state.entry}//USED TO DISPLAY THE CURRENT VALUE STORED IN STATE-
//                                  //IN THE INPUT SPACE 
//                                  ></input>
//                                 <i className='search icon'></i>
//                              </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput; 



//using onSubmit event handler and .bind function
// import React from 'react';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : ''}
//         this.onFormSubmit=this.onFormSubmit.bind(this)// used to use (this) outside constructor. 
//         //but (this) can be used ine render without using .bind function
//     }

//     onFormSubmit(x){
//         x.preventDefault();
//         console.log(this.state.entry)
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form" onSubmit={this.onFormSubmit}>
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text' placeholder='Search Here'
//                                  onChange={(x)=>{this.setState({entry:x.target.value.toUpperCase()});
//                                  //console.log(this.state.entry)
//                                 }}
//                                  value={this.state.entry}//USED TO DISPLAY THE CURRENT VALUE STORED IN STATE-
//                                  //IN THE INPUT SPACE 
//                                  ></input>
//                                 <i className='search icon'></i>
//                              </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput; 



//AJAX- Asynchronous Java And XML.
//it is used to get send and receive date from servers
//we use pixabay Api for data collection
//fetch is used to get data from the api and to load on our website
// but fetch coding is complex and more lines of code
//so we use axios (third party package)

// import React from 'react';
// import Axios from 'axios';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : ''}
//         this.onFormSubmit=this.onFormSubmit.bind(this)// used to use (this) outside constructor. 
//         //but (this) can be used ine render without using .bind function
//     }

//     onFormSubmit(x){
//         x.preventDefault();
//         const response= Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${this.state.entry}&image_type=photo&pretty=true`)
//         console.log(this.state.entry)
//         console.log(response)
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form" onSubmit={this.onFormSubmit}>
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text' placeholder='Search Here'
//                                  onChange={(x)=>{this.setState({entry:x.target.value.toUpperCase()});
//                                  //console.log(this.state.entry)
//                                 }}
//                                  value={this.state.entry}//USED TO DISPLAY THE CURRENT VALUE STORED IN STATE-
//                                  //IN THE INPUT SPACE 
//                                  ></input>
//                                 <i className='search icon'></i>
//                              </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput; 



//using async and await function
// import React from 'react';
// import Axios from 'axios';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : ''}
//         this.onFormSubmit=this.onFormSubmit.bind(this)// used to use (this) outside constructor. 
//         //but (this) can be used ine render without using .bind function
//     }

//    async onFormSubmit(x){
//         x.preventDefault();
//         const response= await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${this.state.entry}&image_type=photo&pretty=true`)
//         console.log(this.state.entry)
//         console.log(response.data.hits)
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form" onSubmit={this.onFormSubmit}>
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text' placeholder='Search Here'
//                                  onChange={(x)=>{this.setState({entry:x.target.value.toUpperCase()});
//                                  //console.log(this.state.entry)
//                                 }}
//                                  value={this.state.entry}//USED TO DISPLAY THE CURRENT VALUE STORED IN STATE-
//                                  //IN THE INPUT SPACE 
//                                  ></input>
//                                 <i className='search icon'></i>
//                              </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput; 



//storing hits in state
// import React from 'react';
// import Axios from 'axios';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : '', images: []}//[] used because images in a array
//         this.onFormSubmit=this.onFormSubmit.bind(this)// used to use (this) outside constructor. 
//         //but (this) can be used ine render without using .bind function
//     }

//    async onFormSubmit(x){
//         x.preventDefault();
//         const response= await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${this.state.entry}&image_type=photo&pretty=true`)
//         console.log(this.state.entry)
//         console.log(response.data.hits)
//         this.setState({images: response.data.hits})
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form" onSubmit={this.onFormSubmit}>
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text' placeholder='Search Here'
//                                  onChange={(x)=>{this.setState({entry:x.target.value.toUpperCase()});
//                                  //console.log(this.state.entry)
//                                 }}
//                                  value={this.state.entry}//USED TO DISPLAY THE CURRENT VALUE STORED IN STATE-
//                                  //IN THE INPUT SPACE 
//                                  ></input>
//                                 <i className='search icon'></i>
//                              </div>
//                              <div>we currently have {this.state.images.length} images</div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput;


//below is simple method for getting and displaying image
// import React from 'react';
// import Axios from 'axios';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : '', images: [],imgs:''}//[] used because images in a array
//         this.onFormSubmit=this.onFormSubmit.bind(this)// used to use (this) outside constructor. 
//         //but (this) can be used ine render without using .bind function
//     }

//    async onFormSubmit(x){
//         x.preventDefault();
//         const response= await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${this.state.entry}&image_type=photo&pretty=true`)
//         console.log(this.state.entry)
//         console.log(response.data.hits)
//         this.setState({images: response.data.hits})
//         const im=this.state.images.map((x)=>{
//             return(<img key={x.id} src={x.webformatURL} alt='not available' ></img>)
//         })
//         this.setState({imgs: im})
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form" onSubmit={this.onFormSubmit}>
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text' placeholder='Search Here'
//                                  onChange={(x)=>{this.setState({entry:x.target.value.toUpperCase()});
//                                  //console.log(this.state.entry)
//                                 }}
//                                  value={this.state.entry}//USED TO DISPLAY THE CURRENT VALUE STORED IN STATE-
//                                  //IN THE INPUT SPACE 
//                                  ></input>
//                                 <i className='search icon'></i>
//                              </div>
//                              <div>we currently have {this.state.images.length} images</div>
//                         </div>
//                     </form>
//                 </div>
//                 <div>{this.state.imgs}</div>
//             </div>
        
//         )
//         }
// }
// export default SearchInput;



// learned method for listing images using another component Imagelist
// import React from 'react';
// import Axios from 'axios';
// import ImageList from './ImageList';
// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : '', images: []}//[] used because images in a array
//         this.onFormSubmit=this.onFormSubmit.bind(this)// used to use (this) outside constructor. 
//         //but (this) can be used ine render without using .bind function
//     }

//    async onFormSubmit(x){
//         x.preventDefault();
//         const response= await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${this.state.entry}&image_type=photo&pretty=true`)
//         console.log(this.state.entry)
//         console.log(response.data.hits)
//         this.setState({images: response.data.hits})
//     }

//     render(){
//         return(
//             <div><h1>Search Engine</h1>
//                 <div className="ui segment">
//                     <form action="" className="ui form" onSubmit={this.onFormSubmit}>
//                         <div className='field'>
//                             <div className='ui massive icon input'>                       
//                                  <input type='text' placeholder='Search Here'
//                                  onChange={(x)=>{this.setState({entry:x.target.value.toUpperCase()});
//                                  //console.log(this.state.entry)
//                                 }}
//                                  value={this.state.entry}//USED TO DISPLAY THE CURRENT VALUE STORED IN STATE-
//                                  //IN THE INPUT SPACE 
//                                  ></input>
//                                 <i className='search icon'></i>
//                              </div>
//                              <div>we currently have {this.state.images.length} images</div>
//                         </div>
//                     </form>
//                 </div>
//                 <ImageList imgs={this.state.images}></ImageList>
//             </div>
        
//         )
//         }
// }
// export default SearchInput;


//attaching navigation bar
import React from 'react';
import Axios from 'axios';
import ImageList from './ImageList';
class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state={entry : '', images: []}//[] used because images in a array
        this.onFormSubmit=this.onFormSubmit.bind(this)// used to use (this) outside constructor. 
        //but (this) can be used ine render without using .bind function
    }

   async onFormSubmit(x){
        x.preventDefault();
        const response= await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${this.state.entry}&image_type=photo&pretty=true`)
        console.log(this.state.entry)
        console.log(response.data.hits)
        this.setState({images: response.data.hits})
    }

    render(){
        return(
            <div><h1>Search Engine</h1>
                <div className="ui segment">
                    <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                        <div className='field'>
                            <div className='ui massive icon input'>                       
                                 <input type='text' placeholder='Search Here'
                                 onChange={(x)=>{this.setState({entry:x.target.value.toUpperCase()});
                                 //console.log(this.state.entry)
                                }}
                                 value={this.state.entry}//USED TO DISPLAY THE CURRENT VALUE STORED IN STATE-
                                 //IN THE INPUT SPACE 
                                 ></input>
                                <i className='search icon'></i>
                             </div>
                             <div>we currently have {this.state.images.length} images</div>
                        </div>
                    </form>
                </div>
                <ImageList imgs={this.state.images}></ImageList>
            </div>
        
        )
        }
}
export default SearchInput;