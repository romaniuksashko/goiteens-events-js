import { formatDistanceStrict } from "date-fns";

export const formatDistan = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end))
}