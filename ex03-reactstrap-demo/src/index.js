import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AlertExample from './AlertExample'
import Navigation from './Navigation'
import Footer from './Footer';
import PageHeading from './PageHeading';
import Widget from './Widget';
// import BlogPost from './BlogPost';
import Post from './Post';

ReactDOM.render(<Navigation />, document.getElementById('navigation'));
ReactDOM.render(<PageHeading />, document.getElementById('pageHeading'));
ReactDOM.render(<Post />, document.getElementById('content'));
ReactDOM.render(<Widget />, document.getElementById('widget'));
// ReactDOM.render(<AlertExample />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));