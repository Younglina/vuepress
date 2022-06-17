let url = 'https://leetcode.cn/graphql/noj-go/';
let graphqlQuery = {
  query:
    '\n    query userProfileCalendar($userSlug: String!, $year: Int) {\n  userCalendar(userSlug: $userSlug, year: $year) {\n    streak\n    totalActiveDays\n    submissionCalendar\n  }\n}\n    ',
  variables: { userSlug: 'younglina' },
}
const options = {
  method: 'POST',
  url,
  headers: {},
  data: graphqlQuery,
};

const response = await axios.request(options)

console.log(response)
