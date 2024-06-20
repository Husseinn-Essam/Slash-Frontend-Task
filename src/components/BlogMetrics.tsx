interface BlogMetricsProps {
  views: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

const BlogMetrics: React.FC<BlogMetricsProps> = ({ views, reactions }) => {
  return (
    <>
      <p className="text-xs text-gray-600 font-bold ml-2">{views} Views</p>
      <p className="text-xs text-gray-600 font-bold ml-2">
        {reactions.likes} Likes
      </p>
      <p className="text-xs text-gray-600 font-bold ml-2">
        {reactions.dislikes} Dislikes
      </p>
    </>
  );
};

export default BlogMetrics;
