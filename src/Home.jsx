import { useState } from "react";
import BlogList from "./BlogList";


//parent component 
 const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body:'lorem ipsum...', author:'Temi', id: 1},
    {title: 'Welcome party', body:'lorem ipsum...', author:'Gemi', id: 2},
    {title: 'web dev top tips', body:'lorem ipsum...', author:'Ayuba', id: 3},
    {title: 'web dev top tips', body:'lorem ipsum...', author:'Temi', id: 4},
  ])

 


  return (
    <div className="home">
      {/* child component  */}
     <BlogList blogs={blogs} title="All Blogs!" />
     <BlogList blogs={blogs.filter((blog) => blog.author === "Temi")} title="Temi blogs!" />

    </div>
  );
};

export default Home;
