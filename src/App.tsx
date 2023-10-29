import { IconSim } from './iconfont/IconSim';
import { IconCartEmpty } from './iconfont/IconCartEmpty';
import { IconSearch } from './iconfont/IconSearch';
import { IconEdit } from './iconfont/IconEdit';
import { IconShare } from './iconfont/IconShare';
import { IconSetting } from './iconfont/IconSetting';
import { IconLock } from './iconfont/IconLock';
import { IconUnlock } from './iconfont/IconUnlock';
import { IconUser } from './iconfont/IconUser';
import { IconList } from './iconfont/IconList';
import { IconInternational } from './iconfont/IconInternational';
import { IconRefresh } from './iconfont/IconRefresh';

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
        <tr><td>IconSim</td><td><IconSim /></td></tr>
        <tr><td>IconCartEmpty</td><td><IconCartEmpty /></td></tr>
        <tr><td>IconSearch</td><td><IconSearch /></td></tr>
        <tr><td>IconEdit</td><td><IconEdit /></td></tr>
        <tr><td>IconShare</td><td><IconShare /></td></tr>
        <tr><td>IconSetting</td><td><IconSetting /></td></tr>
        <tr><td>IconLock</td><td><IconLock /></td></tr>
        <tr><td>IconUnlock</td><td><IconUnlock /></td></tr>
        <tr><td>IconUser</td><td><IconUser /></td></tr>
        <tr><td>IconList</td><td><IconList /></td></tr>
        <tr><td>IconInternational</td><td><IconInternational /></td></tr>
        <tr><td>IconRefresh</td><td><IconRefresh /></td></tr>
      </tbody>
    </table>
  );
};

export default App;
