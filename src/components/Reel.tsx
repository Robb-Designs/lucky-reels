import type { SymbolType } from '../types/game';

//Defining props
interface ReelProps {
  symbol: SymbolType;
}

export default function Reel({ symbol }: ReelProps) {
  return (
    <section>
      <div>{symbol}</div>
    </section>
  );
}