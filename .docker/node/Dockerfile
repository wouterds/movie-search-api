FROM arm64v8/node:18-alpine AS build
WORKDIR /code

COPY ./tsconfig.json ./tsconfig.json
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./src ./src

RUN yarn --frozen-lockfile
RUN yarn build

FROM arm64v8/node:18-alpine AS dependencies
WORKDIR /code

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn --frozen-lockfile --prod

FROM arm64v8/node:18-alpine
WORKDIR /code

COPY --from=build /code/dist /code/dist
COPY --from=dependencies /code/node_modules /code/node_modules
COPY ./package.json ./package.json

ENV TZ Europe/Brussels

CMD ["yarn", "start"]
