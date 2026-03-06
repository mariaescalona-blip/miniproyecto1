import ActivityCard from "./ActivityCard"

function ActivityList({ activities, reload }) {

  return (

    <div>

      {activities.map(activity => (

        <ActivityCard
          key={activity.id}
          activity={activity}
          reload={reload}
        />

      ))}

    </div>

  )
}

export default ActivityList
