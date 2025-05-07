import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of 3D Web Design',
    excerpt: 'Exploring how Three.js and WebGL are changing the landscape of modern web design.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Web Design',
    date: 'June 15, 2023',
    readTime: '5 min read',
    author: 'Aminur Rahman',
    image: 'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Building Responsive React Applications',
    excerpt: 'Tips and tricks for creating responsive layouts that work across all devices.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Development',
    date: 'May 22, 2023',
    readTime: '8 min read',
    author: 'Aminur Rahman',
    image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'Optimizing Website Performance',
    excerpt: 'How to improve loading times and create a better user experience.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Performance',
    date: 'April 10, 2023',
    readTime: '6 min read',
    author: 'Aminur Rahman',
    image: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'The Importance of UI/UX Design',
    excerpt: 'Why good design is crucial for creating successful digital products.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Design',
    date: 'March 5, 2023',
    readTime: '7 min read',
    author: 'Aminur Rahman',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'Introduction to MERN Stack Development',
    excerpt: 'A guide to building full-stack applications with MongoDB, Express, React, and Node.js.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Development',
    date: 'February 18, 2023',
    readTime: '10 min read',
    author: 'Aminur Rahman',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    title: 'Animations in React Applications',
    excerpt: 'How to implement smooth animations using Framer Motion and React Spring.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Development',
    date: 'January 10, 2023',
    readTime: '8 min read',
    author: 'Aminur Rahman',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block py-1 px-2 rounded-full text-xs font-medium bg-primary-500 text-white">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2 space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <a href={`/blog/${post.id}`}>{post.title}</a>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <User size={16} className="mr-1" />
            <span>{post.author}</span>
          </div>
          
          <a
            href={`/blog/${post.id}`}
            className="ml-auto text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
          >
            Read More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Web Design', 'Development', 'Performance', 'Design'];
  
  const filteredPosts = blogPosts.filter((post) => {
    // Filter by search query
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      <div className="bg-primary-950 dark:bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-300">
              Thoughts, ideas, and insights about web development and design.
            </p>
          </motion.div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;