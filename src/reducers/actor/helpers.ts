import IActor from '../../entities/IActor';
export const getNextActiveActor = (actors: IActor[]): IActor[] => {
    if (actors.length < 1) {
        return actors;
    }

    const sortedActors = actors.sort(actors[0].sort);

    const currentlyActiveActor = actors.filter((actor) => actor.hasActiveTurn);

    if (!currentlyActiveActor) {
        sortedActors[0].hasActiveTurn = true;
        return sortedActors;
    }

    for (let n = 0; n < sortedActors.length; n += 1) {
        if (n + 1 === sortedActors.length) {
            sortedActors[n].hasActiveTurn = false;
            sortedActors[0].hasActiveTurn = true;
            break;
        }

        if (sortedActors[n].hasActiveTurn) {
            sortedActors[n].hasActiveTurn = false;
            sortedActors[n + 1].hasActiveTurn = true;
            break;
        }
    }

    return sortedActors;
};

export const removeActorFromList = (actors: IActor[], actorToRemove: IActor): IActor[] =>
    actors.filter((item) => item.hasActiveTurn)[0].id === actorToRemove.id
        ? getNextActiveActor(actors).filter((item) => !(item.id === actorToRemove.id))
        : actors.filter((item) => !(item.id === actorToRemove.id));
