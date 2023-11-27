import { FSD } from './FSD';
import { full } from './App';

export function Fsdmap() {
  return (
    <div className="fsdmap">
      {full.map((fsd, index) => (
        <FSD items1={fsd} key={index} />))}

    </div>
  );
}
