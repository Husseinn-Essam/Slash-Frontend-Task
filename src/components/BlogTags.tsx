interface BlogTagsProps {
  tags: string[];

}

const BlogTags: React.FC<BlogTagsProps> = ({tags}) => {
  return (
    <div className="flex mb-2 gap-1 mt-2">
      {tags.map((category: string,index) => (
        <div
          key={index}
          className="text-dark-primary rounded-lg px-1 py-1 text-xs bg-indigo-950"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default BlogTags;