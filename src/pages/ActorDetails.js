import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorDetails } from '../services/movieService';

function ActorDetails() {
  const [actor, setActor] = useState(null);
  let { actorId } = useParams();

  useEffect(() => {
    const fetchActorDetails = async () => {
      const actorData = await getActorDetails(actorId);
      setActor(actorData);
    };

    fetchActorDetails();
  }, [actorId]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{actor.name}</h1>
      <p>{actor.biography}</p>
      {/* Add more actor details here */}
    </div>
  );
}

export default ActorDetails;