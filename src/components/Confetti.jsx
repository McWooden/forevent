import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"


export default function Confetti() {
    const [showConfetti, setShowConfetti] = useState(false)
    const [winDimension, setWinDimension] = useState({width: window.innerWidth, height: window.innerHeight})
    const detectDimension = () => {
        setWinDimension({width: window.innerWidth, height: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', detectDimension)
        return () => window.addEventListener('resize', detectDimension)
    }, [])
    return <div>
        <div onClick={() => setShowConfetti(prev => !prev)} className={`p-2 rounded text-neutral-100 shadow active:scale-x-105 duration-300 ${showConfetti ? 'bg-violet-400' : 'bg-violet-700'}`}>☝️🥳 Klik saya</div>
        {showConfetti && <ReactConfetti width={winDimension.width} height={winDimension.height}/>}
    </div>
}

// Klik saya ☝️🥳