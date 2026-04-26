import { Event } from "../Event/Event"
import { List } from "./PageBoard.style";

export const PageBoard = ({ events }) => {
  return (
    <List>
      {events.map(({name, location, speaker, type, time: {start, end}}) => {
        return <Event key={name} name={name} location={location} speaker={speaker} type={type} start={start} end={end} />
      })}
    </List>
  )
}