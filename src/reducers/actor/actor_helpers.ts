import IActor, { sortActors } from "../../entities/IActor";

export const isCurrentActorTopOfTheRound = (actorList: IActor[]): boolean => {
  return actorList.length < 1 || actorList[0].hasActiveTurn;
};

export const getNextActiveActor = (actorList: IActor[]): IActor[] => {
  if (actorList.length < 1) {
    return actorList;
  }

  const sortedActors = [...actorList].sort(sortActors);

  const currentlyActiveActor = actorList.filter((actor) => actor.hasActiveTurn);

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

export const removeActorFromList = (
  actorToRemove: IActor,
  actorList: IActor[]
): IActor[] => {
  const activeActor = actorList.filter((item) => item.hasActiveTurn);

  const isRemovedActorCurrent =
    actorToRemove.id === (activeActor && activeActor[0] && activeActor[0].id);

  const newActorList = isRemovedActorCurrent
    ? getNextActiveActor(actorList).filter(
        (item) => !(item.id === actorToRemove.id)
      )
    : actorList.filter((item) => !(item.id === actorToRemove.id));

  return [...newActorList];
};
