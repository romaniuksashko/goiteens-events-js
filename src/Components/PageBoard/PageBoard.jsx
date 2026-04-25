import { Event } from "../Event/Event"
import { List } from "./PageBoard.style";

let n = 0;

export const PageBoard = ({ events }) => {
  return (
    <List>
      {events.map(({name, location, speaker, type, time}) => {
        return <Event key={n += 1} name={name} location={location} speaker={speaker} type={type} time={time} />
      })}
    </List>
  )
}