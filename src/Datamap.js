import { Data } from './Data';
import { datas } from './App';

export function Datamap() {
  return (
    <div className="datamap">
      {datas.map((dataa) => (
        <Data data={dataa} />))}
    </div>
  );
}
