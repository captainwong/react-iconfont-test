import { CartEmpty } from './CartEmpty';
import { Search } from './Search';
import { Edit } from './Edit';
import { Share } from './Share';
import { Setting } from './Setting';
import { Lock } from './Lock';
import { Unlock } from './Unlock';
import { User } from './User';
import { List } from './List';
import { International } from './International';
import { Refresh } from './Refresh';

const App: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>icon</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CartEmpty</td><td><CartEmpty /></td></tr>
        <tr><td>Search</td><td><Search /></td></tr>
        <tr><td>Edit</td><td><Edit /></td></tr>
        <tr><td>Share</td><td><Share /></td></tr>
        <tr><td>Setting</td><td><Setting /></td></tr>
        <tr><td>Lock</td><td><Lock /></td></tr>
        <tr><td>Unlock</td><td><Unlock /></td></tr>
        <tr><td>User</td><td><User /></td></tr>
        <tr><td>List</td><td><List /></td></tr>
        <tr><td>International</td><td><International /></td></tr>
        <tr><td>Refresh</td><td><Refresh /></td></tr>
      </tbody>
    </table>
  );
};

export default App;
