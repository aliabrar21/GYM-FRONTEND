import React from "react";

const WorkoutSection = () => {
    return (
        <section className="workout_session">
            <div className="wrapper">
                <h1>TOP WORKOUT SESSION</h1>
                <p>A gym top workout session boosts strength, stamina, and flexibility through intense exercises like cardio, weightlifting, and core training, leaving you energized, motivated, and focused on achieving peak fitness goals.</p>
                <img src='/img5.jpg' alt='workout' />
            </div>
            <div className="wrapper">
                <h1>FEATURED BOOTCAMPS</h1>
                <p>A gym featured bootcamp is a high-energy group training program combining strength, cardio, and endurance exercises. It’s designed to challenge all fitness levels, boost performance, burn calories, and build overall strength in a motivating environment.</p>
                <div className='bootcamps'>
                    <div>
                        <h4>Full-Body Workout</h4>
                        <p>Combines cardio, strength, and endurance training for maximum results.</p>
                    </div>
                    <div>
                        <h4>High Intensity</h4>
                        <p>Fast-paced sessions designed to burn calories and boost stamina.</p>
                    </div>
                    <div>
                        <h4>Group Motivation</h4>
                        <p>Encouraging environment with trainers and peers pushing you forward.</p>
                    </div>
                    <div>
                        <h4>Goal-Oriented</h4>
                        <p>Focuses on fat loss, muscle building, and improved fitness performance.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkoutSection;