import { useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext"

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    const {workouts, dispatch} = useWorkoutContext()

    const { user } = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts/', {
                headers: {
                    'Authorization': `Baerer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }

            // const contentType = response.headers.get('content-type');
            //     console.log(contentType);
                
            // if (contentType && contentType.includes('application/json')) {
                //     const json = await response.json();
                //     setWorkouts(json);
                // } else {
                //     throw new Error('Invalid content type. Expected JSON.');
                // }
        }

        if (user) {
            fetchWorkouts();
        }
    }, [dispatch, user]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;