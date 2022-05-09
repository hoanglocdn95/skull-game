import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from 'redux/slice/user.slice';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  console.log('Home ~ user', user);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(updateUser())}> test slice</button>
    </div>
  );
};
export default Home;
