import { Cyber } from './Cyber';
import { cybe } from './App';

export function Cybermap() {
  return (
    <div className="cybermap">
      {cybe.map((cyberr) => (
        <Cyber cyber={cyberr} />
      ))}
    </div>
  );
}
