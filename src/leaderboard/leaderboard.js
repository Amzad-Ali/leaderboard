import React from 'react'
import './leaderboard.css'
export default function Leaderboard(){
    const scores = [
        { player: 'Alice', time: '00:28:00' },
        { player: 'Bob', time: '00:43:00' },
        { player: 'Charlie', time: '00:34:00' },
        { player: 'David', time: '00:52:00' },
        { player: 'Eve', time: '00:54:00' },
        { player: 'Frank', time: '00:37:00' },
        { player: 'Grace', time: '00:46:00' },
        { player: 'Heidi', time: '00:39:00' },
        { player: 'Ivan', time: '00:49:00' },
        { player: 'Judy', time: '00:51:00' },
        { player: 'Karl', time: '00:58:00' },
        { player: 'Laura', time: '00:55:00' }
    ];

    const timeToSeconds = (time) => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    };
    
    // Sort the scores by time
    const topScores = scores
        .sort((a, b) => timeToSeconds(b.time) - timeToSeconds(a.time))
        .slice(0, 10);

    return (
        <div className="leaderboard-container">
        <h1>Leaderboard</h1>
        <ul className="leaderboard">
            <li className="header">
                <span className="left-side">
                    <span className="rank">Rank</span>
                    <span className="player">Player</span>
                </span>
                <span className="time">Time</span>
            </li>
            {topScores.map((entry, index) => (
                <li key={index} className="entry">
                    <span className="left-side">
                        <span className="rank">{index + 1}</span>
                        <span className="player">{entry.player}</span>
                    </span>
                    <span className="time">{entry.time}</span>
                </li>
            ))}
        </ul>
    </div>
    );
}