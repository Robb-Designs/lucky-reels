//TYPES


//union type that keeps symbols to valid values
export type SymbolType = '🍒' | '🍋' | '⭐' | '💎';

//structure of the object returned when the player spins.
export interface SpinResult {
    reels: SymbolType[],
    winnings: number ,
    message: string
}