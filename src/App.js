// import React, {Components} from 'react';
import React from "react";
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Data  from './resumeDataSite.json';




const App = () => {
  const data = Data;
  return (
    <div>
      <div className="App">
        <Header data={data.main} />
        <About data={data.main} />
        <Resume data={data.resume} />
        <Portfolio data={data.portfolio} />
        <Testimonials data={data.testimonials} />
        <Contact data={data.main} />
        <Footer />
      </div>
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       foo: 'bar',
//       resumeData:{}
//     }
//   }

//   getResumeData(){
//     $.ajax({
//       url:'http://localhost:3000/resumeData.json',
//       dataType:'json',
//       cache: false,
//       success: function(data){
//         this.setState({resumeData: data});
//       }.bind(this),
//       error: function(xhr, status, err){
//         console.log(err);
//         alert(err);
//       }
//     });
//   }

//   componentDidMount(){
//     this.getResumeData();
//   }

//   render() {
//     console.log(this.state.resumeData);
//     return (
      // <div className="App">
      //   <Header data={this.state.resumeData.main} />
      //   <About data={this.state.resumeData.main} />
      //   <Resume data={this.state.resumeData.resume} />
      //   <Portfolio data={this.state.resumeData.portfolio} />
      //   <Testimonials data={this.state.resumeData.testimonials} />
      //   <Contact data={this.state.resumeData.main} />
      //   <Footer />
      // </div>
//     );
//   }
// }

// export default App;
