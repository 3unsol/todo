export default () => {
  const now = new Date(); // 현재 날짜
  const month = now.getMonth() + 1; // 오늘 날짜에서 달만 갖고 오기
  const date = now.getDate(); // 오늘 날짜에서 일만 갖고 오기
  const weekList = new Array(
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat."
  );
  const week = weekList[now.getDay()]; // 오늘 날짜에서 요일만 갖고 오기
  // Date.getDay() : sun (0) - sat (6)
  const time = now.getTime();

  const dateInfo = {
    month,
    date,
    week,
    time,
  };
  return dateInfo;
};
