import _ from 'lodash';
import { getLoggedUser } from './auth';


export const addPost = (post) => {
    if (!post) return false;

    const allPost = getAllPosts() || [];
    post.id = generateId();
    allPost.push(post);

    localStorage.setItem('postsData' , JSON.stringify(allPost));

    return true;
}

export const getUserPosts = () => {
    const user = getLoggedUser();
    const allPosts = getAllPosts();
    let posts=[]
    if ( !_.isEmpty(allPosts)){
        for (let item in allPosts){
            let post = allPosts[item];
           if ( post.user.id === user.id ){
            posts.push(post);
            }
        }
    } 
    console.log(posts);
    return posts;
}

export const getAllPosts = () => {
    const posts = JSON.parse(localStorage.getItem('postsData'));
    return _.isEmpty(posts) ? null : posts.reverse();
}

const generateId = () => Math.random().toString(36).substring(9);