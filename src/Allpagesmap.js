import { Allpages } from './Allpages';
import { allimg } from './App';

export function Allpagesmap() {
  return (
    <div>
      {allimg.map((allitems) => (
        <Allpages items={allitems} key={allitems.heading}/>))}
    </div>
  );
}
