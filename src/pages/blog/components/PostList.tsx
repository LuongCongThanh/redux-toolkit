import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { deletePost, startEditingPost } from 'pages/blog/blog.reducer';
import PostItem from './PostItem';

const PostList = () => {
  const postList = useSelector((state: RootState) => state.blog.postList);
  console.log(postList);
  const dispatch = useDispatch();
  const handleDelete = (postId: string) => {
    dispatch(deletePost(postId));
  };
  const handleStartEditing = (postId: string) => {
    dispatch(startEditingPost(postId));
  };
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>List Blog</h2>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {postList.map((post) => (
            <PostItem post={post} key={post.id} handleDelete={handleDelete} handleStartEditing={handleStartEditing} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PostList;
