

interface CreditDisplayProps{
    currentCredits: number;
    currentBet: number
}


export default function CreditDisplay({currentCredits, currentBet}: CreditDisplayProps){
    return(
        <div>
            <p>Your Credits: {currentCredits} </p>
            <p>Your Bet: {currentBet}</p>
        </div>
    )
}
