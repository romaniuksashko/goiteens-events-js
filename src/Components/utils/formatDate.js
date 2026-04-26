import { format } from "date-fns";

export const formatDate = (date) => {
  return format(Date.parse(date), "dd MMMM Y, hh:mm")
}