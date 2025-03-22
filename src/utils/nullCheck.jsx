import { MdOutlineQuestionMark as Question } from "react-icons/md";

// Eğer ki parametre olarak gelen değer varsa ekrana bas yoksa yerine ? return et
const nullCheck = (value, color) => {
  return value || <Question style={{ color: color || "#535bf2" }} />;
};

export default nullCheck;
