import { useEffect } from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext";
import WorkoutDetails from "../components/WorkoutDetails";
import Workoutform from "../components/WorkoutForm";

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    }
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <Workoutform />
    </div>
  );
}

export default Home;
