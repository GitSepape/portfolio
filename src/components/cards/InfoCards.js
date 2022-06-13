import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "./CardsStyle";
import styled from "styled-components";
import Post from "./Post";

export const ImagePost = styled.img`
    width: 100%;
`;

const Sidebar = styled.aside`
    width: 100%;
    overflow: auto;
`;

export default function InfoCards() {
    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState([undefined]);
    const [selectedPost, setSelectedPost] = useState([undefined]);

    useEffect(() => {
        axios.get('https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/posts')
            .then(response => setPosts(response.data));
    }, []);

    useEffect(() => {
        if (selectedPost && selectedPost.featured_media) {
            axios.get('https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/media')
                .then(response => setImage(response.data));
        } else {
            setImage(undefined);
        }
    }, [selectedPost]);

    return (
        <Container>
            { <ImagePost></ImagePost>}
        </Container>
    )



}

// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Post from './components/Post';
// import styled from 'styled-components';

// const Container = styled.section`
//   display: flex;
// `;

// const HeroImage = styled.img`
// 	width: 100%;
// 	height: 60%;
// 	object-fit: cover;
//   padding-top: 16px
// `;

// const Sidebar = styled.aside`
//   width: 300px;
//   border-right: 1px solid gray;
//   height: 100vh;
//   overflow: auto;
//   flex-shrink: 0;
// `;

// const Content = styled.main`
//   padding-left: 16px;
//   padding-right: 16px;
//   height: 100vh;
//   overflow: auto;
// `;

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [pages, setPages] = useState([]);
//   const [image, setImage] = useState(undefined);
//   const [selectedPost, setSelectedPost] = useState(undefined);

//   useEffect(() => {
//     axios.get('https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/posts')
//       .then(response => setPosts(response.data));
//   }, []);

//   useEffect(() => {
//     axios.get('https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/pages')
//       .then(response => setPages(response.data));
//   }, []);

//   useEffect(() => {
// 		if (selectedPost && selectedPost.featured_media) {
//       axios.get(`https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/media/${selectedPost.featured_media}`)
//         .then(response => setImage(response.data.source_url));
//     } else {
//       setImage(undefined);
//     }
//   }, [selectedPost]);

//   return (
//     <Container className='grid_cell--33'>
//       <Sidebar>
//         { posts.map((post, i) => <Post>
//           <h1 onClick={() => setSelectedPost(post)}>{ post.title.rendered }</h1>
//           <p dangerouslySetInnerHTML={{__html: post.acf.introduccion}}></p>
//         </Post>)}
//       </Sidebar>
//       <Content>
//         { image && <HeroImage src={image}></HeroImage>}
//         { selectedPost ? <h1>{ selectedPost.title.rendered }</h1> : ''}
//         { selectedPost ? <div dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}></div> : ''}
//       </Content>
//     </Container>
//   );
// }

// export default App;
