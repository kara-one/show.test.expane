# Hi from Explain
<hi@expane.pro>
Меня зовут Фёдор, я техлид в Expane. Спасибо большое за отклик на нашу вакансию. Немного информации о нас и вакансии, чтобы Вы могли принять решение, подходит ли она Вам. Мы - стартап, который работает над собственным продуктом. Это облачное решение для автоматизации и продвижения клиенто-ориентированного бизнеса. Техническая команда состоит из 4х разработчиков и мы хотим нанять ещё одного. Вот основные вызовы, которые Вас ждут, если Вы захотите присоединиться к Expane:

- Вам придётся развить самодисциплину - никто не будет стоять у Вас за спиной в течении рабочего дня, однако в конце дня написанный Вами код будет просматриваться;
- у Вас не будет проджект менеджера, Вы сами будете писать таски, над которыми будете работать - для этого Вам понадобится досконально изучить продукт;
- Вы будете обучаться самостоятельно, я буду давать вектор, помогать советами, но процесс обучения останется Вашей ответственностью;

Я сознательно не буду писать все преимущества, которые Вас ждут по сравнению со среднестатистической аутсорс компанией, расскажу Вам о них в первый рабочий день.

Процесс найма состоит из 3х шагов и описан [ТУТ](https://www.notion.so/expane-joining-flow-fda22bae990c4ab1b566fc1da7d4677f). Т.к. мы не требуем от кандидатов коммерческого опыта, основным критерием, на основании которого мы оцениваем квалификацию, внимание к деталям, умение работать с Git и т.д. - тестовое задание, выполнение которого займёт примерно один рабочий день. Если Вы готовы к этому, все инструкции по ссылке выше - буду рад увидеть что у Вас получится. Буду также рад любому фидбэку, даже если Вы не закончите выполнение задания(что именно оказалось слишком сложным, почему не дошли до конца и т.д.)

Желаю удачи и хорошего весеннего настроения! ☀️

Фёдор,
Software engineer at Expane

# EXPANE JOINING FLOW
https://www.notion.so/expane-joining-flow-fda22bae990c4ab1b566fc1da7d4677f

Hey buddy, how is it going?

We are happy to see you here, come in and make yourself comfortable. We are **[Expane](https://expane.pro/)** - a tiny ambitious startup that builds a SaaS platform for service businesses managing and growing.

Not to waste your and our time, we want to make our process of hiring completely transparent, so these are 3 simple steps to join us:

**1.** You will need to complete the test task, described above and submit it. Within a couple of days, we'll hit you back with feedback;

**IMPORTANT:** As we do not require any commercial experience from our candidates, we will evaluate your skills by every piece and detail of this task, so if you want to join us, please take it very seriously.

**2.** If positive, we'll assign a short interview with the technical lead to understand whether we will be a good fit;

**3.** If positive, on the next day we'll propose you to work a trial period of two weeks[paid] to confirm that we are a good fit. If no major issues arise, we'll propose you to sign the contract and join the expaners team to build an amazing product together; 

## TEST TASK

It may take a full working day to complete this task, if you are not comfortable spending that much time, feel free to stop it and go out chilling...😇 You will be using libraries/technologies that are used on our project and the task itself is very similar to what you'll be doing daily as a developer in our team.

- Sign up on [github.com](http://github.com) if you don't have an account yet
- Create a public repository

> When you will commit the code, please make up meaningful descriptions to commits and also create at least one Pull Request with self-explained description. We want to make sure you have solid skills working with the version control system and you pay attention to how you explain what are your commits about.

- Create new project using Create React App, use **TypeScript** [template](https://create-react-app.dev/docs/adding-typescript/)
- Add **tailwindcss** - you don't need to follow production setup, just consume the .css file without bundle size optimization, use it to style the app instead of writing CSS directly
- Add **react-query** to fetch/cache application data
- Add **graphql-request** to communicate with the server. GraphQL endpoint to consume - [https://test-task.expane.pro/api/graphql](https://test-task.expane.pro/api/graphql)(to get online API documentation open it in browser)
- Add **react-hook-form** to submit/validate forms
- Create a simple application that allows to view and edit the list of clients. Basically, it should consist of a table, modal add/edit dialog, and add button. Please make it as pretty and UX-friendly as you can - imagine Yourself as administrator who operate with clients 100 times a day.

> Make sure you use all **bolded** technologies mentioned before - we will evaluate how task is done using particular stack that we use in our product. And yeah, please don't use Redux, You don't need it, really...🥴

- Deploy result application anywhere you want, **Github Pages** and **Vercel** are simplest options
- If you want to add any information or explain any details - please do it inside **README.md**
- Send link to result repository and url of deployed application for evaluation to email: [hi@expane.pro](mailto:hi@expane.pro)

## Links
- https://tailwindcss.com/docs/flex-direction
- https://tailwindui.com/components/application-ui/forms/form-layouts
- https://tailwindui.com/documentation
- https://heroicons.com/
- https://kimia-ui.vercel.app/components/modal
- https://react-hook-form.com/get-started/
- https://www.npmjs.com/package/@tailwindcss/forms
- https://create-react-app.dev/docs/adding-typescript/
- https://github.com/tailwindlabs/tailwindcss-forms
- https://www.npmjs.com/package/react-query
- https://www.npmjs.com/package/graphql-request
- https://www.npmjs.com/package/react-hook-form


## NPM
npm install --save typescript "@types/node" "@types/react" "@types/react-dom" "@types/jest"
npm install -D "tailwindcss@npm:@tailwindcss/postcss7-compat" "@tailwindcss/postcss7-compat" "postcss@^7" "autoprefixer@^9"

## GraphQL Schema
directive @cacheControl(
  maxAge: Int
  scope: CacheControlScope
) on FIELD_DEFINITION | OBJECT | INTERFACE
directive @specifiedBy(url: String!) on SCALAR
enum CacheControlScope {
  PUBLIC
  PRIVATE
}

type Client {
  id: ID!
  firstName: String!
  lastName: String!
  phone: String
  avatarUrl: String
}

type Mutation {
  addClient(
    firstName: String!
    lastName: String!
    phone: String
    avatarUrl: String
  ): Client
  updateClient(
    id: ID!
    firstName: String
    lastName: String
    phone: String
    avatarUrl: String
  ): Client
}

type Query {
  getClients: [Client]
}

scalar Upload