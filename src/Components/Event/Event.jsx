import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";

import { formatDate } from "../utils/formatDate"
import { formatDistan } from "../utils/formatDistance";

import { Item } from "./Event.style";
import { Heading } from "./Event.style";
import { Text } from "./Event.style";

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <Item>
      <Heading>{name}</Heading>
      <Text><FaLocationDot/> {location}</Text>
      <Text><FaUser/> {speaker}</Text>
      <Text><BsFillCalendarDateFill/> {formatDate(start)}</Text>
      <Text><MdOutlineAccessTimeFilled/> {formatDistan(start, end)}</Text>
      <Text><SiOpenaccess/> {type}</Text>
    </Item>
  );
};
